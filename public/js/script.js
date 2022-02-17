const spinner = document.querySelector('#spinner');

const getData = () => {
    spinner.innerHTML = '';
    return creatProduct(data.items);
}

const productList = document.querySelector('#productList');

const creatProduct = (productInfo) => {
    for (let i = 0; i < productInfo.length; i++) {
        const title = productInfo[i].name;
        const image = productInfo[i].values[`${imageId}`];
        // create elements
        let div = document.createElement('div');
        let cardBody = document.createElement('div');
        let btnDiv = document.createElement('div');
        let img = document.createElement('img');
        let cardTitle = document.createElement('div');
        // let shop = document.createElement('a');
        let call = document.createElement('a');

        // create card
        div.classList.add('card', 'product', 'shadow-sm');
        // create image
        img.setAttribute('src', image);
        img.setAttribute('alt', title);
        img.classList.add('card-img-top');
        // create card body
        cardBody.classList.add('card-body');
        // create card title
        cardTitle.classList.add('card-title', 'text-center', 'mb-3');
        cardTitle.innerHTML = title;
        cardBody.appendChild(cardTitle);
        call.classList.add('btn', 'btn-success', 'w-100');
        call.setAttribute('href', 'tel:02537839529');
        call.innerHTML = 'سفارش سریع';
        // btnDiv.appendChild(shop);
        btnDiv.appendChild(call);
        cardBody.appendChild(btnDiv);

        div.appendChild(img);
        div.appendChild(cardBody);

        productList.append(div);
    }
}

getData();

const input = document.querySelector('#searchInput');
input.addEventListener('keyup', () => {
    let filter = input.value;
    const list = document.querySelector('#productList');
    const card = list.querySelectorAll('.card');

    for (let i = 0; i < card.length; i++) {
        const cardTitle = card[i].querySelector('.card-title');
        let txtValue = cardTitle.textContent || cardTitle.innerText;
        if (txtValue.indexOf(filter) > -1) {
            card[i].classList.remove('hidden');
        } else {
            card[i].classList.add('hidden');
        }
    }
});