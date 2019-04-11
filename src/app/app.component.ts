import { Component } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: `
            <customer-table (eventClicked)="sendSlug($event)"></customer-table>
            <info-table [customerSlug]="selectedSlug"></info-table>
            `
})
export class AppComponent {
  public selectedSlug: string;
  public sendSlug(e: Event) {
    this.selectedSlug = e.toString();
  }
}
