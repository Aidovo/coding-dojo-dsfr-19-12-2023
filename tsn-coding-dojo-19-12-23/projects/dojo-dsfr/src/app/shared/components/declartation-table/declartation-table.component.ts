import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DsfrDataTable } from '@edugouvfr/ngx-dsfr';
import { Data, Declaration } from '../../models/declaration.model';

const defaultTitleDeclarationTable = {
  field1: 'ID',
  field2: 'SIRET',
  field3: 'Raison social',
  field4: 'Origine',
  field5: 'Status',
  field6: 'Date',
};

@Component({
  selector: 'dojo-declartation-table',
  templateUrl: './declartation-table.component.html',
  styleUrls: ['./declartation-table.component.scss'],
})
export class DeclartationTableComponent implements OnInit {
  //TODO Exercice 2
  data: Declaration[] = [];
  @Input() titres: {} = defaultTitleDeclarationTable;
  datas: DsfrDataTable = { titles: this.titres, rows: [] };

  constructor() {}

  ngOnInit(): void {
      this.updateTableauDonnees(this.data);
  }

  updateTableauDonnees(donnees: Declaration[]): void {
    //TODO Exercice 2
    donnees.forEach((decla: Declaration) => {
      this.datas.rows.push({
        field1: decla.id,
        field2: decla.siret,
        field3: decla.raisonSociale,
        field4: decla.origine,
        field6: decla.date,
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //TODO bonus
    console.log(changes);
  }
}
