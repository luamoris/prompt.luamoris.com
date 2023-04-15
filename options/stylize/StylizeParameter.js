// ===== ===== ===== ===== IMPORT
import BetweenParameter from "../$parameters/BetweenParameter.js";
import stylizeOptions from "./stylizeOpts.js";


// ===== ===== ===== ===== CLASS --Stylize

class StylizeParameter extends BetweenParameter {
   constructor() {
      super(stylizeOptions);
   }
}

export default StylizeParameter;