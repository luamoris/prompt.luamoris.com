// ===== ===== ===== ===== IMPORT
import PropmtError from "../Error.js";
import { SLASH } from "../constant.js";


// ===== ===== ===== ===== MAIN PARAMETER CLASS

class Parameter {

   constructor(options) {
      this.options = options;
      this.pattern = this.getPattern();
   }

   // rewrite
   getPattern() { return new RegExp(); }

   getString(value) {
      const argument = `${value.argument !== null ? " " + value.argument : ""}`;
      const long = `${SLASH}${this.options.long}` + argument;
      const short = this.options.short ? `${SLASH}${this.options.short}` + argument : null;
      return {
         long: long,
         short: short ? short : long,
      };
   }

   getSupportByVersion(versionId) {
      return this.options.support.find(item => item.id === versionId);
   }

   findByText(text) {
      let result = null;
      const match = this.pattern.exec(text)
      if (match) {
         result = {
            title: match[1],
            argument: match[2] ? match[2] : null,
         };
      }
      return result;
   }

   // rewrite
   isCorrectValue(param, support) {
      return support.values[0].is ? support.values.find((v, i) => i !== 0 && v.argument === param.argument) : { argument: null };
   }

   getByText(text, versionId) {
      // console.log(this.pattern);
      const param = this.findByText(text);
      // has not parameters in text
      if (!param) return null;
      const paramStr = `${SLASH}${param.title} ${param.argument}`;
      const support = this.getSupportByVersion(versionId);
      // console.log(param, support);
      // if parameter does not correspond to the version
      if (!support.is) throw new PropmtError("The entered parameter does not match the version", paramStr);
      const value = this.isCorrectValue(param, support);
      // console.log(value);
      // if incorrect argument
      if (!value) throw new PropmtError("Invalid argument for given parameter", paramStr);
      return this.getString(value).short;
   }

}

export default Parameter;