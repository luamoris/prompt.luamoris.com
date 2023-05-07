// Import
import Data from "../../classes/data/Data.js";
import no from "./option.js"

// No

class DataNo extends Data {

   constructor() {
      super(no);
   }

   // ===

   // get(text, versionId) {}

   // ===

   pattern() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\{((\\s*\\w+\\\s*,?\\s*)+)?\})?`, "g");
   }

   patternTitle() {
      const { long, short } = this.option.title;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle})(\\s|$)`, "g");
   }

   // toParam(title, argument, isNull = true) {}

   // toString(argument) {}

   findInText(text) {
      let param = null;
      const pattern = this.pattern();
      const match = pattern.exec(text);
      if (match) {
         param = {
            title: match[1],
            argument: match[3] ? match[3] : null,
         };
      }
      return param;
   }

   // removeInText(text) {}

   // getSuppurtOpt(versionId) {}

   isArgument(argument, support) {
      let result = null;
      if (support.isValues && argument) {
         const splitEl = ",";
         const joinEl = ", "
         const argumentArr = [];
         argument.split(splitEl).forEach(a => {
            const arg = a.trim();
            arg ? argumentArr.push(arg) : null;
         });
         result = { argument: argumentArr.join(joinEl) };
      }
      return result;
   }
}

export default DataNo;