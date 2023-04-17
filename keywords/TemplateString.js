// ===== ===== ===== ===== IMPORT


// ===== ===== ===== ===== TemplateString CLASS

class TemplateString {
   constructor() { }

   keyword(name, is) {
      return `[__${name}__${is ? "*" : ""}]`;
   }
}

export default TemplateString;