// ===== ===== ===== ===== IMPORT
import Keyword from "./Keyword.js";

// ===== ===== ===== ===== KEYWORDS ITEM CLASS

class Keywords {
   constructor(text) {
      this.list = []; // [{name: "", words: []},{name: "", words: []}]
      this.pattern = this.getPattern();
      this.update(text);
   }

   getPattern() {
      return /\[__([\p{L}\p{N}]+)__([*]?)\]/gu;
   }

   findIdbyName(name) {
      return this.list.findIndex(i => i.name === name);
   }

   findIdbyHash(hash) {
      return this.list.findIndex(i => {
         if (i.words.findIndex(w => w.hash === hash) !== -1) {
            return true;
         }
      });
      // return this.list.findIndex(w => w.hash === hash);
   }

   getWord(hash) {
      const itemId = this.findIdbyHash(hash);
      return itemId !== -1 ? this.list[itemId].words.find(w => w.hash === hash) : null;
      // const wordId = this.findIdbyHash(hash);
      // return wordId !== -1 ? this.list[wordId] : null;
   }

   add(word) {
      const nameId = this.findIdbyName(word.name);
      if (nameId !== -1) {
         const wordId = this.findIdbyHash(word.hash);
         wordId !== -1 ? null : this.list[nameId].words.push(word);
      } else {
         this.list.push({ name: word.name, words: [word] });
      }
      // this.list.push(word);
   }

   revome(hash) {
      const nameId = this.findIdbyHash(hash);
      if (nameId !== -1) {
         const wordId = this.list[nameId].words.findIndex(w => w.hash === hash);
         const delWord = this.list[nameId].words.slice(wordId, 1);
         this.list[nameId].words.length === 0 ? this.list.slice(nameId, 1) : null;
         return delWord;
      }
      return null;
      // const wordId = this.findIdbyHash(hash);
      // return wordId !== -1 ? this.list.slice(wordId, 1) : null;
   }

   replace(text) {
      let result = text;
      this.list.forEach(i => {
         i.words.forEach(w => {
            result = w.replace(result);
         });
      });
      return result;
      // let result = text;
      // this.list.forEach(word => {
      //    result = word.replace(result);
      // });
      // return result;
   }

   update(text) {
      this.list = [];

      let match = null;
      while ((match = this.pattern.exec(text)) != null) {
         const name = match[1];
         const is = match[2] ? true : false;
         const word = new Keyword(name, is);
         this.add(word);
      }
   }
}

export default Keywords;