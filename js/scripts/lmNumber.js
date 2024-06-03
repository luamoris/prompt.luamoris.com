// LM NUMBER

const LmNumberClasses = {
   number: "number",
   input: "number__input",
   addOff: "number_off",
   addFocus: "number_focus",
};

const LmNumberShotKeys = {
   enter: "Enter",
}

class LmNumber {
   constructor(numberId) {
      const wrapper = document.getElementById(numberId);

      this.isFocus = false;
      this.number = {
         it: wrapper.querySelector(`.${LmNumberClasses.number}`),
         input: wrapper.querySelector(`.${LmNumberClasses.input}`),
      };
      this.value = !this.number.input.value ? null : parseInt(this.number.input.value);
   }

   init(fun) {

      const value = () => !this.number.input.value ? null : parseInt(this.number.input.value);

      const updateValue = () => {
         if (this.value !== value()) {
            const min = this.number.input.min;
            const max = this.number.input.max;

            this.number.input.value = value() < min ? min : value();
            this.number.input.value = value() > max ? max : value();

            const data = {
               value: value(),
            };

            this.value = data.value;
            fun(data);
         }
      };

      // focus in
      this.number.input.addEventListener("focusin", () => {
         this.number.it.classList.add(LmNumberClasses.addFocus);
         this.isFocus = true;
      });

      // focus out
      this.number.input.addEventListener("focusout", () => {
         if (value() === null && this.number.it.classList.contains(LmNumberClasses.addFocus)) {
            this.number.it.classList.remove(LmNumberClasses.addFocus);
         }
         updateValue();
         this.isFocus = false;
      });

      // input
      this.number.input.addEventListener("input", () => {
         const max = this.number.input.max;
         this.number.input.value = value() > max ? max : value();
      });

      // keydown Enter
      document.addEventListener("keydown", event => {
         if (event.key === LmNumberShotKeys.enter && this.isFocus) {
            this.number.input.blur();
         }
      });
   }

   on() {
      if (this.number.it.classList.contains(LmNumberClasses.addOff)) {
         this.number.it.classList.remove(LmNumberClasses.addOff);
      }
      this.number.input.setAttribute("tabindex", "0");
   }

   off() {
      if (!this.number.it.classList.contains(LmNumberClasses.addOff)) {
         this.number.it.classList.add(LmNumberClasses.addOff);
      }
      this.number.input.setAttribute("tabindex", "-1");
   }
}