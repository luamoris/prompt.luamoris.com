// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";

// ===== ===== ===== ===== INTEGER PARAMETER CLASS

class IntegerParameter extends Parameter {
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
      const value = {};
      value.argument = !support.values[0].is && param.argument ? parseInt(param.argument) : null;
      return param.argument ? value : null;
   }
}

export default IntegerParameter;