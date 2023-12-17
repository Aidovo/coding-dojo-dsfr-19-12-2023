import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { Subscription } from 'rxjs';
enum NavBarAction {
  SELECT = 'select',
  BUTTON = 'button',
}

@Component({
  selector: 'dojo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public name: string = '';
  @Input() public iconTitle: string = '';
  @Input() public type: string = NavBarAction.SELECT;
  @Output()
  public mounthChoice = new EventEmitter<string>();
  optionsValue?: UntypedFormControl;
  form: UntypedFormGroup | null = null;
  formChanges: Subscription | null = null;

  monthSelect = [
    { label: 'Avril', value: 'avril' },
    { label: 'Mai', value: 'mai' },
  ];
  constructor(protected formBuilder: UntypedFormBuilder) {}

  public ngOnInit(): void {
    if (this.type === NavBarAction.SELECT) {
      this.optionsValue = new UntypedFormControl(this.monthSelect[0].value);
      this.form = this.formBuilder.group({
        options: this.optionsValue,
      });
    }
  }

  selectMois(mois: string, ev: Event): void {
    ev.stopPropagation();
    this.mounthChoice.emit(mois);
  }

  protected readonly NavBarAction = NavBarAction;
}
