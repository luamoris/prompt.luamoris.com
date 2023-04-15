// ===== ===== ===== ===== --stylize
const stylizeOptions = {
   long: "stylize",
   short: "s",
   description: "",
   support: [
      { id: 1, is: false },
      { id: 2, is: false },
      {
         id: 3, is: true, values: [
            { is: true },
            { argument: { min: 625, max: 60000 }, default: 2500 },
         ]
      },
      {
         id: 4, is: true, values: [
            { is: true },
            { argument: { min: 0, max: 1000 }, default: 100 },
         ]
      },
      {
         id: 5, is: true, values: [
            { is: true },
            { argument: { min: 0, max: 1000 }, default: 100 },
         ]
      },
      {
         id: 6, is: true, values: [
            { is: true },
            { argument: { min: 1250, max: 5000 }, default: 2500 },
         ]
      },
      {
         id: 7, is: true, values: [
            { is: true },
            { argument: { min: 1250, max: 5000 }, default: 2500 },
         ]
      },
      { id: 8, is: false },
   ]
};

export default stylizeOptions;