import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { DeviceDetectionService } from '../../shared/services/device-detection.service';
import { LoginStoreService } from '../../shared/services/login-store.service';
import { DeclarationMockService } from '../../shared/services/declaration-mock.service';
import {
  ChartData,
  Data,
  Declaration,
} from '../../shared/models/declaration.model';

@Component({
  selector: 'dojo-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss'],
})
export class TableauDeBordComponent implements OnInit {
  user?: User;
  chartData?: ChartData;
  donneesTableau: Declaration[] = [];

  constructor(
    private readonly loginStoreService: LoginStoreService,
    private readonly router: Router,
    private readonly deviceDetectionService: DeviceDetectionService,
    public readonly declarationService: DeclarationMockService
  ) {}

  public ngOnInit(): void {
    this.user = this.loginStoreService.getUser();
    this.chartData = this.declarationService.getChartData();
    this.donneesTableau = this.declarationService.getData('avril');
  }

  /**
   * Supprime les informations de l'utilisateur connecté
   * Redirection vers la page de connexion
   */
  public logout(): void {
    this.loginStoreService.logout();
    this.router.navigate(['/login']);
  }

  protected readonly NamedNodeMap = NamedNodeMap;

  nouvelleDeclaration(): void {
    console.log('nouvelle declaration');
  }

  changementDeMois(mois: string): void {
    this.donneesTableau = this.declarationService.getData(mois);
  }
}
