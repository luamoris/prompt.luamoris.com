// ===== ===== ===== ===== IMPORT
import versionOptions from "./versionOpts.js";
import PropmtError from "../Error.js";
import { SLASH } from "../constant.js";


// ===== ===== ===== ===== CLASS --Version

class VersionParameter {
   constructor() {
      this.options = versionOptions;
      this.pattern = this.getPattern();
      this.defaultVersionId = this.options.find(v => v.default).id;
   }

   // ~~

   getVersionById(versionId) {
      return this.options.find(v => v.id === versionId);
   }

   // ~~

   getPattern() {
      const allTitles = [];
      this.options.forEach(p => {
         p.long ? allTitles.push(p.long) : null;
         p.short ? allTitles.push(p.short) : null;
      });
      const titles = allTitles.reduce((a, i) => {
         if (a.includes(i)) return a;
         return [...a, i];
      }, []);
      return new RegExp(`--(${titles.join("|")}) (\\d+)?`, "g");
   }

   getString(versionId) {
      const version = this.getVersionById(versionId);
      const argument = `${version.argument !== null ? " " + version.argument : ""}`;
      const long = `${SLASH}${version.long}` + argument;
      const short = version.short ? `${SLASH}${version.short}` + argument : null;
      return {
         long: long,
         short: short ? short : long,
      };
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

   isCorrectVersion(param) {
      return this.options.find(v => ((v.long === param.title || v.short === param.title) && v.argument == param.argument)) || null;
   }

   getByText(text) {
      // console.log(this.pattern);
      const param = this.findByText(text);
      // console.log(param);
      // has not parameters in text -> return default
      if (!param) return { id: this.defaultVersionId, title: this.getString(this.defaultVersionId).short };
      const paramStr = `${SLASH}${param.title} ${param.argument}`;
      const version = this.isCorrectVersion(param);
      // console.log(version);
      // if incorrect argument
      if (!version) throw new PropmtError("Invalid argument for given parameter", paramStr);
      return { id: version.id, title: this.getString(version.id).short };
   }
}

export default VersionParameter;