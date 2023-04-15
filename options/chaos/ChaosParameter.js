// ===== ===== ===== ===== IMPORT
import BetweenParameter from "../$parameters/BetweenParameter.js";
import chaosOptions from "./chaosOpts.js";


// ===== ===== ===== ===== CLASS --Chaos

class ChaosParameter extends BetweenParameter {
   constructor() {
      super(chaosOptions);
   }
}

export default ChaosParameter;