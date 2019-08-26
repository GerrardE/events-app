import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
  <div class="well">
  <div>Hello World</div>
  </div>
    <event-thumbnail #thumbnail [event]="event1" ></event-thumbnail>
  </div>
  `
})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2011',
    time: '10:00am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    }
  }
}