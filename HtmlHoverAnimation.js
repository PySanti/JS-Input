// names
const initialMsgContainerName = 'main-input-container__initial-msg';
const cursorElementName = 'main-input-container__input__cursor';
const cursorAnimationName = 'cursorAnimationAsignment';
const initialMsgAnimationName = 'initial-msg-remove-animation'
const initialMsgButtonName = "main-input-container__initial-msg__button"
const mainContainerClassName = "main-input-container";

// elements

const cursorElement = document.getElementsByClassName(cursorElementName)[0];
const initialMsgContainer = document.getElementsByClassName(initialMsgContainerName)[0];
const initialMsgButtonElement = document.getElementsByClassName(initialMsgButtonName)[0];
const mainContainerElement = document.getElementsByClassName(mainContainerClassName)[0];
const HTMLelement = document.getElementsByTagName('HTML')[0];

initialMsgButtonElement.addEventListener('click', function (eventObject){
    initialMsgContainer.classList.add(initialMsgAnimationName);
    cursorElement.classList.add(cursorAnimationName);
})
mainContainerElement.addEventListener('mouseout', function (eventObject){
    console.log("Hola");
    if (printLettersCount ===0){
        cursorElement.classList.remove(cursorAnimationName);
        initialMsgContainer.classList.remove(initialMsgAnimationName);
    } 
})