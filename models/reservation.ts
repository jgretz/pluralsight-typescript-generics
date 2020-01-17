import { MeetingResource } from "./meetingResource";

export class Reservation<T extends MeetingResource> {
  reservationDate: Date;
  organizerName: string;
  resource: T;

  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;

    console.log(`${requester} requested a reservation ${this.resource.name}`);
  }
}
