!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");document.querySelector("body");t.setAttribute("disabled","true"),t.addEventListener("click",(function(){r=setInterval(n,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled","true"),e.setAttribute("disabled","true")}));var r=null;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.2357d696.js.map