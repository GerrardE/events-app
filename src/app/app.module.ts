import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";

import {
  EventDetailsComponent, CreateEventComponent, EventsListComponent,
  EventThumbnailComponent, EventRouteActivator, checkDirtyState, EventService, EventListResolver, CreateSessionComponent
} from "./events/index";

import { NavbarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }
