//  Import

import Data from "./Data.js";

// Data Integer

class DataInteger extends Data {

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
      const value = {};
      value.argument = support.isValues && argument ? parseInt(argument) : null;
      return argument ? value : null;
   }
}

export default DataInteger;