// remove buttons

let rmvBtns = document.querySelectorAll('.delete')
console.log(rmvBtns)
for(let i=0; i< rmvBtns.length; i++) {
    rmvBtns[i].addEventListener('click', function(){
        rmvBtns[i].parentNode.remove()
        totalPrice()
    })
}

//like buttons

let likes = document.querySelectorAll('.fa-heart')
console.log(likes)
for(let i=0; i< likes.length; i++) {
    likes[i].addEventListener('click', function(){
        if (likes[i].style.color === "rgb(158, 158, 158)")
        {likes[i].style.color = "red"}
        else{
            likes[i].style.color = "rgb(158, 158, 158)"

        }
    })
    
}

//minus buttons

let minusBtns = document.querySelectorAll('.minus-btn')
console.log(minusBtns)
for(let i=0; i< minusBtns.length; i++){
    minusBtns[i].addEventListener('click', function(){
        if (minusBtns[i].nextElementSibling.value > 1){
            minusBtns[i].nextElementSibling.value-- 
            totalPrice()
        }
    })
}

//plus buttons
let plusBtns = document.querySelectorAll('.plus-btn')
console.log(plusBtns)
for(let i=0; i< plusBtns.length; i++){
    plusBtns[i].addEventListener('click', function(){
        plusBtns[i].previousElementSibling.value++
        totalPrice()
    })
}

// Total price


function totalPrice(){
    let sum = 0
    let Qts = document.querySelectorAll('.QNT')
     let Prices = document.querySelectorAll('.price')

    for (let i = 0; i < Qts.length; i++) {
        sum = sum + Qts[i].value * Prices[i].innerHTML
    }
    document.querySelector('#finalPrice').value = sum 
}




