// names
const initialMsgContainerName = 'main-input-container__initial-msg';
const cursorElementName = 'main-input-container__input__cursor';
const cursorAnimationName = 'cursorAnimationAsignment';
const initialMsgAnimationName = 'initial-msg-remove-animation'

// elements

const cursorElement = document.getElementsByClassName(cursorElementName)[0];
const htmlElement = document.getElementsByTagName('HTML')[0];
const initialMsgContainer = document.getElementsByClassName(initialMsgContainerName)[0];

htmlElement.addEventListener('click', function (eventObject){
    initialMsgContainer.classList.add(initialMsgAnimationName);
    cursorElement.classList.add(cursorAnimationName);
})
htmlElement.addEventListener('mouseout', function (eventObject){
    console.log(printLettersCount)
    if (printLettersCount ===0){
        cursorElement.classList.remove(cursorAnimationName);
        initialMsgContainer.classList.remove(initialMsgAnimationName);
    } 
})