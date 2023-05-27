export class Modal {
    $bodyElement = document.querySelector('body');
    bodyOverlayClassName = 'overlay';
    hideClassName = 'hide';
    modalHeight = '';

    constructor(modalName, options) {
        this.modal = document.querySelector(`#${modalName}`);
        this.options = options ?? {};
        this.closeButton = this.modal.querySelector('button');
        // this.#sayHello();
    }

    handleCloseButton() {
        this.closeButton.addEventListener('click', () => {
            if(this.options.onCloseShowInfo) {
                this.modal.classList.add(this.hideClassName);
                this.$bodyElement.classList.remove(this.bodyOverlayClassName);
                localStorage.setItem("Modal", "Zaakcpetowany");
            } else {
                alert("COLES");
            }
        })

        this.modalHeight = '1000px;';
    }

    #sayHello() {
       console.log('hello');
    }

    init() {
        this.$bodyElement.classList.add(this.bodyOverlayClassName);
        this.handleCloseButton();
    }
}