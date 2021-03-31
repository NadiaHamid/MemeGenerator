//document.getElementById("form").onsubmit = function() {generateImage()}

//function generateImage() {
//    var number = ;
//    'console.log(document.getElementById("number"))'

//}

window.onload = function() {
    const queryString = window.location.search;
    const urlparams = new URLSearchParams(queryString);
    const number = urlparams.get('number');
    console.log(number);
    if (number == "1" || number == "2" || number == "3"|| number == "4"|| number == "5"|| number == "6"|| number == "7"|| number == "8"|| number == "9"|| number == "10") {
        let img = document.createElement('img');
        img.src = "imgs/" + number + ".jpg"
        img.style = "margin: auto;max-height:400px"
        document.getElementById('replace').replaceWith(img);
    }
    
}

