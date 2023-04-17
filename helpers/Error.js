// ===== ===== ===== ===== ERROR CLASS

class PropmtError extends Error {

   constructor(title, problem) {
      super({ title, problem });
      this.title = title;
      this.problem = problem;
   }

}

export default PropmtError;