// ===== ===== ===== ===== IMPORT
import PropmtError from "./options/Error.js";
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



// ===== ===== ===== ===== CODE

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

// ===== ===== ===== ===== MAIN

// test
const promptText = `[__FOO йоська__], complete [__FOOD__*] review, realistic products,
warm lighting, detailing, foodcore design, studio lighting,
fully blurred clean studio background, dirty blurry
background with light [__COLOR__] gradient from dark to light from  edges to center
high quality, 4K UHD :: --v 4 --quality 1 --no idea, manupular --ar 16:9`;

const q = "--style 4b --creative --chaos 100 --stop 100 --sameseed 100";

function main() {
   try {
      const version = pVersion.getByText(promptText);
      const versionId = version.id;

      const versionStr = version.title;
      const styleStr = pStyle.getByText(promptText, versionId);
      const creativeStr = pCreative.getByText(promptText, versionId);
      const chaosStr = pChaos.getByText(promptText, versionId);
      const stopStr = pStop.getByText(promptText, versionId);
      const samseedStr = pSamseed.getByText(promptText, versionId);
      const seedStr = pSeed.getByText(promptText, versionId);
      const videoStr = pVideo.getByText(promptText, versionId);
      const titleStr = pTitle.getByText(promptText, versionId);
      const stylizeStr = pStylize.getByText(promptText, versionId);
      const qualityStr = pQuality.getByText(promptText, versionId);
      const aspectStr = pAspect.getByText(promptText, versionId);

      // console
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

   } catch (error) {
      // console.log(error);
      console.error(error.title);
      console.error(error.problem);
   }
}


// ===== ===== ===== ===== START

main();
