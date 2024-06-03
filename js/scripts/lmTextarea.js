// LM TEXTAREA

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