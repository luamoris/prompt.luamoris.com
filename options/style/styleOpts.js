// ===== ===== ===== ===== --style
const styleOptions = {
   long: "style",
   short: null,
   description: "",
   support: [
      { id: 1, is: false },
      { id: 2, is: false },
      { id: 3, is: false },
      {
         id: 4,
         is: true,
         values: [
            { is: true },
            { argument: "4a", default: false },
            { argument: "4b", default: false },
            { argument: "4c", default: true },
         ]
      },
      { id: 5, is: false },
      { id: 6, is: false },
      { id: 7, is: false },
      { id: 8, is: false },
   ]
};

export default styleOptions;