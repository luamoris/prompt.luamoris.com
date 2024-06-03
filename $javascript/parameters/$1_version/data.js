// Import

import { SLASH, DataErrorStr } from "../../helpers/constants.js"
import DataError from "../../classes/error/DataError.js";
import Data from "../../classes/data/Data.js";
import version from "./option.js";

// Version

class DataVersion extends Data {

   constructor() {
      super(version);
   }

   // ===

   get(text) {
      const result = { text: null, default: null, argument: null, opt: null };
      const param = this.findInText(text);
      const defValue = this.getDefault();

      if (!param) {
         result.text = this.toString(defValue);
         result.default = defValue;
         result.argument = defValue.argument;
         result.opt = defValue;
      } else {
         const paramStr = this.toParam(param.title, param.argument, false);
         const verion = this.isArgument(param, this.option);
         if (verion === null) throw new DataError(DataErrorStr.e2, paramStr);
         else {
            result.text = this.toString(verion);
            result.default = defValue;
            result.argument = verion.argument;
            result.opt = verion;
         }
      }

      return result;
   }

   // ===

   pattern() {
      const allTitles = [];
      this.option.forEach(i => {
         const { long, short } = i.title;
         long ? allTitles.push(long) : null;
         short ? allTitles.push(short) : null;
      });
      const titles = allTitles.reduce((a, i) => {
         if (a.includes(i)) return a;
         return [...a, i];
      }, []);
      return new RegExp(`--(${titles.join("|")}) (\\d+)?`, "g");
   }

   patternTitle() {
      const allTitles = [];
      this.option.forEach(i => {
         const { long, short } = i.title;
         long ? allTitles.push(long) : null;
         short ? allTitles.push(short) : null;
      });
      const titles = allTitles.reduce((a, i) => {
         if (a.includes(i)) return a;
         return [...a, i];
      }, []);
      return new RegExp(`--(${titles.join("|")})(\\s|$)`, "g");
   }

   // toParam(title, argument, isNull = true) { }

   toString(optVersion) {
      const { long, short } = optVersion.title;
      const title = this.settings.isShort ? (short ? short : long) : long;
      return this.toParam(title, optVersion.argument);
   }

   // findInText(text) { }

   // removeInText(text) {}

   getSuppurtOpt(versionId) {
      return this.option.find(v => v.id === versionId);
   }

   isArgument(param, support) {
      const item = support.find(v => {
         const { long, short } = v.title;
         return (long === param.title || short === param.title) && v.argument == param.argument;
      });
      return item || null;
   }

   // === new

   getDefault() {
      return this.option.find(v => v.isDefault);
   }
}

export default DataVersion;

