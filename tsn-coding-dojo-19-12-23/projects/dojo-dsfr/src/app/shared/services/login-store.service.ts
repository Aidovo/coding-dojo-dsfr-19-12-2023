import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginStoreService {
  private readonly USER_KEY = 'user';

  /**
   * Enregistre les infos de l'utilisateur connecté dans le store du navigateur
   *
   * Pour enregistrer un objet, on peut utiliser JSON.stringify()
   *
   * @param user <User> Infos de l'utilisateur connecté
   * @param rememberMe <boolean> Si on veut garder en mémoire l'utilisateur connecté après la fermeture de l'application
   */
  login(user?: User, rememberMe?: boolean): void {
    if (!user) {
      return;
    }

    if (rememberMe) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    } else {
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  /**
   * Récupère les informations de l'utilisateur connecté dans le store du navigateur
   *
   * Pour récupérer un objet, on peut utiliser JSON.parse()
   *
   */
  getUser(): User | undefined {
    const localUser = JSON.parse(localStorage.getItem(this.USER_KEY)!) as User;
    const sessionUser = JSON.parse(
      sessionStorage.getItem(this.USER_KEY)!
    ) as User;

    return localUser || sessionUser;
  }

  /**
   * Vérifie s'il existe un utilisateur enregistré dans le store du navigateur
   */
  isLogged(): boolean {
    const isLocalLogged = !!localStorage.getItem(this.USER_KEY);
    const isSessionLogged = !!sessionStorage.getItem(this.USER_KEY);

    return isLocalLogged || isSessionLogged;
  }

  /**
   * Supprime les informations de l'utilisateur dans le store du navigateur
   */
  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.USER_KEY);
  }
}
