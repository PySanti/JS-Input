// names
const containerClass = 'main-input-container__input__content'

// elements
const bodyElement = document.getElementsByTagName('body')[0];
let containerElement = document.getElementsByClassName(containerClass)[0];

// variables
const backSpace = 'Backspace'
const printableLetters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x','y','z', 'A', " ", '.', ',', '?', ':', ';', '(', ")", backSpace.toLowerCase()];
const whiteSpace = " ";
let printLettersCount = 0;
let maxPrintableLetters = 25;


function elementInArray(array, element){
    return (array.indexOf(element) !== -1)
}

bodyElement.addEventListener('keydown', function (event){
    if (elementInArray(printableLetters, event.key.toLowerCase())){
        let cursorVisible = cursorElement.classList.contains(cursorAnimationName);
        if (cursorVisible){
            if ((event.key !== backSpace)){
                if (printLettersCount !== maxPrintableLetters){
                    if (event.key === whiteSpace){
                        containerElement.innerHTML += "&nbsp";
                    } else {
                        containerElement.innerHTML += event.key;
                        printLettersCount +=1;
                    }
                }
            } else if (containerElement.innerHTML.length > 0){
                let textLenght = containerElement.innerHTML.length;
                console.log(containerElement.innerHTML.slice(0, textLenght-4));
                if (containerElement.innerHTML.slice(0,textLenght-4) === "&nbsp"){
                    containerElement.innerHTML = containerElement.innerHTML.slice(0,-4);
                } else {
                    containerElement.innerHTML = containerElement.innerHTML.slice(0,-1);
                }
                printLettersCount -=1;
            }
        } else{
            console.log("Hola")
        }
    }

})
