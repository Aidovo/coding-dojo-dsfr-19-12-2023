import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import {
  ChartData,
  Declaration,
  StatutEnum,
} from '../models/declaration.model';

@Injectable({
  providedIn: 'root',
})
export class DeclarationMockService {
  private data: Data[] = [
    {
      month: 'avril',
      declarationList: [
        {
          id: '1',
          siret: '9256 5984 5698 5489',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '2',
          siret: '4868 5489 6548 6545',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '3',
          siret: '4568 4895 3544 2685',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '4',
          siret: '4568 2357 7895 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '5',
          siret: '4568 2357 4685 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '6',
          siret: '4568 5682 4685 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
      ],
    },
    {
      month: 'mai',
      declarationList: [
        {
          id: '111',
          siret: '9256 5984 5698 5489',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '222',
          siret: '4868 5489 6548 6545',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '333',
          siret: '4568 4895 3544 2685',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '444',
          siret: '4568 2357 7895 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '555',
          siret: '4568 2357 4685 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'Moi',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
        {
          id: '666',
          siret: '4568 5682 4685 1567',
          raisonSociale: 'Raison Sociale',
          origine: 'ATLAS',
          statut: StatutEnum.EN_DSN,
          date: new Date(),
        },
      ],
    },
  ];

  constructor() {}

  public getData(month: string): Declaration[] {
    const data = this.data.find((data) => data['month'] == month);
    return data ? data['declarationList'] : [];
  }

  public getChartData() {
    const chartData: ChartData = {
      penging: '245',
      dsnApproved: '3568',
      pendingDSN: '256',
      contestedByMe: '2568',
      contestedByOPCO: '5688',
    };
    return chartData;
  }
}
