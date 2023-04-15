// ===== ===== ===== ===== --aspect
const aspectOptions = {
   long: "aspect",
   short: "ar",
   description: "",
   support: [
      { id: 1, is: false },
      { id: 2, is: false },
      {
         id: 3, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "2:5", default: false },
            { argument: "5:2", default: false },
         ]
      },
      {
         id: 4, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "1:2", default: false },
            { argument: "2:3", default: false },
            { argument: "2:5", default: false },
            { argument: "4:5", default: false },
            { argument: "4:7", default: false },
            { argument: "2:1", default: false },
            { argument: "3:2", default: false },
            { argument: "5:4", default: false },
            { argument: "5:2", default: false },
            { argument: "7:4", default: false },
            { argument: "9:16", default: false },
            { argument: "16:9", default: false },
         ]
      },
      {
         id: 5, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "1:2", default: false },
            { argument: "2:3", default: false },
            { argument: "2:5", default: false },
            { argument: "4:5", default: false },
            { argument: "4:7", default: false },
            { argument: "2:1", default: false },
            { argument: "3:2", default: false },
            { argument: "5:4", default: false },
            { argument: "5:2", default: false },
            { argument: "7:4", default: false },
            { argument: "9:16", default: false },
            { argument: "16:9", default: false },
         ]
      },
      {
         id: 6, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "2:3", default: false },
            { argument: "3:2", default: false },
         ]
      },
      {
         id: 7, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "2:3", default: false },
            { argument: "3:2", default: false },
         ]
      },
      {
         id: 8, is: true,
         values: [
            { is: true },
            { argument: "1:1", default: true },
            { argument: "1:2", default: false },
            { argument: "2:1", default: false },
         ]
      },
   ]
};

export default aspectOptions;