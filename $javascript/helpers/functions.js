// Functions

// Create Hash
function createHash(lenght) {
   let hash = "";
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   const charactersLength = characters.length;
   for (let i = 0; i < lenght; i++) {
      hash += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return hash.toUpperCase();
}