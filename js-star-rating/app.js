//Initial ratings
const ratings = {
    sony: 3.7,
    samsung: 4.8,
    vizio: 5.0,
    panasonic: 2.5,
    phillips: 1.2
}

//Total stars
const totalStars = 5

//Run getRating s when DOM loads
document.addEventListener('DOMContentLoaded', getRatings)

//Form elements
const productSelect = document.getElementById('product-select')
const ratingControl = document.getElementById('rating-control')

//Init product
let product

//Product select change
productSelect.addEventListener('change', (e) => {
    product = e.target.value

    //Enable rating control
    ratingControl.disabled = false
    ratingControl.value = ratings[product]
})

//Rating control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value

    //Make sure 5 or under
    if (rating > 5) {
        alert('Please rate 1 - 5')
        return;
    }

    //Change rating 
    ratings[product] = rating
    getRatings()
})

//Get ratings
function getRatings() {
    for (let rating in ratings) {
        //Get %
        const starPercentage = (ratings[rating] / totalStars) * 100

        //Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage/10 * 10)}%`
        
        //Set width of star-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded

        //Add number rating 
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
    }
}