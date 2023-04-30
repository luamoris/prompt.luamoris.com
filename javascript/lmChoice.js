// LM CHOICE

const lmChoiceClasses = {
   choice: "choice",
   input: "choice__input",
   btnTrue: "choice__item[data-value=\"true\"]",
   btnFalse: "choice__item[data-value=\"false\"]",
   choiceTrue: "choice_true",
   choiceFalse: "choice_false",
};

class LmChoice {
   constructor(choiceId) {
      const wrapper = document.getElementById(choiceId);

      this.is = false;
      this.choice = {
         it: wrapper.querySelector(`.${lmChoiceClasses.choice}`),
         input: wrapper.querySelector(`.${lmChoiceClasses.input}`),
         btnTrue: wrapper.querySelector(`.${lmChoiceClasses.btnTrue}`),
         btnFalse: wrapper.querySelector(`.${lmChoiceClasses.btnFalse}`),
      };
   }

   // function fun(data) {}
   init(fun) {
      this.choice.btnTrue.addEventListener("click", () => {
         this.is = true;
         this.setTrue();
         this.addValue(this.is);
      });

      this.choice.btnFalse.addEventListener("click", () => {
         this.is = false;
         this.setFalse();
         this.addValue(this.is);
      });

      this.choice.input.addEventListener("change", event => {
         const data = {
            value: event.target.value,
         };
         fun(data);
      });
   }

   setTrue() {
      if (!this.choice.it.classList.contains(lmChoiceClasses.choiceTrue)) {
         this.choice.it.classList.add(lmChoiceClasses.choiceTrue);
      }
      if (this.choice.it.classList.contains(lmChoiceClasses.choiceFalse)) {
         this.choice.it.classList.remove(lmChoiceClasses.choiceFalse)
      }
   }

   setFalse() {
      if (this.choice.it.classList.contains(lmChoiceClasses.choiceTrue)) {
         this.choice.it.classList.remove(lmChoiceClasses.choiceTrue);
      }
      if (!this.choice.it.classList.contains(lmChoiceClasses.choiceFalse)) {
         this.choice.it.classList.add(lmChoiceClasses.choiceFalse)
      }
   }

   addValue(value) {
      this.choice.input.value = value;
      this.choice.input.dispatchEvent(new Event("change"));
   }
}