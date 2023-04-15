// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";

// ===== ===== ===== ===== Between PARAMETER CLASS

class BetweenParameter extends Parameter {
   constructor(options) {
      super(options);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      const re = new RegExp(`--(${regTitle}) (\\d+)?`, "g");
      return re;
   }

   isCorrectValue(param, support) {
      const argument = parseInt(param.argument);
      const item = support.values[0].is ? support.values.find((v, i) => {
         return i !== 0 && v.argument.min <= argument && argument <= v.argument.max;
      }) : null
      const value = item ? { argument } : null;
      return value;
   }
}

export default BetweenParameter;