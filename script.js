const list = document.querySelector('.list');
const form = document.querySelectorAll('.field');
const submit = form[5];


submit.addEventListener('click', () => {
    const book = document.createElement('article')
    book.setAttribute('class', 'book');

        const image = document.createElement('img');
        image.setAttribute('class', 'book__img');
        image.setAttribute('src', form[2].value);
        image.setAttribute('alt', `${form[0].value} book cover`);

        const content = document.createElement('div');
        content.setAttribute('class', 'book__content');

            const title = document.createElement('p');
            title.setAttribute('class','book__title' );
            title.textContent = form[0].value;

            const author = document.createElement('p');
            author.setAttribute('class', 'book__author')
            author.textContent = form[1].value;

            const bubbleHolder = document.createElement('p')
                const bubble = document.createElement('span');
                bubble.setAttribute('class', 'book__bubble');
               
                if(form[4].value == 'In') {
                    bubble.textContent = `In Stock`;
                }
                else if(form[4].value == 'Out') {
                    bubble.textContent = `Out of Stock`;
                    bubble.style['background-color'] = 'red';
                }

                bubbleHolder.appendChild(bubble);
                
            const price = document.createElement('p');
            price.setAttribute('class', 'book__price');
            price.textContent = `$${form[3].value}`;

        content.append(title, author, bubbleHolder, price);

        const icon = document.createElement('i');
        icon.setAttribute('class', 'book__icon fa-regular fa-trash-can');
        icon.addEventListener('click', () => {
            book.remove();
        });

    book.append(image, content, icon);

    list.appendChild(book);
});




