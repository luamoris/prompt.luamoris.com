// ===== ===== ===== ===== IMPORT
import OnlyParameter from "../$parameters/OnlyParameter.js";
import videoOptions from "./videoOpts.js";


// ===== ===== ===== ===== CLASS --Video

class VideoParameter extends OnlyParameter {
   constructor() {
      super(videoOptions);
   }
}

export default VideoParameter;