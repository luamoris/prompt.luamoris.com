// ===== ===== ===== ===== IMPORT
import { styleOptions } from "./options/styleOpts.js";


// ===== ===== ===== ===== style




// GENERATION ID
function generateId() {
   let id = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   const charactersLength = characters.length;
   for (let i = 0; i < 12; i++) {
      id += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return id.toUpperCase();
}

// PROMPT PARSER
function promptParser(text) {
   const pattern = /\[__([\p{L}\s]+?)__([*]?)\]/gu;
   const keywords = [];
   let match;

   while ((match = pattern.exec(text)) !== null) {
      const id = generateId();
      const word = {
         id,
         word: match[1],
         isRequired: match[2] === '*',
      };
      keywords.push(word);
      text = text.replace(match[0], id);
   }

   return {
      text,
      keywords,
   };
}




