const tagsMenu = document.querySelectorAll('.header__tags-item');
const rating = document.querySelectorAll('.prod__rate');

const products = [{
        name: "Rayon a-line Dress",
        price: 13.45,
        cate: 'shirt',
        rating: 4,
        image: '1.jpg'
    },
    {
        name: "Black men Watch",
        price: 13.45,
        cate: 'watch',
        rating: 3,
        image: '2.jpg'
    },
    {
        name: "Men's Regular Fit Shirts",
        price: 13.45,
        cate: 'shirt',
        rating: 5,
        image: '3.jpg'
    },
    {
        name: "Men's Handbag",
        price: 13.45,
        cate: 'handbag',
        rating: 3,
        image: '4.jpg'
    },
    {
        name: "Women's Relaxed Fit Jeans",
        price: 13.45,
        cate: 'jeans',
        rating: 1,
        image: '5.jpg'
    },
    {
        name: "Round Neck Printed Top",
        price: 13.45,
        cate: 'shirt',
        rating: 4,
        image: '6.jpg'
    },
    {
        name: "Mens Running Shoe",
        price: 13.45,
        cate: 'shoe',
        rating: 3,
        image: '7.jpg'
    },
    {
        name: "Men Pullover Sweater",
        price: 13.45,
        cate: 'shirt',
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
        fetchProducts(tag.dataset.filter);
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

const getProductFormCate = (cate) => {
    let product = [];
    if (cate == 'all') return products;
    else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].cate == cate) {
                product.push(products[i]);
            }
        }
    }
    return product;
};

const fetchProducts = (cate = 'all') => {
    let productSection = document.querySelector('.product__list');
    let product = getProductFormCate(cate);
    productSection.innerHTML = '';
    for (let i = 0; i < product.length; i++) {
        productSection.innerHTML += `
        <div class="list__card">
            <div class="list__card-top">
                <img src="./assets/img/products/` + product[i].image + `" alt="">
                <ul class="list__card-menu">
                    <li>
                        <i class="fas fa-heart"></i>
                        <p>Add to Wishlist</p>
                    </li>
                    <li>
                        <i class="fas fa-shopping-cart"></i>
                        <p>Add to Card</p>
                    </li>
                    <li>
                        <i class="far fa-eye"></i>
                        <p>Add to Details</p>
                    </li>
                </ul>
            </div>
            <div class="list__card-bottom">
                <div class="prod__name">` + product[i].name + `</div>
                <div class="prod__price">$` + product[i].price + `</div>
                <div class="prod__rate"> ` + ratingProduct(product[i].rating) + `</div>
            </div>
        </div>
        `;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    fetchProducts();
});