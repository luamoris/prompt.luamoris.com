// Import
import Data from "../../classes/data/Data.js";
import quality from "./option.js"

// Quality

class DataQuality extends Data {

   constructor() {
      super(quality);
   }

   // ===

   // get(text, versionId) { }

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (0?\.?\\d+)?`, "g");
   }

   patternTitle() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle})(\\s|$)`, "g");
   }

   // toParam(title, argument, isNull = true) {}

   // toString(argument) {}

   // findInText(text) {}

   // removeInText(text) {}

   // getSuppurtOpt(versionId) {}

   // isArgument(argument, support) {}
}

export default DataQuality;