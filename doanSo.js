"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
console.log("So bi mat la X");
var x = Math.floor(Math.random() * 101);
console.log(x);
var y = Number((0, readline_sync_1.question)("Moi nhap 1 so trong khong 0-100: "));
if (y == x)
    console.log("Win " + "100");
else {
    if (y < x)
        console.log("So nho qua");
    else
        console.log("So lon qua");
    y = Number((0, readline_sync_1.question)("Moi nhap 1 so trong khong 0-100: "));
    if (y == x)
        console.log("Win " + "50");
    else {
        if (y < x)
            console.log("So nho qua");
        else
            console.log("So lon qua");
        y = Number((0, readline_sync_1.question)("Moi nhap 1 so trong khong 0-100: "));
        if (y == x)
            console.log("Win " + "30");
        else
            console.log("Game over");
    }
}
