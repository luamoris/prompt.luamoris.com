// ===== ===== ===== ===== IMPORT

// import Keywords from "./keywords/Keywords.js";

import DataVersion from "./$javascript/parameters/$1_version/data.js";
import DataAspect from "./$javascript/parameters/$2_aspect/data.js";
import DataQuality from "./$javascript/parameters/$3_quality/data.js";
import DataStylize from "./$javascript/parameters/$4_stylize/data.js";
import DataChaos from "./$javascript/parameters/$5_chaos/data.js";
import DataStop from "./$javascript/parameters/$6_stop/data.js";
import DataSeed from "./$javascript/parameters/$7_seed/data.js";
import DataSameseed from "./$javascript/parameters/$8_sameseed/data.js";
import DataStyle from "./$javascript/parameters/$9_style/data.js";
import DataVideo from "./$javascript/parameters/$10_video/data.js";
import DataTitle from "./$javascript/parameters/$11_title/data.js";
import DataCreative from "./$javascript/parameters/$12_creative/data.js";
import DataNo from "./$javascript/parameters/$20_no/data.js";


// ===== ===== ===== ===== DATA
// test
let promptText = `[__йоська__], complete [__FOOD__*] review, realistic products,
warm lighting, detailing, foodcore design, studio lighting,
fully blurred clean studio [__FOOD__] background, dirty blurry
background with light [__COLOR__] gradient from dark to light from  edges to center
high quality, 4K UHD :: --v 4 --ar 1:1 --q 1 --style 4c --no {x}`;


// ===== ===== ===== ===== CODE

// const keywords = new Keywords("");

const dataVersion = new DataVersion();
const dataAspect = new DataAspect();
const dataQuality = new DataQuality();
const dataStylize = new DataStylize();
const dataChaos = new DataChaos();
const dataStop = new DataStop();
const dataSeed = new DataSeed();
const dataSameseed = new DataSameseed();
const dataStyle = new DataStyle();
const dataVideo = new DataVideo();
const dataTitle = new DataTitle();
const dataCreative = new DataCreative();
const dataNo = new DataNo();


// ===== ===== ===== ===== MAIN

function main() {
   try {

      console.log(promptText);

      // version
      const version = dataVersion.get(promptText);
      console.log(version);

      // versionId
      const versionId = version.opt.id;

      const aspect = dataAspect.get(promptText, versionId);
      console.log(aspect);

      const quality = dataQuality.get(promptText, versionId);
      console.log(quality);

      const stylize = dataStylize.get(promptText, versionId);
      console.log(stylize);

      const chaos = dataChaos.get(promptText, versionId);
      console.log(chaos);

      const stop = dataStop.get(promptText, versionId);
      console.log(stop);

      const seed = dataSeed.get(promptText, versionId);
      console.log(seed);

      const sameseed = dataSameseed.get(promptText, versionId);
      console.log(sameseed);

      const video = dataVideo.get(promptText, versionId);
      console.log(video);

      const title = dataTitle.get(promptText, versionId);
      console.log(title);

      const creative = dataCreative.get(promptText, versionId);
      console.log(creative);

      const style = dataStyle.get(promptText, versionId);
      console.log(style);

      const no = dataNo.get(promptText, versionId);
      console.log(no);

      // keywords.update(promptText);
      // promptText = keywords.replace(promptText);

   } catch (error) {
      console.error(error);
      console.error(error.title);
      console.error(error.msg);
   }
}


// ===== ===== ===== ===== START

main();
