##### Option


```js
// version

const version = {
   id: 0,
   title: { long: "", short: "" },
   description: null,
   argument: null,
   isDefault: false,
};

export default version;
```


```js
// option

const option = {
   title: { long: "", short: "" },
   description: null,
   support: [
      {
         versionId: 0,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: null },
            list: [
               { argument: null }
            ]
         }
      }
   ]
};

export default option;
```


```js
class Data {

   constructor(option) {
      this.option = option;
      this.settings = {
         isShort: true
      };
   }

   // ===

   get(text, versionId) {
      const result = { text: null, default: null, argument: null, opt: null };
      const param = this.findInText(text);
      const support = this.getSuppurtOpt(versionId);

      if (param) {
         const paramStr = this.toParam(param.title, param.argument, false);
         if (!support.isSupport) throw new DataError(DataErrorStr.e1, paramStr);
         const value = this.isArgument(param.argument, support);
         if (!value) throw new DataError(DataErrorStr.e2, paramStr);

         result.text = this.toString(value.argument);
         result.default = support.values.default.argument;
         result.argument = value.argument;
      }

      result.opt = support;
      return result;
   }

   // ===

   pattern() { return new RegExp(); }

   toParam(title, argument, isNull = true) {}

   toString(argument) {}

   findInText(text) {}

   removeInText(text) {}

   getSuppurtOpt(versionId) {}

   isArgument(argument, support) {}
}

export default Data;
```


```js
// Import
import Data from "../../classes/data/Data.js";
import option from "./option.js"

// Data

class DataParameter extends Data {

   constructor() {
      super(option);
   }

   // ===

   // get(text, versionId) {}

   // ===

   // pattern() { return new RegExp(); }

   // toParam(title, argument, isNull = true) {}

   // toString(argument) {}

   // findInText(text) {}

   // removeInText(text) {}

   // getSuppurtOpt(versionId) {}

   // isArgument(argument, support) {}
}

export default DataParameter;
```