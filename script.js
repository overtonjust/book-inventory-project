const list = document.querySelector('.list');
const form = document.querySelectorAll('.field');
const defaultInputs = document.querySelectorAll('.placeholders')
const submit = form[5];
const errorMsg = document.querySelector('.form__error');



submit.addEventListener('click', () => {
    
    
    const book = document.createElement('article')
    book.setAttribute('class', 'book');

        const image = document.createElement('img');
        image.setAttribute('class', 'book__img');
        if(form[2].value == ''){
            image.setAttribute('src', 'https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        }

        else {
            image.setAttribute('src', form[2].value);
        }

        image.setAttribute('alt', `${form[0].value} book cover`);

        const content = document.createElement('div');
        content.setAttribute('class', 'book__content');

            const title = document.createElement('p');
            title.setAttribute('class','book__title' );
            title.textContent = form[0].value;
            if(!form[0].checkValidity()) {
                form[0].setAttribute('id', 'invalid');
                errorMsg.textContent = `Please enter the book's title.`;
                return;
            }
            else {
                if(form[0].hasAttribute('id')) {
                    form[0].removeAttribute('id');
                }
            }

            const author = document.createElement('p');
            author.setAttribute('class', 'book__author')
            author.textContent = form[1].value;
            if(!form[1].checkValidity()){
                form[1].setAttribute('id', 'invalid')
                errorMsg.textContent = 'Please give the books author.'
                return;
            }
            else {
                if(form[1].hasAttribute('id')) {
                    form[1].removeAttribute('id');
                }
            }

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
            if(!form[3].checkValidity()) {
                form[3].setAttribute('id', 'invalid')
                errorMsg.innerHTML = 'Please enter book cost <i>(in 00.00 format)</i>.';
                return;
            }
            else {
                if(form[3].hasAttribute('id')) {
                    form[3].removeAttribute('id');
                }
            }

        content.append(title, author, bubbleHolder, price);

        const icon = document.createElement('i');
        icon.setAttribute('class', 'book__icon fa-regular fa-trash-can');
        icon.addEventListener('click', () => {
            book.remove();
        });

    book.append(image, content, icon);

    list.appendChild(book);

    defaultInputs.forEach(input => {
        input.value = '';
    })
});




