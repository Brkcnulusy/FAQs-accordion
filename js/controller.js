

const faqsAccordion = function () {

    // Variables

    const accordionButtons = document.querySelectorAll('.js-accordion');


    // Event Listeners

    const _eventListeners = function () {
        accordionButtons.forEach(accordionButton => {
            accordionButton.addEventListener('click', _openTheMenu)
        })
    }

    // FunC

    const _openTheMenu = function () {
        const accordionText = this.lastElementChild;
        const accordionImage = this.children[1];
        if (accordionText.style.display == 'flex') {
            accordionText.style.display = 'none'
            accordionImage.src = './assets/images/icon-plus.svg';
        } else {
            accordionText.style.display = 'flex';
            accordionImage.src = './assets/images/icon-minus.svg';
        }
    }


    return {
        init: function () {
            _eventListeners();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function () {
    faqsAccordion.init();
})