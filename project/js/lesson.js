// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',() => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }
    else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

// TAB SLIDER

const tabs = {
    contentBlocks: document.querySelectorAll('.tab_content_block'),
    items: document.querySelectorAll('.tab_content_item'),
    parent: document.querySelector('.tab_content_items'),
    currentIndex: 0,

    hideAll: () => {
        tabs.contentBlocks.forEach((block) => (block.style.display = 'none'));
        tabs.items.forEach((item) => item.classList.remove('tab_content_item_active'));
    },

    show: (index = 0) => {
        tabs.contentBlocks[index].style.display = 'block';
        tabs.items[index].classList.add('tab_content_item_active');
    },

    handleItemClick: (event) => {
        const clickedItem = event.target;
        if (clickedItem.classList.contains('tab_content_item')) {
            tabs.hideAll();
            tabs.show(Array.from(tabs.items).indexOf(clickedItem));
        }
    },

    changeTab: () => {
        tabs.currentIndex = (tabs.currentIndex + 1) % tabs.items.length;
        tabs.hideAll();
        tabs.show(tabs.currentIndex);
    },

    init: () => {
        tabs.hideAll();
        tabs.show();
        tabs.parent.addEventListener('click', tabs.handleItemClick);
        setInterval(tabs.changeTab, 3000); // Изменил на 3 секунды
    },
};

tabs.init();

