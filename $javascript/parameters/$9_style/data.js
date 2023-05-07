// Import
import Data from "../../classes/data/Data.js";
import style from "./option.js"

// Style

class DataStyle extends Data {

   constructor() {
      super(style);
   }

   // ===

   // get(text, versionId) {}

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\\d\\w)?`, "g");
   }

   patternTitle() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle})(\\s|$)?`, "g");
   }

   // toParam(title, argument, isNull = true) {}

   // toString(argument) {}

   // findInText(text) {}

   // removeInText(text) {}

   // getSuppurtOpt(versionId) {}

   // isArgument(argument, support) {}
}

export default DataStyle;