const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");document.querySelector("body");t.setAttribute("disabled","true"),t.addEventListener("click",(function(){r=setInterval(d,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled","true"),e.setAttribute("disabled","true")}));let r=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.271a4734.js.map
