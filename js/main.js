"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// section 2
const arr = ["cool string", 42, true];
const companies = ["cool string"];
const checkout = (item) => {
    return item;
};
// section 3.1
const shortenArray = (data, amountToShorten) => {
    return data.splice(amountToShorten, data.length);
};
const stringArray = [
    "Visual Basic",
    "C++",
    "TypeScript",
    "JavaScript"
];
const intArray = [1, 2, 3];
// console.log(shortenArray(stringArray, 2));
// console.log(shortenArray(intArray, 2));
// section 3.2
// import { MeetingResource } from "./models/meetingResource";
// import { ConferenceRoom, conferenceRoomData } from "./models/conferenceRoom";
// import { PartyTent, partyTentData } from "./models/partyTent";
// import { Building, buildingData } from "./models/building";
// const getBigRooms = <T extends MeetingResource>(
//   rooms: T[],
//   minSize: number
// ): T[] => rooms.filter((r: T) => r.capacity >= minSize);
// const bigRooms = getBigRooms(partyTentData, 20);
// console.log(bigRooms.map(x => x.name));
// section 4.1
// import { Stack } from "./stack";
// const numberStack: Stack<number> = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// numberStack.push(3);
// console.log(numberStack.pop());
// console.log(numberStack.peek());
// console.log(numberStack.pop());
// console.log(numberStack.pop());
// section 4.2
const conferenceRoom_1 = require("./models/conferenceRoom");
const reservation_1 = require("./models/reservation");
const meeting = new reservation_1.Reservation();
meeting.requestResource(conferenceRoom_1.conferenceRoomData[0], "Gary");
//# sourceMappingURL=main.js.map