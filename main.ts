// section 2
const arr: any[] = ["cool string", 42, true];
const companies: Array<string> = ["cool string"];

const checkout = <T>(item: T): T => {
  return item;
};

// section 3.1
const shortenArray = <T>(data: Array<T>, amountToShorten: number): T[] => {
  return data.splice(amountToShorten, data.length);
};

const stringArray: string[] = [
  "Visual Basic",
  "C++",
  "TypeScript",
  "JavaScript"
];

const intArray: number[] = [1, 2, 3];

// console.log(shortenArray(stringArray, 2));
// console.log(shortenArray(intArray, 2));

// section 3.2
import { MeetingResource } from "./models/meetingResource";
import { ConferenceRoom, conferenceRoomData } from "./models/conferenceRoom";
import { PartyTent, partyTentData } from "./models/partyTent";
import { Building, buildingData } from "./models/building";

const getBigRooms = <T extends MeetingResource>(
  rooms: T[],
  minSize: number
): T[] => rooms.filter((r: T) => r.capacity >= minSize);

const bigRooms = getBigRooms(partyTentData, 20);
console.log(bigRooms.map(x => x.name));

// section 4
