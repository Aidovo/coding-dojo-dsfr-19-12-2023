import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServerMockService {

  private readonly USERS: User[] = [
    {
      id: 1,
      name: 'user1',
      password: 'password1',
      role: 'ADMIN'
    }, {
      id: 2,
      name: 'user2',
      password: 'password2',
      role: 'USER'
    }
  ]


  /**
   * Simule un http.post afin de faire une demande de login
   * @param user Partial<User> Nom/mot de passe de l'utilisateur qui souhaite se connecter
   */
  postLogin(user: Partial<User>): Observable<User | undefined> {

    const loggedUser = this.USERS.find(u => u.name === user.name && u.password === user.password);

    if (loggedUser) {
      return of(loggedUser);
    } else {
      throw new Error('L\'utilisateur n\'existe pas');
    }
  }
}
