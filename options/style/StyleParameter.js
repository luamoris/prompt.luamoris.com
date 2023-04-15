// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";
import styleOptions from "./styleOpts.js";


// ===== ===== ===== ===== CLASS --Style

class StyleParameter extends Parameter {
   constructor() {
      super(styleOptions);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\\d\\w)?`, "g");
   }
}

export default StyleParameter;