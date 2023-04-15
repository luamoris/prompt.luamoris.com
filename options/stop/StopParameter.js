// ===== ===== ===== ===== IMPORT
import BetweenParameter from "../$parameters/BetweenParameter.js";
import stopOptions from "./stopOpts.js";


// ===== ===== ===== ===== CLASS --Stop

class StopParameter extends BetweenParameter {
   constructor() {
      super(stopOptions);
   }
}

export default StopParameter;