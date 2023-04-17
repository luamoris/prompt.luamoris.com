// ===== ===== ===== ===== IMPORT
import TemplateString from "./TemplateString.js";
import { generateHASH } from "../helpers/functions.js";
import { HASH_LENGHT } from "../helpers/constant.js"

// ===== ===== ===== ===== KEYWORD ITEM CLASS

class Keyword {
   constructor(keyword, is = false) {
      this.name = keyword;
      this.description = "";
      this.hash = generateHASH(HASH_LENGHT);
      this.is = is;
      this.words = [];
      this.is ? null : this.words.push({ word: "" });
      this.toString = new TemplateString();
   }

   swapIs() {
      this.is = !is;
      this.is ? this.words.slice(0, 1) : this.words.unshift({ word: "" });
   }

   setName(keyword) {
      this.name = keyword;
   }

   setDescription(description) {
      this.description = description;
   }

   addWord(word) {
      this.words.push({
         word: word.trim(),
      });
   }

   removeWord(word) {
      const wordId = this.words.findIndex(w => w.word === word);
      return wordId !== -1 ? this.words.slice(wordId, 1) : null;
   }

   replace(text) {
      const keywordStr = this.toString.keyword(this.name, this.is);
      return text.replace(keywordStr, this.hash);
   }
}

export default Keyword;