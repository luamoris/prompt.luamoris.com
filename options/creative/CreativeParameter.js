// ===== ===== ===== ===== IMPORT
import OnlyParameter from "../$parameters/OnlyParameter.js";
import creativeOptions from "./creativeOpts.js";


// ===== ===== ===== ===== CLASS --Creative

class CreativeParameter extends OnlyParameter {
   constructor() {
      super(creativeOptions);
   }
}

export default CreativeParameter;