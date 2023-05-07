// aspect

const aspect = {
   title: { long: "aspect", short: "ar" },
   description: null,
   support: [
      {
         versionId: 1,
         isSupport: false,
      },
      {
         versionId: 2,
         isSupport: false,
      },
      {
         versionId: 3,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "2:5" },
               { argument: "5:2" }
            ]
         }
      },
      {
         versionId: 4,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "1:2" },
               { argument: "2:3" },
               { argument: "2:5" },
               { argument: "4:5" },
               { argument: "4:7" },
               { argument: "2:1" },
               { argument: "3:2" },
               { argument: "5:4" },
               { argument: "5:2" },
               { argument: "7:4" },
               { argument: "9:16" },
               { argument: "16:9" }
            ]
         }
      },
      {
         versionId: 5,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "1:2" },
               { argument: "2:3" },
               { argument: "2:5" },
               { argument: "4:5" },
               { argument: "4:7" },
               { argument: "2:1" },
               { argument: "3:2" },
               { argument: "5:4" },
               { argument: "5:2" },
               { argument: "7:4" },
               { argument: "9:16" },
               { argument: "16:9" }
            ]
         }
      },
      {
         versionId: 6,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "2:3" },
               { argument: "3:2" },
            ]
         }
      },
      {
         versionId: 7,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "2:3" },
               { argument: "3:2" },
            ]
         }
      },
      {
         versionId: 8,
         isSupport: true,
         isValues: true,
         values: {
            default: { argument: "1:1" },
            list: [
               { argument: "1:1" },
               { argument: "1:2" },
               { argument: "2:1" },
            ]
         }
      }
   ]
};

export default aspect;