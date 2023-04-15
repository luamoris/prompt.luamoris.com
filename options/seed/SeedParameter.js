// ===== ===== ===== ===== IMPORT
import IntegerParameter from "../$parameters/IntegerParameter.js";
import seedOptions from "./seedOpts.js";


// ===== ===== ===== ===== CLASS --Seed

class SeedParameter extends IntegerParameter {
   constructor() {
      super(seedOptions);
   }
}

export default SeedParameter;