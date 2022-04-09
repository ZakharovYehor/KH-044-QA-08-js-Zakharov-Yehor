"use strict";

let tv = {
  currentChannel: 1,
  nextChannel: function () {
    return this.currentChannel++;
  },
  previousChannel: function () {
    return this.currentChannel--;
  },
  setChannel: function (number) {
    this.currentChannel = number;
    return this.currentChannel;
  },
};

tv.nextChannel();
tv.nextChannel();
tv.previousChannel();
console.log(tv.currentChannel);
tv.setChannel(10);
console.log(tv.currentChannel);
