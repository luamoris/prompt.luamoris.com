// ===== ===== ===== ===== IMPORT
import Parameter from "../$parameters/MainParameter.js";
import aspectOptions from "./aspectOpts.js";


// ===== ===== ===== ===== CLASS --Aspect

class AspectParameter extends Parameter {
   constructor() {
      super(aspectOptions);
   }

   getPattern() {
      const { long, short } = this.options;
      const regTitle = (long ? long : "") + (short ? "|" + short : "");
      return new RegExp(`--(${regTitle}) (\\d\\d?\:\\d\\d?)?`, "g");
   }
}

export default AspectParameter;