import '../css/style.scss';

const clothes = [
    {
        id:       0,
        image:    '/src/assets/tshirt-img.png',
        isNew:    true,
        title:    'Футболка "Эволюционируй или сдохни"',
        price:    220,
        size:     'Размеры S/M/L',
        hasSize:  true,
        hasColor: true,
        details:  'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:       1,
        image:    '/src/assets/tshirt-img.png',
        isNew:    false,
        title:    'Футболка "Эволюционируй или сдохни" Limited',
        price:    220,
        size:     'Оверсайз',
        hasColor: true,
        details:  'Брендированная футболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание',
    },
    {
        id:       2,
        image:    '/src/assets/sweatshirt-img.png',
        isNew:    false,
        title:    'Толстовка "Kolesa Team post-COVID"',
        price:    290,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
    },
    {
        id:       3,
        image:    '/src/assets/sweatshirt-img.png',
        isNew:    false,
        title:    'Толстовка "Kolesa Team pre-COVID"',
        price:    280,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
    },
    {
        id:       4,
        image:    '/src/assets/hoodie-img.png',
        isNew:    false,
        title:    'Худи "Kolesa Minimal"',
        price:    300,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Минималистичная худи от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Минимализм во всей красе',
    },
    {
        id:       5,
        image:    '/src/assets/hoodie-img.png',
        isNew:    true,
        title:    'Худи "Kolesa Minimal vol.2"',
        price:    320,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Минималистичная худи от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание.',
    },
];

const accessories = [
    {
        id:       6,
        image:    '/src/assets/bottle-img.png',
        isNew:    false,
        title:    'Бутылка прозрачная "Kolesa Water"',
        price:    150,
        size:     'Объем 0.5/0.7/1 л.',
        hasColor: false,
        details:  'Брендированная бутылка от Qazaq Republic из прозрачного пластика.',
    },
    {
        id:       7,
        image:    '/src/assets/bottle-img.png',
        isNew:    true,
        title:    'Бутылка матовая "Kolesa Water"',
        price:    160,
        size:     'Объем 0.5/0.7/1 л.',
        hasColor: false,
        details:  'Брендированная бутылка от Qazaq Republic из матового пластика.',
    },
    {
        id:       8,
        image:    '/src/assets/cap-img.png',
        isNew:    true,
        title:    'Бейсболка "Kolesa Simple vol.2"',
        price:    200,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Брендированная бейсболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%. Переиздание.',
    },
    {
        id:       9,
        image:    '/src/assets/cap-img.png',
        isNew:    false,
        title:    'Бейсболка "Kolesa Simple"',
        price:    200,
        size:     'Размеры S/M/L',
        hasColor: true,
        details:  'Брендированная бейсболка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%.',
    },
    {
        id:       10,
        image:    '/src/assets/notebook-img.png',
        isNew:    false,
        title:    'Блокнот "Kolesa Thoughts Out"',
        price:    220,
        size:     'Объем 100 стр.',
        hasColor: false,
        details:  'Брендированный блокнот от Qazaq Republic на 100 страниц.',
    },
    {
        id:       11,
        image:    '/src/assets/notebook-img.png',
        isNew:    false,
        title:    'Блокнот "Kolesa Thoughts Out"',
        price:    180,
        size:     'Объем 50 стр.',
        hasColor: false,
        details:  'Брендированный блокнот от Qazaq Republic на 50 страниц.',
    },
];

const makeProductCard = (id, image, isNew, title, price, size) => `
<div class="product-card-wrap product-container__product-card-wrap">
    <div class="product-card product-card-wrap__product-card" data-index="${id}">
        <img src="${image}" alt="Фото товара" class="product-card__photo" width="330" height="330">
        ${isNew ? '<span class="product-card__new-label">NEW</span>' : ''}
        <div class="product-card__description">
            <div class="product-card__price">${price} баллов</div>
            <h4 class="product-card__title">${title}</h4>
            <p class="product-card__size">${size}</p>
            <button class="button product-card__button" data-index="${id}">Заказать</button>
        </div>`;

const makeProductModal = (id, image, isNew, title, price, size, hasColor, details) => `
<div class="modal main-container__modal" style="display: none;" id="${id}">
                <div class="modal__modal-content">
                    <button class="modal__close" data-index="${id}"></button>
                    <div class="modal__content-container">
                        <div class="modal__image-container">
                            <div class="modal__main-img">
                                <img src="${image}" alt="Фото товара" width="330" height="330">
                            </div>
                            <div class="modal__preview-container">
                                <img src="src/assets/preview-1.png" class="modal__preview-img"
                                alt="Фото товара">
                                <img src="src/assets/preview-2.png" class="modal__preview-img modal__preview-img-active"
                                alt="Фото товара">
                                <img src="src/assets/preview-3.png" class="modal__preview-img"
                                alt="Фото товара">
                            </div>
                        </div>
                        <div class="modal__details-container">
                            <div class="modal__required-container">
                            <div class="modal__info-container">
                                <h2 class="modal__title">${title}</h2>
                                <span class="modal__price">${price} баллов</span>
                                <button class="button modal__button">Заказать</button>
                            </div>
                            <div class="modal__balance">
                                <div class="modal__balance-info">
                                    <span class="modal__your-txt">Твой баланс:</span><br>
                                    <span class="modal__balance-num">3945 баллов</span>
                                </div>
                                <div class="balance-icon">
                                    <img src="src/assets/balance-icon.png" alt="">
                                </div>
                            </div>
                            </div>
                            <div class="modal__addons-container">
                            ${hasColor ? ` <div class="color-details modal__addon">
                            <span class="txt">Цвета:</span>
                            <div class="modal__radio-container">
                                <label for="product-${id}-color1" class="modal__label-container
                                label-container">Синий
                                    <input type="radio" id="product-${id}-color1" name="color" value="blue"
                                    class="label-container__input" checked>
                                    <span class="label-container__checkmark label-container__checkmark-blue"></span>
                                    <span class="label-container__back"></span>
                                </label>
                                <label for="product-${id}-color2" class="modal__label-container
                                label-container">Бежевый
                                    <input type="radio" id="product-${id}-color2" name="color" value="beige"
                                    class="label-container__input">
                                    <span class="label-container__checkmark label-container__checkmark-beige">
                                    </span>
                                    <span class="label-container__back"></span>
                                </label>
                                <label for="product-${id}-color3" class="modal__label-container
                                label-container" >Серый
                                    <input type="radio" id="product-${id}-color3" name="color" value="grey"
                                    class="label-container__input">
                                    <span class="label-container__checkmark label-container__checkmark-grey"></span>
                                    <span class="label-container__back"></span>
                                </label>
                            </div>
                        </div>` : ''}
                            <div class="size-details modal__addon">
                                <span class="txt">Размер:</span>
                                <div class="modal__radio-container">
                                    <label for="product-${id}-size1" class="modal__label-container label-container
                                    modal__label-container-size">S
                                        <input type="radio" id="product-${id}-size1" name="size" value="small"
                                        class="label-container__input" checked>
                                        <span class="label-container__checkmark label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                    <label for="product-${id}-size2" class="modal__label-container label-container
                                    modal__label-container-size">M
                                        <input type="radio" id="product-${id}-size2" name="size" value="medium"
                                        class="label-container__input">
                                        <span class="label-container__checkmark label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                    <label for="product-${id}-size3" class="modal__label-container label-container
                                    modal__label-container-size">L
                                        <input type="radio" id="product-${id}-size3" name="size" value="large"
                                        class="label-container__input">
                                        <span class="label-container__checkmark label-container__checkmark-size"></span>
                                        <span class="label-container__back"></span>
                                    </label>
                                </div>
                            </div>

                            <div class="description modal__addon" >
                                <h2 class="txt bold-txt">Детали:</h2>
                                <p class="txt">${details}</p>
                            </div>
                            <div class="hints addon">
                                <h2 class="txt bold-txt">Как выбрать размер:</h2>
                                <p class="txt">Написать дяде Рику для уточнения.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

function compareValues(key, order = 'asc') {
    return function (a, b) {
        const key1 = a[key];
        const key2 = b[key];

        let comparison = 0;

        if (key1 > key2) {
            comparison = 1;
        } else if (key1 < key2) {
            comparison = -1;
        }

        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}

const clothesSorted = clothes.sort(compareValues('isNew', 'desc'));
const accessoriesSorted = accessories.sort(compareValues('isNew', 'desc'));
const allConcat = clothes.concat(accessories);
const allSorted = allConcat.sort(compareValues('isNew', 'desc'));

const input = document.querySelectorAll('.label-container__input');
const container = document.querySelector('.js__product-container');
const modalContainer = document.querySelector('.js__modal-container');

function generateCard(dataArray) {
    container.innerHTML = '';
    dataArray.forEach((card) => {
        const {
            id, image, isNew, title, price, size,
        } = card;
        const cardBlock = makeProductCard(id, image, isNew, title, price, size);

        container.innerHTML += cardBlock;
    });
}

function generateModal(dataArray) {
    modalContainer.innerHTML = '';
    dataArray.forEach((card) => {
        const {
            id, image, isNew, title, price, size, hasColor, details,
        } = card;
        const modalBlock = makeProductModal(id, image, isNew, title, price, size, hasColor, details);

        modalContainer.innerHTML += modalBlock;
    });
}

function modalFunction() {
    const cardOpen = document.querySelectorAll('.product-card');
    const buttonClose = document.querySelectorAll('.modal__close');

    cardOpen.forEach((cardTarget) => {
        cardTarget.addEventListener('click', () => {
            const index = cardTarget.getAttribute('data-index');
            const targetModal = document.getElementById(index);

            targetModal.style.display = 'block';
        });
    });

    buttonClose.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            const targetModal = document.getElementById(index);

            targetModal.style.display = 'none';
        });
    });
}

generateCard(allSorted);
generateModal(allSorted);
modalFunction();

input.forEach((radio) => {
    radio.addEventListener('click', () => {
        if (radio.value === 'clothes') {
            generateCard(clothesSorted);
            generateModal(clothesSorted);
            modalFunction();
        } else if (radio.value === 'accessories') {
            generateCard(accessoriesSorted);
            generateModal(accessoriesSorted);
            modalFunction();
        } else if (radio.value === 'all') {
            generateCard(allSorted);
            generateModal(allSorted);
            modalFunction();
        }
    });
});
