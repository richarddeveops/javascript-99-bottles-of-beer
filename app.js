for(let b= 99; b>=1; b--){
    let show = document.getElementById('display')
    show.innerHTML += `<p style="margin: 20px; color: beige;"> ${b} bottles of beer on the wall, ${b} bottles of beer. Take one down and pass it around, ${b - 1} bottles of beer on the wall.</p>`
} 
let play = document.getElementById('play')
play.innerHTML += `<p style="margin: 20px; color: beige;">No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</p>`