// Generation Hash
function generateHASH(lenght) {
   let id = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   const charactersLength = characters.length;
   for (let i = 0; i < lenght; i++) {
      id += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return id.toUpperCase();
}

export { generateHASH };