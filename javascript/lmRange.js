// LM RANGE

const LmRangeClasses = {
   range: "range",
   slider: "range__slider",
   number: "range__value",
   addFocus: "range_focus",
};

const LmRangeShotKeys = {
   enter: "Enter",
}

class LmRange {
   constructor(rangeId) {
      const wrapper = document.getElementById(rangeId);

      this.isNumberFocus = false;
      this.range = {
         it: wrapper.querySelector(`.${LmRangeClasses.range}`),
         slider: wrapper.querySelector(`.${LmRangeClasses.slider}`),
         number: wrapper.querySelector(`.${LmRangeClasses.number}`),
      }
      this.value = parseInt(this.range.number.value);
   }

   init(fun) {

      let isDown = false;
      let isMove = false;

      // Get Value
      const value = () => !this.range.number.value ? 0 : parseInt(this.range.number.value);

      // Update Value
      const updateValue = () => {
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
      };

      // Slider PC
      this.range.slider.addEventListener("input", () => {
         this.range.number.value = parseInt(this.range.slider.value);
      });

      this.range.slider.addEventListener("mousedown", () => {
         isDown = true;
      });

      this.range.slider.addEventListener("mousemove", () => {
         isMove = true;
         if (isDown) {
            this.range.number.classList.add(LmRangeClasses.addFocus);
         }
      });

      this.range.slider.addEventListener("mouseup", () => {
         if (isMove && isDown) {
            this.range.number.classList.remove(LmRangeClasses.addFocus);
         }
         updateValue();
         isDown = false;
         isMove = false;
      });

      // Slider Touch
      this.range.slider.addEventListener("touchstart", () => {
         isDown = true;
      });

      this.range.slider.addEventListener("touchmove", () => {
         isMove = true;
         if (isDown) {
            this.range.number.classList.add(LmRangeClasses.addFocus);
         }
      });

      this.range.slider.addEventListener("touchend", () => {
         if (isMove && isDown) {
            this.range.number.classList.remove(LmRangeClasses.addFocus);
         }
         updateValue();
         isDown = false;
         isMove = false;
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
         updateValue();
      });

      // keydown Enter
      document.addEventListener("keydown", event => {
         if (event.key === LmRangeShotKeys.enter && this.isNumberFocus) {
            this.range.number.blur();
         }
      });
   }
}