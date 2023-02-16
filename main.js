"use strict";

const buttonsContainerEl = document.getElementById("buttons");
buttonsContainerEl.addEventListener("click", changeView);

function changeView(e) {
  if (e.target.dataset.action) {
    let action = e.target.dataset.action;
    viewController[action]();
  }
}
const viewController = {
  isOn: false,
  helloMsg: "Hello! homeworks.done ? X : A",
  byeMsg: "Good bye...",
  msgEl: document.querySelector(".home-msg"),
  viewEl: document.getElementById("view"),
  viewContentEl: null,
  onOff: function () {
    this.removeViewContentEl();
    if (this.isOn) {
      this.msgEl.textContent = this.byeMsg;
      buttonsContainerEl.removeEventListener("click", changeView);
      setTimeout(() => {
        this.viewEl.classList.toggle("off");
        this.isOn = !this.isOn;
        buttonsContainerEl.addEventListener("click", changeView);
      }, 1500);
    } else {
      this.msgEl.textContent = this.helloMsg;
      this.viewEl.classList.toggle("off");
      this.isOn = !this.isOn;
    }
  },
  goTv: function () {
    const el = createYoutubeIframe("https://www.youtube.com/embed/y-28CssnqEE");
    this.addViewContentEl(el);
  },
  goBack: function () {
    console.log("back");
    this.removeViewContentEl();
  },
  goShop: function () {
    console.log("shop");
  },
  goGoogle: function () {
    this.addViewContentEl(createIframe("https://www.google.com/search?igu=1"));
  },
  addViewContentEl(el) {
    this.viewEl.classList.add("loading");
    if (this.viewContentEl) {
      this.viewContentEl.replaceWith(el);
      this.viewContentEl = el;
    } else {
      this.viewEl.prepend(el);
      this.viewContentEl = el;
    }
  },
  removeViewContentEl() {
    this.viewEl.classList.remove("loading");
    if (this.viewContentEl) {
      this.viewContentEl.remove();
      this.viewContentEl = null;
    }
  },
};
function createShopEl(games) {}
function createIframe(src) {
  const el = document.createElement("iframe");
  el.src = src;
  return el;
}
function createYoutubeIframe(src) {
  const el = createIframe(src);
  el.width = "100%";
  el.height = "315";
  el.title = "Youtube video player";
  el.frameborder = "0";
  el.allow = "accelerometer";
  el.setAttribute("autoplay", true);
  el.setAttribute("clipboard-write", true);
  el.setAttribute("encrypted-media", true);
  el.setAttribute("gyroscope", true);
  el.setAttribute("picture-in-picture", true);
  el.setAttribute("web-share", true);
  el.setAttribute("allowfullscreen", true);
  return el;
}
