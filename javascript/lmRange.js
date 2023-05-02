// LM RANGE

const LmRangeClasses = {
   range: "range",
   slider: "range__slider",
   number: "range__value",

};

const LmRangeShotKeys = {
   enter: "Enter",
}

class LmRange {
   constructor(rangeId) {
      const wrapper = document.getElementById(rangeId);

      this.isSliderFocus = false;
      this.isNumberFocus = false;
      this.range = {
         it: wrapper.querySelector(`.${LmRangeClasses.range}`),
         slider: wrapper.querySelector(`.${LmRangeClasses.slider}`),
         number: wrapper.querySelector(`.${LmRangeClasses.number}`),
      }
      this.value = parseInt(this.range.number.value);
   }

   init(fun) {

      const value = () => !this.range.number.value ? 0 : parseInt(this.range.number.value);

      // slider
      this.range.slider.addEventListener("input", () => {
         this.range.number.value = parseInt(this.range.slider.value);
      });

      this.range.slider.addEventListener("focusin", () => {
         this.isSliderFocus = true;
      });

      this.range.slider.addEventListener("focusout", () => {
         if (this.value !== value()) {
            const data = {
               value: parseInt(this.range.slider.value),
            };

            this.value = data.value;
            fun(data);
         }
         this.isSliderFocus = false;
      });

      // keydown Enter
      document.addEventListener("keydown", event => {
         if (event.key === LmRangeShotKeys.enter && this.isSliderFocus) {
            this.range.slider.blur();
         }
      });

      // number
      this.range.number.addEventListener("input", () => {
         const max = this.range.number.max;
         this.range.number.value = value() > max ? max : value();
         this.range.slider.value = value();
      });

      this.range.number.addEventListener("focusin", () => {
         this.isNumberFocus = true;
      });

      this.range.number.addEventListener("focusout", () => {
         if (this.value !== value()) {
            const min = this.range.number.min;
            const max = this.range.number.max;

            this.range.number.value = value() < min ? min : value();
            this.range.number.value = value() > max ? max : value();
            this.range.slider.value = value();

            const data = {
               value: value(),
            };

            this.value = data.value;
            fun(data);
         }
         this.isNumberFocus = false;
      });

      // keydown Enter
      document.addEventListener("keydown", event => {
         if (event.key === LmRangeShotKeys.enter && this.isNumberFocus) {
            this.range.number.blur();
         }
      });
   }
}