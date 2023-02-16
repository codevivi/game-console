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
  viewEl: document.getElementById("view"),
  msgEl: document.querySelector(".home-msg"),
  iframeEl: null,
  onOff: function () {
    this.removeIframe();
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
    this.addIframe(el);
  },
  goBack: function () {
    console.log("back");
    this.removeIframe();
  },
  goShop: function () {
    console.log("shop");
  },
  goGoogle: function () {
    this.addIframe(createIframe("https://www.google.com/search?igu=1"));
  },
  addIframe(el) {
    this.viewEl.classList.add("loading");
    if (this.iframeEl) {
      this.iframeEl.replaceWith(el);
      this.iframeEl = el;
    } else {
      this.viewEl.prepend(el);
      this.iframeEl = el;
    }
  },
  removeIframe() {
    this.viewEl.classList.remove("loading");
    if (this.iframeEl) {
      this.iframeEl.remove();
      this.iframeEl = null;
    }
  },
};
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
