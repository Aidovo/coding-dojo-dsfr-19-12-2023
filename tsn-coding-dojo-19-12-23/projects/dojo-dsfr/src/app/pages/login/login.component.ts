import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerMockService } from '../../shared/services/server-mock.service';
import { User } from '../../shared/models/user.model';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { LoginStoreService } from '../../shared/services/login-store.service';

@Component({
  selector: 'dojo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginStoreService: LoginStoreService,
    private readonly serverMockService: ServerMockService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  /**
   * Envoi au serveur les informations du formulaire
   * Si l'utilisateur existe alors on l'enregistre dans le store du navigateur
   */
  login(): void {
    this.serverMockService
      .postLogin({
        name: this.loginForm?.value.name,
        password: this.loginForm?.value.password,
      })
      .pipe(first())
      .subscribe({
        next: (loggedUser?: User) => {
          const rememberMe = this.loginForm?.value.rememberMe;

          this.loginStoreService.login(loggedUser, rememberMe);

          this.router.navigate(['/tableau-de-bord']);
        },
        error: (error) => console.error(error),
      });
  }

  /**
   * Créé un formulaire de connexion avec 2 inputs obligatoires
   *
   * En savoir plus sur l'utilisation des ReactiveForms : https://angular.io/guide/reactive-forms
   *
   * @private
   */
  private initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      rememberMe: this.formBuilder.control(false, [Validators.required]),
    });
  }
}
