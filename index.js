// ============================================ IMPORT
import Prompt from './js/modules/prompt.js';
import MyWindow from './js/modules/myWindow.js';

// ============================================ LM PARAMS
let IS_PROMTP = false;
let PARAMS_STRING = {
   version: null,
   aspect: null,
   quality: null,
   stylized: null,
   chaos: null,
   stop: null,
   seed: null,
   sameseed: null,
   video: null,
   title: null,
   creative: null,
};
const paramHiddenInput = document.getElementById('paramHiddenInput');
// ============================================ LM PARAMS

// function action
function logData(data) {
   console.log(data);
}

function createPromptStr(params) {
   let resArr = [];
   params.version ? resArr.push(params.version) : null;
   params.aspect ? resArr.push(params.aspect) : null;
   params.quality ? resArr.push(params.quality) : null;
   params.stylized ? resArr.push(params.stylized) : null;
   params.chaos ? resArr.push(params.chaos) : null;
   params.stop ? resArr.push(params.stop) : null;
   params.seed ? resArr.push(params.seed) : null;
   params.sameseed ? resArr.push(params.sameseed) : null;
   params.video ? resArr.push(params.video) : null;
   params.title ? resArr.push(params.title) : null;
   params.creative ? resArr.push(params.creative) : null;

   return resArr.join(' ');
}

function setParamsInput(paramName, paramValue) {
   PARAMS_STRING[paramName] = paramValue;
   const paramsStr = createPromptStr(PARAMS_STRING)
   paramHiddenInput.value = paramsStr;
   paramHiddenInput.dispatchEvent(new Event('change'));
   console.log(paramsStr); // DELETE
}

// --version

const formVersionId = "formVersion";
const formVersion = new LmSelect(formVersionId);
formVersion.init(data => {
   let name = /^\d+$/.test(data.value) ? ('--v ' + data.value) : data.value;
   name = name.replace(/v 6/g, 'niji');
   name = name.replace(/v 7/g, 'test');
   name = name.replace(/v 8/g, 'testp');
   setParamsInput('version', name);
});

// -- aspect

const formAspectId = "formAspect";
const formAspect = new LmSelect(formAspectId);
formAspect.init(data => {
   let name = data.value !== '1:1' ? (`--as ` + data.value) : null;
   setParamsInput('aspect', name);
});


// --creative

const formCreativeId = "formCreative";
const formCreative = new LmChoice(formCreativeId);
formCreative.init(data => {
   let name = data.value === 'true' ? '--creative' : null;
   setParamsInput('creative', name);
});

// --video

const formVideoId = "formVideo";
const formVideo = new LmChoice(formVideoId);
formVideo.init(data => {
   let name = data.value === 'true' ? '--video' : null;
   setParamsInput('title', name);
});

//  --title

const formTitleId = "formTitle";
const formTitle = new LmChoice(formTitleId);
formTitle.init(data => {
   let name = data.value === 'true' ? '--title' : null;
   setParamsInput('video', name);
});

// -- quality

const formQualityId = "formQuality";
const formQuality = new LmCheck(formQualityId);
formQuality.init(data => {
   let name = data.value !== '1' ? (`--q ` + data.value) : null;
   setParamsInput('quality', name);
});
// formQuality.offByValue("2");

// --style

const formStyleId = "formStyle";
const formStyle = new LmCheck(formStyleId);
formStyle.init(data => {
   let name = `--style ` + data.value;
   setParamsInput('style', name);
});
formStyle.offByValue("4a");
formStyle.offByValue("4b");
formStyle.offByValue("4c");

// --chaos 

const formChaosId = "formChaos";
const formChaos = new LmRange(formChaosId);
formChaos.init(data => {
   let name = data.value !== 0 ? (`--chaos ` + data.value) : null;
   setParamsInput('chaos', name);
});

// --stylize 

const formStylizeId = "formStylize";
const formStylize = new LmRange(formStylizeId);
formStylize.init(data => {
   let name = data.value !== 100 ? (`--s ` + data.value) : null;
   setParamsInput('stylized', name);
});

// --stop 

const formStopId = "formStop";
const formStop = new LmRange(formStopId);
formStop.init(data => {
   let name = data.value !== 100 ? (`--stop ` + data.value) : null;
   setParamsInput('stop', name);
});

// --seed

const formSeedId = "formSeed";
const formSeed = new LmNumber(formSeedId);
formSeed.init(data => {
   let name = data.value ? (`--seed ` + data.value) : null;
   setParamsInput('seed', name);
})

// --sameseed

const formSameseedId = "formSameseed";
const formSameseed = new LmNumber(formSameseedId);
formSameseed.init(data => {
   let name = `--samseed ` + data.value;
   setParamsInput('samseed', name);
})
formSameseed.off();


// ============================================ INPUT PROMPT


function getSize(textarea) {
   const pattern = /(\w+)px/;
   const style = getComputedStyle(textarea);
   return {
      boxSizing: style["boxSizing"],
      height: textarea.scrollHeight,
      paddingTop: parseInt(pattern.exec(style["paddingTop"])[1]),
      paddingBottom: parseInt(pattern.exec(style["paddingBottom"])[1]),
      border: parseInt(pattern.exec(style["border"])[1]),
   }
}

function autoResize(textarea) {
   textarea.style.height = "auto";
   const size = getSize(textarea);
   const outContent = size.paddingTop + size.paddingBottom + (size.border * 2);
   const newHeight = size.boxSizing !== "border-box" ? (size.height + outContent) : size.height;
   textarea.style.height = `${newHeight}px`;
}

const inputText = new lmTextarea("inputPrompt");
inputText.addEvent(() => autoResize(inputText.textarea))


// ============================================ WINDOW


const myWindow = new MyWindow('window', 'windowBox', 'win', 'winClose');

const wLogin = document.getElementById('wLogin');
const menuBtnLogin = document.getElementById('menuBtnLogin');
const btnCreateOne = document.getElementById('BtnCreateOne');

const wCreate = document.getElementById('wCreate');
const btnLogin = document.getElementById('BtnLogin');

menuBtnLogin.addEventListener('click', () => myWindow.next(wLogin));
btnCreateOne.addEventListener('click', () => myWindow.change(wCreate));
btnLogin.addEventListener('click', () => myWindow.change(wLogin));


const wLogout = document.getElementById('wLogout');
const menuBtnLogout = document.getElementById('menuBtnLogout');
menuBtnLogout.addEventListener('click', () => myWindow.next(wLogout));


const wSave = document.getElementById('wSave');
const menuBtnSave = document.getElementById('menuBtnSave');
menuBtnSave.addEventListener('click', () => myWindow.next(wSave));


const wWait = document.getElementById('wWait');
const menuBtnDownload = document.getElementById('menuBtnDownload');
menuBtnDownload.addEventListener('click', () => myWindow.next(wWait, false));


const wNew = document.getElementById('wNew');
const menuBtnNew = document.getElementById('menuBtnNew');
menuBtnNew.addEventListener('click', () => myWindow.next(wNew));


const wHistory = document.getElementById('wHistory');
const menuBtnHistory = document.getElementById('menuBtnHistory');
menuBtnHistory.addEventListener('click', () => myWindow.next(wHistory));


const wChanges = document.getElementById('wChanges');


// ============================================ MAIN


const inputPrompt = document.getElementById('inputPrompt');
const btnPromptApply = document.getElementById('btnPromptApply');
btnPromptApply.addEventListener('click', applyClick);
const btnApplyEnterClick = e => {
   if (e.key === "Enter") {
      btnPromptApply.click();
   }
};
btnPromptApply.addEventListener('keydown', e => btnApplyEnterClick(e));
inputPrompt.addEventListener('keydown', e => btnApplyEnterClick(e));

function applyClick() {
   const promptText = inputPrompt.value.trim().replace(/\s+/g, ' ');
   inputPrompt.value = '';
   autoResize(inputText.textarea);
   if (promptText) {
      const prompt = new Prompt(promptText);
      prompt.renderKeywords();
      prompt.renderTemplate();
      prompt.onParameners();

      IS_PROMTP = true;
      // console.log(prompt); // DELETE
   }
}


// ============================================ MAIN