// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";
import noptions from "./noOpts.js";


// ===== ===== ===== ===== CLASS --No

class NoParameter extends Parameter {
   constructor() {
      super(noptions);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\{((\\s*\\w+\\\s*,?\\s*)+)?\})?`, "g");
   }

   findByText(text) {
      let result = null;
      const match = this.pattern.exec(text)
      if (match) {
         result = {
            title: match[1],
            argument: match[3] ? match[3] : null,
         };
      }
      return result;
   }

   isCorrectValue(param, support) {
      let result = null;
      if (support.values[0].is && param.argument) {
         const splitEl = ",";
         const joinEl = ", "
         const argumentArr = [];
         param.argument.split(splitEl).forEach(a => {
            const arg = a.trim();
            arg ? argumentArr.push(arg) : null;
         });
         const argument = argumentArr.join(joinEl);
         result = { argument };
      }
      return result;
   }
}

export default NoParameter;