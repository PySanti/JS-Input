// names
const containerClass = 'main-input-container__input__content'

// elements
const bodyElement = document.getElementsByTagName('body')[0];
let containerElement = document.getElementsByClassName(containerClass)[0];

// variables
const backSpace = 'Backspace'
const printableLetters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m', 'n', 'o', 
'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x','y','z', 'A', " ", '.', ',', '?', ':', ';', '(', ")", backSpace.toLowerCase()];
const literalWhiteSpace = " ";
const forcedWhiteSpace = "&nbsp;";
let printLettersCount = 0;
let maxPrintableLetters = 25;


function elementInArray(array, element){
    return (array.indexOf(element) !== -1)
}

bodyElement.addEventListener('keydown', function (event){
    if (elementInArray(printableLetters, event.key.toLowerCase())){
        let cursorVisible = cursorElement.classList.contains(cursorAnimationName);
        if (cursorVisible){
            if (event.key !== backSpace){
                if (printLettersCount !== maxPrintableLetters){
                    if (event.key === literalWhiteSpace){
                        containerElement.innerHTML += forcedWhiteSpace;
                    } else {
                        containerElement.innerHTML += event.key;
                    }
                    printLettersCount +=1;
                }
            } else if ((event.key === backSpace) && (containerElement.innerHTML.length > 0)){
                let textLength = containerElement.innerHTML.length;
                let lastTextFragment = containerElement.innerHTML.slice(textLength-6, textLength);
                if (lastTextFragment === forcedWhiteSpace){
                    console.log('forced white space encontrado !!');
                    containerElement.innerHTML = containerElement.innerHTML.slice(0,textLength-6);
                } else {
                    console.log(`last text fragment es ${lastTextFragment}`);
                    containerElement.innerHTML = containerElement.innerHTML.slice(0,-1);
                }
                printLettersCount -=1;
            }
        }
    }
})
