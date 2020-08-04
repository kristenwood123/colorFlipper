const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink", "orange", "yellow", "blue", "green", "violet"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})




function getRandomNumber(){
    Math.floor(math.random() * colors.length)
}





