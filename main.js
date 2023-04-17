// ===== ===== ===== ===== IMPORT
import PropmtError from "./helpers/Error.js";

import Keywords from "./keywords/Keywords.js";

import VersionParameter from "./options/version/VersionParameter.js";
import StyleParameter from "./options/style/StyleParameter.js";
import CreativeParameter from "./options/creative/CreativeParameter.js";
import ChaosParameter from "./options/chaos/ChaosParameter.js";
import StopParameter from "./options/stop/StopParameter.js";
import SameseedParameter from "./options/sameseed/SameseedParameter.js";
import SeedParameter from "./options/seed/SeedParameter.js";
import VideoParameter from "./options/video/VideoParameter.js";
import TitleParameter from "./options/title/TitleParameter.js";
import StylizeParameter from "./options/stylize/StylizeParameter.js";
import QualityParameter from "./options/quality/QualityParameter.js";
import AspectParameter from "./options/aspect/AspectParameter.js";
import NoParameter from "./options/no/NoParameter.js";


// ===== ===== ===== ===== DATA
// test
let promptText = `[__йоська__], complete [__FOOD__*] review, realistic products,
warm lighting, detailing, foodcore design, studio lighting,
fully blurred clean studio [__FOOD__] background, dirty blurry
background with light [__COLOR__] gradient from dark to light from  edges to center
high quality, 4K UHD ::  --quality 2 --no { a  ,  b, x  } --ar 16:9`;


// ===== ===== ===== ===== CODE

const keywords = new Keywords("");

const pVersion = new VersionParameter();
const pStyle = new StyleParameter();
const pCreative = new CreativeParameter();
const pChaos = new ChaosParameter();
const pStop = new StopParameter();
const pSamseed = new SameseedParameter();
const pSeed = new SeedParameter();
const pVideo = new VideoParameter();
const pTitle = new TitleParameter();
const pStylize = new StylizeParameter();
const pQuality = new QualityParameter();
const pAspect = new AspectParameter();
const pNo = new NoParameter();


// ===== ===== ===== ===== MAIN

function main() {
   try {

      console.log(promptText);

      keywords.update(promptText);
      promptText = keywords.replace(promptText);
      const version = pVersion.getByText(promptText);
      const versionId = version.id;


      const versionStr = version.title;
      promptText = pVersion.replace(promptText);

      const styleStr = pStyle.getByText(promptText, versionId);
      promptText = pStyle.replace(promptText);

      const creativeStr = pCreative.getByText(promptText, versionId);
      promptText = pCreative.replace(promptText);

      const chaosStr = pChaos.getByText(promptText, versionId);
      promptText = pChaos.replace(promptText);

      const stopStr = pStop.getByText(promptText, versionId);
      promptText = pStop.replace(promptText);

      const samseedStr = pSamseed.getByText(promptText, versionId);
      promptText = pSamseed.replace(promptText);

      const seedStr = pSeed.getByText(promptText, versionId);
      promptText = pSeed.replace(promptText);

      const videoStr = pVideo.getByText(promptText, versionId);
      promptText = pVideo.replace(promptText);

      const titleStr = pTitle.getByText(promptText, versionId);
      promptText = pTitle.replace(promptText);

      const stylizeStr = pStylize.getByText(promptText, versionId);
      promptText = pStylize.replace(promptText);

      const qualityStr = pQuality.getByText(promptText, versionId);
      promptText = pQuality.replace(promptText);

      const aspectStr = pAspect.getByText(promptText, versionId);
      promptText = pAspect.replace(promptText);

      const noStr = pNo.getByText(promptText, versionId);
      promptText = pNo.replace(promptText);

      // console
      console.log(promptText);
      console.log(keywords.list);
      console.log("PARAMETERS");
      console.log(versionStr);
      console.log(styleStr);
      console.log(creativeStr);
      console.log(chaosStr);
      console.log(stopStr);
      console.log(samseedStr);
      console.log(seedStr);
      console.log(videoStr);
      console.log(titleStr);
      console.log(stylizeStr);
      console.log(qualityStr);
      console.log(aspectStr);
      console.log(noStr);

   } catch (error) {
      console.log(error);
      console.error(error.title);
      console.error(error.problem);
   }
}


// ===== ===== ===== ===== START

main();
