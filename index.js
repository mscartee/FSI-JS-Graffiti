
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign="left"
let dogImages = document.querySelectorAll('.dog-image')
for (let i=0; i<dogImages.length; i++){
    dogImages[i].style.border='5px SOLID #555'
}
let dogName= document.querySelectorAll('.dog-name')
for (let i=0; i<dogName.length; i++){
    dogName[i].style.textAlign="left"
}
