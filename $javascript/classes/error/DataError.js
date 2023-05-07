// Data Error

class DataError extends Error {

   constructor(title, msg) {
      super({ title, msg });
      this.title = title;
      this.msg = msg;
   }
}

export default DataError;