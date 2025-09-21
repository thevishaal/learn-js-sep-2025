const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// buttons.forEach( function (button) {
//     button.addEventListener('click',function(e){
//         if (e.target.id === 'gray') {
//             body.style.backgroundColor = e.target.id 
//         } else if (e.target.id === 'orange') {
//             body.style.backgroundColor = e.target.id 
//         } else if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id 
//         } else if (e.target.id === 'pink') {
//             body.style.backgroundColor = e.target.id 
//         } else if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id 
//         }
//     })
// } )   

buttons.forEach ( (button) => {
    button.addEventListener('click',(e) => {
        const color = e.target.id
        switch (color) {
            case 'gray': 
                body.style.backgroundColor = e.target.id
                break;
            case 'orange': 
                body.style.backgroundColor = e.target.id
                break;
            case 'pink': 
                body.style.backgroundColor = e.target.id
                break;
            case 'blue': 
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow': 
                body.style.backgroundColor = e.target.id
                break;
            default:
                body.style.backgroundColor = 'white'
        }
    })
} )
