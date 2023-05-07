// Import
import Data from "../../classes/data/Data.js";
import aspect from "./option.js"

// Aspect

class DataAspect extends Data {

   constructor() {
      super(aspect);
   }

   // ===

   // get(text, versionId) {}

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\\d\\d?\:\\d\\d?)?`, "g");
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

export default DataAspect;