// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";
import qualityOptions from "./qualityOpts.js";


// ===== ===== ===== ===== CLASS --Quality

class QualityParameter extends Parameter {
   constructor() {
      super(qualityOptions);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (0?\.?\\d+)?`, "g");
   }
}

export default QualityParameter;