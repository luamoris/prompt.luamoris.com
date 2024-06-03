// My Window

class MyWindow {
   constructor(windowId, boxId, winId, closeId) {

      this.status = false;

      this.window = document.getElementById(windowId);
      this.box = document.getElementById(boxId);
      this.win = document.getElementById(winId);

      this.closeBox = document.querySelector(`#${closeId}`);
      this.btnClose = this.closeBox.querySelector('.btn-win-close');

      this.wForm = null;

      this.winClick = e => {
         if (!this.win.contains(e.target)) {
            this.close();
         }
      }
   }

   open(wForm, beClose = true) {

      this.wForm = wForm;
      this.wForm.classList.add('w_active');

      this.status = true;
      this.window.classList.add('window_open');
      this.window.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';

      document.body.classList.add('hidden');
      const offsetPadding = window.innerWidth - document.body.offsetWidth + 'px';
      document.body.style.paddingRight = offsetPadding;

      this.win.style.transform = 'scale(1)';
      this.box.style.opacity = '1';

      if (beClose) {
         this.closeBox.classList.add('w_close_active');

         this.btnClose.addEventListener('click', () => {
            this.close();
            this.closeBox.classList.remove('w_close_active');
         });

         this.window.addEventListener('click', this.winClick);
      } else {
         if (this.closeBox.classList.contains('w_close_active')) {
            this.closeBox.classList.remove('w_close_active')
         }
         this.window.removeEventListener('click', this.winClick);
      }
   }

   close() {
      this.status = false;
      this.window.classList.remove('window_open');
      this.window.style.backgroundColor = 'transparent';

      document.body.classList.remove('hidden')
      document.body.style.paddingRight = '0px';

      this.win.style.transform = 'scale(0.8)';
      this.box.style.opacity = '0';

      setTimeout(() => {
         if (this.wForm && this.wForm.classList.contains('w_active')) {
            this.wForm.classList.remove('w_active');
         }
      }, 150);
   }

   change(wFormNew) {
      if (this.wForm) {
         if (this.wForm.classList.contains('w_active')) {
            this.wForm.classList.remove('w_active');
         }
         this.wForm = wFormNew;
         this.wForm.classList.add('w_active');
      }
   }

   next(wForm, beClose = true) {
      if (this.status) {
         this.close();
      } else {
         this.open(wForm, beClose);
      }
   }
}

export default MyWindow;