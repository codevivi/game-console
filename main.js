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
  view: document.getElementById("view"),
  iframe: this.view.querySelector(".iframe"),

  onOff: function () {
    console.log("on off");
    this.view.classList.toggle("off");
    if (!this.iframe.classList.contains("off")) {
      this.iframe.classList.add("off");
    }
  },
  goTv: function () {
    if (this.iframe.classList.contains("off")) {
      this.iframe.classList.remove("off");
    }
  },
  goBack: function () {
    console.log("back");
  },
  goShop: function () {
    console.log("shop");
  },
  goGoogle: function () {
    console.log("google");
  },
};
