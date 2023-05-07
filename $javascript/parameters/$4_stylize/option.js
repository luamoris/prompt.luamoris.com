// stylize

const stylize = {
   title: { long: "stylize", short: "s" },
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
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: 2500 },
            list: [
               { argument: { min: 625, max: 60000 } }
            ]
         }
      },
      {
         versionId: 4,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: 100 },
            list: [
               { argument: { min: 0, max: 1000 } }
            ]
         }
      },
      {
         versionId: 5,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: 100 },
            list: [
               { argument: { min: 0, max: 1000 } }
            ]
         }
      },
      {
         versionId: 6,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: 2500 },
            list: [
               { argument: { min: 1250, max: 5000 } }
            ]
         }
      },
      {
         versionId: 7,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: 2500 },
            list: [
               { argument: { min: 1250, max: 5000 } }
            ]
         }
      },
      {
         versionId: 8,
         isSupport: false
      }
   ]
};

export default stylize;