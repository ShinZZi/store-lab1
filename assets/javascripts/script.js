let tags = document.querySelectorAll('.header__tags-item');
let rating = document.querySelectorAll('.prod__rate');
console.log(rating);


const removeActiveTag = () => {
    for (let i = 0; i <= tags.length; i++) {
        if (tags[i].classList.contains('active')) {
            tags[i].classList.remove('active');
            return;
        }
    }
};

tags.forEach((tag) => {
    tag.addEventListener('click', () => {
        removeActiveTag();
        tag.classList.add('active');
    });
});

const ratingProduct = () => {
    for (let i = 0; i < rating.length; i++) {
        let yellowStar = rating[i].innerHTML;
        let blackStar = 5 - yellowStar;
        rating[i].innerHTML = '';

        for (let y = 0; y < yellowStar; y++) {
            rating[i].innerHTML += `<i class="fas fa-star"></i>`;
        }
        for (let y = 0; y < blackStar; y++) {
            rating[i].innerHTML += `<i class="far fa-star"></i>`;
        }
    }
};

ratingProduct();