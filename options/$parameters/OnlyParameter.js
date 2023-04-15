// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";

// ===== ===== ===== ===== ONLY PARAMETER CLASS

class OnlyParameter extends Parameter {
   constructor(options) {
      super(options);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle})`, "g");
   }

   isCorrectValue(param, support) {
      return support.values[0].is ? support.values.find((v, i) => i !== 0 && v.argument === param.argument) : { argument: null };
   }
}

export default OnlyParameter;