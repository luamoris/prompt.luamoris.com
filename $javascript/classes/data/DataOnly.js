//  Import

import Data from "./Data.js";

// Data Only

class DataOnly extends Data {

   constructor(option) {
      super(option);
   }

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      const pattern = new RegExp(`--(${regTitle})(\\s|$)`, "g");
      return pattern
   }

   patternTitle() {
      return this.pattern();
   }

   isArgument(argument, support) {
      return support.isValues ? support.values.list.find(item => item.argument === argument) : { argument: null };
   }
}

export default DataOnly;