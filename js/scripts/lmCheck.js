// Polyphil

if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
      }
   };
}

// LM CHECK

const lmCheckClasses = {
   check: "check",
   input: "check__input",
   item: "check__item",
   addOff: "check_off",
   addActive: "check_active",
};

class LmCheck {
   constructor(checkId) {
      const wrapper = document.getElementById(checkId);

      this.check = {
         it: wrapper.querySelector(`.${lmCheckClasses.check}`),
         input: wrapper.querySelector(`.${lmCheckClasses.input}`),
         items: wrapper.querySelectorAll(`.${lmCheckClasses.item}`),
      };
      this.checkActive = this.getActive();
   }

   init(fun) {
      // click item
      this.check.items.forEach(item => {
         item.addEventListener("click", () => {
            if (!item.classList.contains(lmCheckClasses.addActive) && !item.classList.contains(lmCheckClasses.addOff)) {
               this.setActive(item);
               this.addValue(item.dataset.value);
            }
         });
      });

      // change input
      this.check.input.addEventListener("change", event => {
         const data = {
            value: event.target.value,
         };
         fun(data);
      });
   }

   setActive(item) {
      if (this.checkActive) {
         this.checkActive.classList.remove(lmCheckClasses.addActive);
      }
      item.classList.add(lmCheckClasses.addActive);
      this.checkActive = item;
   }

   getActive() {
      let elActive = null;
      this.check.items.forEach(item => {
         if (item.classList.contains(lmCheckClasses.addActive)) {
            elActive = item;
         }
      });
      return elActive;
   }

   addValue(value) {
      this.check.input.value = value;
      this.check.input.dispatchEvent(new Event("change"));
   }

   // get element by value
   getByValue(value) {
      let element = null;
      this.check.items.forEach(item => {
         if (item.dataset.value === value) {
            element = item;
         }
      })
      return element;
   }

   // on element by value
   onByValue(value) {
      const element = this.getByValue(value);
      if (element) {
         element.classList.remove(lmCheckClasses.addOff)
         element.setAttribute("tabindex", "0");
         return element;
      }
      return null;
   }

   // off element by value
   offByValue(value) {
      const element = this.getByValue(value);
      if (element) {
         element.classList.remove(lmCheckClasses.addActive);
         element.classList.add(lmCheckClasses.addOff)
         element.setAttribute("tabindex", "-1");
         return element;
      }
      return null;
   }

   // off all 
   // функция, чтобы выключить все элементы (сделать для всех параметров)
}