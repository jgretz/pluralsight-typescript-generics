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
const partyTent_1 = require("./models/partyTent");
const getBigRooms = (rooms, minSize) => rooms.filter((r) => r.capacity >= minSize);
const bigRooms = getBigRooms(partyTent_1.partyTentData, 20);
console.log(bigRooms.map(x => x.name));
// section 4
//# sourceMappingURL=main.js.map