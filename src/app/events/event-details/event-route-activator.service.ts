import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { CreateEventComponent } from '../create-event.component';


@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id'])
   
    if (!eventExists) this.router.navigate(['/404'])
    return eventExists
  }
}

export const checkDirtyState = (component: CreateEventComponent) => {
  if (component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }

  return true;
}
