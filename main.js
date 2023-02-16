"use strict";
const buttonsContainerEl = document.getElementById("buttons");
buttonsContainerEl.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.dataset.action) {
    let action = e.target.dataset.action;
    controller[action]();
  }
}
const controller = {
  screen: document.getElementById("screen"),

  onOff: () => {
    console.log("on off");
  },
  goTv: () => {
    console.log("tv");
  },
  goBack: () => {
    console.log("back");
  },
  goShop: () => {
    console.log("shop");
  },
  goGoogle: () => {
    console.log("google");
  },
};
