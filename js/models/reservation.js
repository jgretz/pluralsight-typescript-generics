"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reservation {
    requestResource(requestedResource, requester) {
        this.resource = requestedResource;
        this.organizerName = requester;
        console.log(`${requester} requested a reservation ${this.resource.name}`);
    }
}
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.js.map