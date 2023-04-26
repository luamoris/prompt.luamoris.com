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
   const outContent = size.paddingTop + size.paddingBottom + (size.border * 2);
   const newHeight = size.boxSizing !== "border-box" ? (size.height + outContent) : size.height;
   textarea.style.height = `${newHeight}px`;
}

const inputText = new lmTextarea("inputPrompt");
inputText.addEvent(() => autoResize(inputText.textarea))


// anchor-link
function selectionAnchor(event) {
   // event.preventDefault();
   const link = event.target;
   const targetId = link.getAttribute('href');
   const targetBlock = document.querySelector(targetId);
   if (targetBlock) {
      targetBlock.classList.add('highlighted');
      setTimeout(() => {
         targetBlock.classList.remove('highlighted');
      }, 2000);
   }
}

const anchorLinks = document.querySelectorAll(".anchor-link");
anchorLinks.forEach(link => {
   link.addEventListener("click", selectionAnchor);
});


// keywords

function createBtnHTML({ className, size, path, alt }) {
   const btn = document.createElement("div");
   btn.classList.add(className, `icon-box`, `icon-box-${size}`);
   const img = document.createElement("img");
   img.classList.add(`icon-box-${size}`);
   img.src = path;
   img.alt = alt;
   btn.append(img);
   return btn;
}

function createWordHTML({ id, name }) {
   const word = document.createElement("li");
   word.classList.add("word");
   word.setAttribute("data-id", id);
   const wordName = document.createElement("p");
   wordName.classList.add("word__name");
   wordName.innerText = name;
   const deleteBtn = createBtnHTML({
      className: "btn-delete",
      size: 12,
      path: "./img/close.svg",
      alt: "Delete icon.",
   })
   word.append(wordName, deleteBtn);
   return word;
}

const keywordList = document.querySelectorAll(".keyword");
