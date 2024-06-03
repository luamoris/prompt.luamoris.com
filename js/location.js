document.addEventListener('DOMContentLoaded', e => {
   const currentPath = window.location.pathname;
   if (currentPath !== '/') {
      window.location.href = '/404.html';
   }
});