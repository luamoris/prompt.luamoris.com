// style

const style = {
   title: { long: "style", short: null },
   description: null,
   support: [
      {
         versionId: 1,
         isSupport: false
      },
      {
         versionId: 2,
         isSupport: false
      },
      {
         versionId: 3,
         isSupport: false
      },
      {
         versionId: 4,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "4c" },
            list: [
               { argument: "4a" },
               { argument: "4b" },
               { argument: "4c" }
            ]
         }
      },
      {
         versionId: 5,
         isSupport: false
      },
      {
         versionId: 6,
         isSupport: false
      },
      {
         versionId: 7,
         isSupport: false
      },
      {
         versionId: 8,
         isSupport: false
      }
   ]
};

export default style;