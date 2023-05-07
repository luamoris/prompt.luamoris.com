//  Import

import Data from "./Data.js";

// Data Between

class DataBetween extends Data {

   constructor(option) {
      super(option);
   }

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      const pattern = new RegExp(`--(${regTitle}) (\\d+)?`, "g");
      return pattern
   }

   patternTitle() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      const pattern = new RegExp(`--(${regTitle})(\\s|$)`, "g");
      return pattern
   }

   isArgument(argument, support) {
      const arg = parseInt(argument);
      const item = support.isValues ? support.values.list.find(item => {
         return item.argument.min <= arg && arg <= item.argument.max;
      }) : null;
      const value = item ? { argument: arg } : null;
      return value;
   }
}

export default DataBetween;