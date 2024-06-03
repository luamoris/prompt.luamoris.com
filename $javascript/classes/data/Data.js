// Import

import DataError from "../error/DataError.js"
import { SLASH, DataErrorStr } from "../../helpers/constants.js"

class Data {

   constructor(option) {
      this.option = option;
      this.settings = {
         isShort: true
      };
   }

   get(text, versionId) {
      const result = { text: null, default: null, argument: null, opt: null };
      const param = this.findInText(text);
      const support = this.getSuppurtOpt(versionId);

      if (!param) {

         if (!support.isSupport) {
            if (this.findTitleInText(text)) {
               throw new DataError(DataErrorStr.e1, this.option.title.long);
            }
            return null;
         }

         if (this.findTitleInText(text) && support.isValues) {
            throw new DataError(DataErrorStr.e2, this.option.title.long);
         }

         if (support.isValues && support.hasOwnProperty("values")) {
            result.default = support.values.default.argument;
         }

      } else {
         const paramStr = this.toParam(param.title, param.argument, false);
         if (!support.isSupport) throw new DataError(DataErrorStr.e1, paramStr);
         const value = this.isArgument(param.argument, support);

         if (!value) throw new DataError(DataErrorStr.e2, paramStr);

         result.text = this.toString(value.argument);
         result.argument = value.argument;

         if (support.isValues && support.hasOwnProperty("values")) {
            result.default = support.values.default.argument;
         }
      }

      result.opt = support;
      return result;
   }

   // ===

   pattern() { return new RegExp(); }

   patternTitle() { return new RegExp(); }


   toParam(title, argument, isNull = true) {
      let paramStr = `${SLASH}${title}`;
      paramStr += isNull ? (argument ? ` ${argument}` : ``) : (` ${argument}`);
      return paramStr;
   }

   toString(argument) {
      const { long, short } = this.option.title;
      const title = this.settings.isShort ? (short ? short : long) : long;
      return this.toParam(title, argument);
   }

   findInText(text) {
      let param = null;
      const pattern = this.pattern();
      const match = pattern.exec(text);
      if (match) {
         param = {
            title: match[1],
            argument: match[2] ? match[2] : null,
         };
      }
      return param;
   }

   findTitleInText(text) {
      const pattern = this.patternTitle();
      return pattern.test(text);
   }

   removeInText(text) {
      const pattern = this.pattern();
      const match = pattern.exec(text);
      return match ? text.replace(match[0], "") : text;
   }

   getSuppurtOpt(versionId) {
      return this.option.support.find(opt => opt.versionId === versionId);
   }

   isArgument(argument, support) {
      return support.isValues ? support.values.list.find(i => i.argument === argument) : { argument: null };
   }
}

export default Data;