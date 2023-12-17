import { Component } from '@angular/core';
import { DsfrLink } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'dsfr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: DsfrLink[] = [
    { label: 'Élément 1', routerLink: '#' },
    { label: 'Élément 2', routerLink: '#' },
    { label: 'Élément 3', routerLink: '#' },
    { label: 'Élément 4', routerLink: '#' },
    { label: 'Élément 5', routerLink: '#' },
    { label: 'Élément 6', routerLink: '#' },
    { label: 'Élément 7', routerLink: '#' },
    { label: 'Élément 8', routerLink: '#' },
  ];
}
