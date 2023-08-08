const productId = window.location.hash.substring(1)
const reviewStore = [
    {
        id:1,
        name: "Андрій",
        text: "Дякую велике і за швидку доставку та відмінний товар !!! Дуже приємна покупка"
    },
    {
        id:2,
        name: "Анастасія",
        text: "Чудові кросівки, зручні, легкі, якісні, красиві!"
    },
]

const reviewsEl = document.querySelector('#reviews')

const renderReviews = (stote) => {
    stote.forEach(reviews => {
        reviewsEl.innerHTML += `
        <div class="UserBlock1">
            <img class="profile" src="./profile-default-svgrepo-com 1.svg">
            <p class="UserName">${reviews.name}</p>
             <p class="UserText">${reviews.text}</p>
        </div>
        `
    })
}

renderReviews(reviewStore)

const imgStore = ['Foto.svg', 'nike.png', 'foto2.png']

const sliderImgEl = document.querySelector('.sliderImg')
const sliderBtns = {
    prev: document.querySelector('#btnPrev'),
    next: document.querySelector('#btnNext')
}

let setImage = () => {
    sliderImgEl.src = `./img/${imgStore[imgNow]}`
}

let imgNow = 0
setImage()

sliderBtns.next.addEventListener('click', () => {
     if (imgNow < imgStore.length-1) {
        imgNow += 1
    } else {
        imgNow = 0
    }
    setImage()
})

sliderBtns.prev.addEventListener('click', () => {
    if (imgNow == 0) {
        imgNow = imgStore.length - 1
    } else {
        imgNow -= 1 
    }
    setImage()
})

console.log(window.location)
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    window.location.href = `http://127.0.0.1:5501/product-characteristic/form/form.html#${productId}`
    console.log(productId)
})



let getReviewList
let reviews = []
const renderReviewList = () => {
    reviewsEl.innerHTML = ""
    reviews.forEach((review) => {
        reviewsEl.innerHTML += `
        <div class="UserBlock2">
            <img class="profile" src="./profile-default-svgrepo-com 1.svg">
            <p class="UserName">${review.name}</p>
        <p class="UserText">${review.text}</p>
        </div>
        `
    })
    
}

const getReviewsList = () => {
    axios.get(`http://localhost:4000/reviews/list?idProduct=${productId}`)
        .then((res) => {
            reviews = [
                ...res.data
            ]
            getReviewList = res.data
            renderReviewList()
        })
}

getReviewsList()