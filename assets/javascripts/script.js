const tagsMenu = document.querySelectorAll('.header__tags-item');
const rating = document.querySelectorAll('.prod__rate');

const products = [
    {
        name: "Rayon a-line Dress",
        price: 13.45,
        cate: 'Shirts',
        rating: 4,
        image: '1.jpg'
    },
    {
        name: "Black men Watch",
        price: 13.45,
        cate: 'Watch',
        rating: 3,
        image: '2.jpg'
    },
    {
        name: "Men's Regular Fit Shirts",
        price: 13.45,
        cate: 'Shirts',
        rating: 5,
        image: '3.jpg'
    },
    {
        name: "Men's Handbag",
        price: 13.45,
        cate: 'Watch',
        rating: 3,
        image: '4.jpg'
    },
    {
        name: "Women's Relaxed Fit Jeans",
        price: 13.45,
        cate: 'Watch',
        rating: 1,
        image: '5.jpg'
    },
    {
        name: "Round Neck Printed Top",
        price: 13.45,
        cate: 'Watch',
        rating: 4,
        image: '6.jpg'
    },
    {
        name: "Mens Running Shoe",
        price: 13.45,
        cate: 'Watch',
        rating: 3,
        image: '7.jpg'
    },
    {
        name: "Men Pullover Sweater",
        price: 13.45,
        cate: 'Watch',
        rating: 5,
        image: '8.jpg'
    }
];

let removeActiveTag = () => {
    for (let i = 0; i <= tagsMenu.length; i++) {
        if (tagsMenu[i].classList.contains('active')) {
            tagsMenu[i].classList.remove('active');
            return;
        }
    }
};

tagsMenu.forEach((tag) => {
    tag.addEventListener('click', () => {
        removeActiveTag();
        tag.classList.add('active');
    });
});

const ratingProduct = (yellowStar) => {
    let rating = ``;
    let blackStar = 5 - yellowStar;
    for (let i = 0; i < yellowStar; i++) {
        rating += '<i class="fas fa-star"></i>';
    }
    for (let i = 0; i < blackStar; i++) {
        rating += '<i class="far fa-star"></i>';
    }
    return rating;
};

const fetchProducts = () => {
    let productSection = document.querySelector('.product__list');
    for (let i = 0; i < products.length; i++) {
        productSection.innerHTML += `
        <div class="list__card">
            <div class="list__card-top">
                <img src="./assets/img/products/` + products[i].image + `" alt="">
                <ul class="list__card-menu">
                    <li><i class="fas fa-heart"></i></li>
                    <li><i class="fas fa-shopping-cart"></i></li>
                    <li><i class="far fa-eye"></i></li>
                </ul>
            </div>
            <div class="list__card-bottom">
                <div class="prod__name">` + products[i].name + `</div>
                <div class="prod__price">$` + products[i].price + `</div>
                <div class="prod__rate"> ` + ratingProduct(products[i].rating) + `</div>
            </div>
        </div>
        `;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    fetchProducts();
});