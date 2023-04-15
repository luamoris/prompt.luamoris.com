// ===== ===== ===== ===== IMPORT
import OnlyParameter from "../$parameters/OnlyParameter.js";
import titleOptions from "./titleOpts.js"


// ===== ===== ===== ===== CLASS --Title

class TitleParameter extends OnlyParameter {
   constructor() {
      super(titleOptions);
   }
}

export default TitleParameter;