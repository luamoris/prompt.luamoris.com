// ===
import SVG from '../svg/svg.js';

// ===

class Prompt {
   constructor(input) {

      this.clear();

      this.name = '';
      this.originalInput = input;

      this.keywords = this.extractKeywords(input);

      this.template = this.generateTemplate();

      this.tempElement = null;
      this.keywordList = [];
   }

   clear() {
      const container = document.getElementById('keywordListId');
      container.innerHTML = '';

      const resultContainer = document.getElementById('resultListId');
      resultContainer.innerHTML = '';
   }

   generateHash(index) {
      return 'kw' + index;
   }

   extractKeywords(input) {
      const regex = /\[__([\p{L}\p{N}]+)__([*]?)\]/gu;
      let matches = [...input.matchAll(regex)];
      let keywords = [];

      matches.forEach((match, index) => {
         let existingKeyword = keywords.find(
            (kw) => kw.name === match[1] && kw.mandatory === match[2].endsWith('*')
         );

         if (existingKeyword) {
            existingKeyword.hash.push(this.generateHash(index));
         } else {
            keywords.push({
               name: match[1],
               mandatory: match[2].endsWith('*'),
               hash: [this.generateHash(index)],
               arguments: []
            });
         }
      });

      return keywords;
   }

   generateTemplate() {
      let template = this.originalInput;
      this.keywords.forEach(keyword => {
         keyword.hash.forEach((hash, index) => {
            const regex = new RegExp(`\\[__${keyword.name}__${keyword.mandatory ? '\\*' : ''}\\]`, 'g');
            template = template.replace(regex, `#${hash}`);
         });
      });
      return template;
   }

   renderKeywords() {
      const container = document.getElementById('keywordListId');
      container.innerHTML = '';

      this.keywords.forEach(keyword => {
         const keywordElement = document.createElement('li');
         keywordElement.className = 'keyword';
         if (keyword.mandatory) keywordElement.classList.add('lock');
         keywordElement.dataset.id = keyword.hash[0];
         keywordElement.id = keyword.hash[0];

         keywordElement.innerHTML = `
              <div class="keyword__caption">
                  <div class="keyword__icon icon-box icon-box-12">
                      <img src="./img/key.svg" alt="Key icon." class="icon-img">
                  </div>
                  <div class="keyword__title">
                      <div class="title-container" data-title="There will be a full name if it is more than a container.">
                          <span class="title-name">${keyword.name}</span>
                      </div>
                  </div>
                  <div class="keyword__status">
                     ${keyword.mandatory ? SVG.svgLockOpen : SVG.svgLockClose}
                  </div>
              </div>
              <div class="words">
                  <div class="words__box">
                      <ul class="words__list _grid"></ul>
                      <div class="words__add">
                          <input type="text" class="words__input" placeholder="value" enterkeyhint="enter">
                          <div class="btn-add icon-box icon-box-12" tabindex="0">
                              <img class="icon-box-12" src="./img/add.svg" alt="Add">
                          </div>
                      </div>
                  </div>
                  <div class="buttons">
                      <div class="btn-copy icon-box icon-box-20">
                          <img class="icon-box-14" src="./img/copy.svg" alt="Copy" tabindex="0">
                      </div>
                      <div class="btn-grid icon-box icon-box-20" tabindex="0">
                          <img id="btn-img-grid" class="icon-box-14" src="./img/grid.svg" alt="Grid">
                          <img id="btn-img-list" class="icon-box-14 icon-none" src="./img/list.svg" alt="List">
                      </div>
                  </div>
              </div>
          `;

         container.appendChild(keywordElement);

         const tabEnterClick = (e, className) => {
            if (e.key === "Enter" || e.key === " ") {
               keywordElement.querySelector(`.${className}`).click();
            }
         };

         keywordElement.querySelector('.btn-add').addEventListener('click', () => {
            const input = keywordElement.querySelector('.words__input');
            const inputText = input.value.trim().replace(/\s+/g, ' ');
            input.value = "";

            if (inputText) {
               keyword.arguments.push(inputText);
               this.renderKeywordValues(keywordElement, keyword.arguments);
               this.renderResults();
            }
         });

         keywordElement.querySelector('.btn-copy').addEventListener('click', () => {
            navigator.clipboard.writeText(keyword.arguments.join(', '));
         });

         // _list _grid
         const wordList = keywordElement.querySelector('.words__list');
         const btnImgGrid = keywordElement.querySelector('#btn-img-grid');
         const btnImgList = keywordElement.querySelector('#btn-img-list');

         keywordElement.querySelector('.btn-grid').addEventListener('click', () => {
            if (wordList.classList.contains('_grid')) {
               wordList.classList.remove('_grid');
               wordList.classList.add('_list');
               btnImgGrid.classList.add('icon-none');
               btnImgList.classList.remove('icon-none');
            } else {
               wordList.classList.remove('_list');
               wordList.classList.add('_grid');
               btnImgList.classList.add('icon-none');
               btnImgGrid.classList.remove('icon-none');
            }
         });

         keywordElement.querySelector('.btn-add').addEventListener('keydown', e => tabEnterClick(e, 'btn-add'))
         keywordElement.querySelector('.btn-copy').addEventListener('keydown', e => tabEnterClick(e, 'btn-copy'))
         keywordElement.querySelector('.btn-grid').addEventListener('keydown', e => tabEnterClick(e, 'btn-grid'))
         keywordElement.querySelector('.words__input').addEventListener('keydown', e => tabEnterClick(e, 'btn-add'))

      });
   }

   renderKeywordValues(keywordElement, values) {
      const wordsList = keywordElement.querySelector('.words__list');
      wordsList.innerHTML = '';

      values.forEach((value, index) => {
         const wordItem = document.createElement('li');
         wordItem.className = 'word';
         wordItem.dataset.id = index;
         wordItem.innerHTML = `
              <p class="word__name">${value}</p>
              <div class="btn-delete icon-box icon-box-12">
                  <img class="icon-img" src="./img/close.svg" alt="Delete">
              </div>
          `;

         wordItem.querySelector('.btn-delete').addEventListener('click', () => {
            values.splice(index, 1);
            this.renderKeywordValues(keywordElement, values);
            this.renderResults();
         });

         wordsList.appendChild(wordItem);
      });
   }

   getAllCombinations() {
      let combinations = [[]];

      this.keywords.forEach(keyword => {
         const newCombinations = [];

         if (keyword.arguments.length === 0) {
            combinations.forEach(combination => {
               newCombinations.push([...combination, { ...keyword, arguments: null }]);
            });
         } else {
            combinations.forEach(combination => {
               keyword.arguments.forEach(argument => {
                  newCombinations.push([...combination, { ...keyword, arguments: argument }]);
               });
            });
         }
         combinations = newCombinations;
      });

      return combinations;
   }

   renderResults() {

      this.keywordList.forEach(k => { k.remove(); return null; });
      this.keywordList = [];

      const resultContainer = document.getElementById('resultListId');
      resultContainer.innerHTML = '';

      const allCombinations = this.getAllCombinations();

      allCombinations.forEach(combination => {
         const resultItem = document.createElement('li');
         resultItem.className = 'result__prompt';
         resultItem.dataset.result = combination.index + 1;
         resultItem.tabIndex = 0;

         let resultText = this.template;

         combination.forEach(kw => {
            const anchorClass = kw.mandatory ? '_red' : '_green';
            const kwName = kw.arguments !== null ? kw.arguments : kw.name;
            const anchorTag = `<a href="#${kw.hash[0]}" class="prompt-key ${anchorClass} anchor-link" data-anchor="${kw.hash[0]}" tabindex="-1">${kwName}</a>`;
            const regex = new RegExp(`#${kw.hash[0]}`, 'g');
            resultText = resultText.replace(regex, anchorTag);
         });

         resultItem.innerHTML = `
         <p class="prompt-template">${resultText}</p>
         <div class="btn-copy icon-box icon-box-16">
         <img class="icon-img" src="./img/copy.svg" alt="Copy.">
         </div>
         `;

         const paramsElm = this.createParameterElement(); //
         resultItem.querySelector('.prompt-template').appendChild(paramsElm);

         this.keywordList.push(resultItem); //
         resultContainer.appendChild(resultItem);

         resultItem.addEventListener('click', () => {
            navigator.clipboard.writeText(resultItem.querySelector('.prompt-template').innerText);
         });

         resultItem.addEventListener('keydown', e => {
            if (e.key === "Enter" || e.key === " ") {
               resultItem.click();
            }
         });
      });
   }

   renderTemplate() {
      const container = document.getElementById('promptTemplateId');
      container.innerHTML = '';
      const templateElement = document.createElement('p');
      templateElement.className = 'prompt-template';

      // const selectionAnchor = e => {
      //    e.preventDefault();
      //    console.log(1);
      //    const link = e.target;
      //    const anchorMain = document.getElementById(link.dataset.anchor);
      //    anchorMain.scrollIntoView(true);
      //    const targetId = link.getAttribute('href');
      //    const targetBlock = document.querySelector(targetId);
      //    if (targetBlock) {
      //       targetBlock.classList.add('highlighted');
      //       setTimeout(() => {
      //          targetBlock.classList.remove('highlighted');
      //       }, 2000);
      //    }
      // }

      // <a id="paramTemplateId" class="prompt-parameter _blue anchor-link" data-anchor="parameters" tabindex="0">:: --v 4</a>

      let resultTemplate = this.template;

      this.keywords.forEach(keyword => {
         const keywordElement = document.createElement('a');
         keywordElement.href = `#${keyword.hash[0]}`;
         keywordElement.className = `prompt-key ${keyword.mandatory ? '_red' : '_green'} anchor-link`;
         keywordElement.dataset.anchor = keyword.hash[0];
         keywordElement.dataset.id = keyword.hash[0];
         keywordElement.innerText = keyword.name;
         resultTemplate = resultTemplate.replace(`#${keyword.hash[0]}`, keywordElement.outerHTML);
      });

      const paramsElmStr = `<a id="paramTemplateId" class="prompt-parameter _blue anchor-link" data-anchor="parameters" tabindex="0"></a>`;
      templateElement.innerHTML = resultTemplate + paramsElmStr;
      container.appendChild(templateElement);

      // Hidden Input
      this.tempElement = templateElement;
   }

   createParameterElement() {
      const anchorElement = document.createElement('a');
      anchorElement.className = 'prompt-parameter _blue anchor-link';
      anchorElement.setAttribute('data-anchor', 'parameters');
      anchorElement.tabIndex = 0;
      return anchorElement;
   }

   onParameners() {
      const inputHiddenElement = document.getElementById('paramHiddenInput');
      const paramsText = document.getElementById('paramTemplateId');

      inputHiddenElement.addEventListener('change', () => {
         if (this.tempElement) {
            paramsText.textContent = ' :: ' + inputHiddenElement.value;
         }
         this.keywordList.forEach(k => {
            if (k) {
               const el = k.querySelector('a.prompt-parameter');
               el.textContent = ' :: ' + inputHiddenElement.value;
            }
         })
      });
   }

}

export default Prompt;
