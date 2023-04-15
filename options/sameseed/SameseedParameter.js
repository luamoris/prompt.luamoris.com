// ===== ===== ===== ===== IMPORT
import IntegerParameter from "../$parameters/IntegerParameter.js";
import sameseedOptions from "./sameseedOpts.js";


// ===== ===== ===== ===== CLASS --Sameseed

class SameseedParameter extends IntegerParameter {
   constructor() {
      super(sameseedOptions);
   }
}

export default SameseedParameter;