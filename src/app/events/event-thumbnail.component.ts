import { Component, Input } from "@angular/core";
import { IEvent } from './shared';

@Component({
  selector: "event-thumbnail",
  template: `
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location.address }}</span>

        <span class="pad-left"
          >{{ event?.location.city }}, {{ event?.location.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online Url: {{ event.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
      .red {
        color: red !important;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 210px;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    if (isEarlyStart) {
      return ["green", "bold"];
    }
    const isLateStart = this.event && this.event.time === "10:00 am";
    if (isLateStart) {
      return ["red", "bold"];
    }
  }
}
