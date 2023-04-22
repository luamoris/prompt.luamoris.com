// Textarea

class lmTextarea {
   constructor(idName) {
      this.textarea = this.getElement(idName);
   }

   getElement(idName) {
      const textarea = document.getElementById(idName);
      if (!textarea || (textarea && textarea.tagName.toLowerCase() !== "textarea")) {
         throw "The element will not find or not is textarea";
      }
      return textarea;
   }

   addEvent(fun) {
      this.textarea.addEventListener("input", fun);
   }
}

function getSize(textarea) {
   const pattern = /(\w+)px/;
   const style = getComputedStyle(textarea);
   return {
      boxSizing: style["boxSizing"],
      height: textarea.scrollHeight,
      paddingTop: parseInt(pattern.exec(style["paddingTop"])[1]),
      paddingBottom: parseInt(pattern.exec(style["paddingBottom"])[1]),
      border: parseInt(pattern.exec(style["border"])[1]),
   }
}

function autoResize(textarea) {
   textarea.style.height = "auto";
   const size = getSize(textarea);
   console.log(size);
   const outContent = size.paddingTop + size.paddingBottom + (size.border * 2);
   const newHeight = size.boxSizing !== "border-box" ? (size.height + outContent) : size.height;
   textarea.style.height = `${newHeight}px`;
   console.log(newHeight);
}

const inputText = new lmTextarea("inputTemplate");
inputText.addEvent(() => autoResize(inputText.textarea))