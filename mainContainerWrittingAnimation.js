// names
const mainContainerAnimationClassName = 'main-input-container-writting-animation'
const writtingBallsContainerClassName = 'writting-balls-container'
const writtingBallClassName = 'writting-ball'
const mainContainerPositionObj = mainContainerElement.getBoundingClientRect();

// elements
const writtingBallsContainer = document.getElementsByClassName(writtingBallsContainerClassName)[0];

// variables
let writtingBallsList = []
const writtingBallsMinimizationFactor = 0.4;


function generateRandomMove(){
    let multiplicationFactor = 30
    let newMove = [0,0];
    for (let i = 0; i < 2; i++){
        newMove[i] = (Math.random()*multiplicationFactor) - (multiplicationFactor/5);
    }
    return newMove;
}

function generateMoveVariation(){
    let multiplicationFactor = 5
    let newMove = [0,0];
    for (let i = 0; i < 2; i++){
        newMove[i] = (Math.random()*multiplicationFactor) - (multiplicationFactor/1.5);
    }
    return newMove;
}

function updateElements(writtingElementsList, minimizationFactor, elementsHtmlContainer){
    let iterableList = writtingElementsList.map(function (element){
        return element;
    })
    iterableList.forEach((element) => {
        element.update(minimizationFactor)
        if ((element.size[0] <= 0) || (element.size[1] <= 0)){
            removeHtmlElement(elementsHtmlContainer, element.element);
            removeListElement(writtingBallsList, element)
        }
    });
}

function removeListElement(list, element){
    list.splice(list.indexOf(element), 1);
}

function removeHtmlElement(containerElement, htmlElement){
    containerElement.removeChild(htmlElement);
}


function generateWrittingBall(newElementClassName, newElementContainer, mainContainerPositionObj){
    // Esta funcion genera el elemento en HTML y lo retorna, la idea es tomar este elemento y asignarlo en un objeto
    let newElement = document.createElement('DIV');
    newElement.classList.add(newElementClassName);
    newElementContainer.appendChild(newElement)
    newElement.style.top = `${mainContainerPositionObj.y + (mainContainerPositionObj.height/2)}px`
    newElement.style.left = `${mainContainerPositionObj.x + (mainContainerPositionObj.width/2)}px`
    return newElement;
}
function generateContainerAnimation (containerElement, animationClassName, animationDuration) {
    containerElement.classList.add(animationClassName)
    setTimeout(function (){
        containerElement.classList.remove(animationClassName);
    },animationDuration)  
}
function getCurrentElementPosition(element){
    let currPos = [0,0]
    let currAxi = undefined
    for (let i = 0; i < 2; i++) {
        currAxi = (i === 0) ? element.style.left : element.style.top;
        currPos[i] = Number(currAxi.split('px')[0]);
    }
    return currPos
}


class WrittingBalls{
    constructor(newElementClassName, newElementContainer, mainContainerPositionObj){
        this.element = generateWrittingBall(newElementClassName, newElementContainer, mainContainerPositionObj);
        let selfPositionElement = this.getpositionElement;
        this.position = [selfPositionElement.x, selfPositionElement.y];
        this.size = [selfPositionElement.width, selfPositionElement.height];
        console.log(this.size)
        this.move = generateRandomMove()
    }

    update(minimizationFactor){
        // move
        let currentPos = getCurrentElementPosition(this.element);
        let moveVariation = generateMoveVariation()
        currentPos[0] += this.move[0];
        currentPos[1] += this.move[1];
        this.move[0] += moveVariation[0];
        this.move[1] += moveVariation[1];
        this.element.style.left = `${currentPos[0]}px`;
        this.element.style.top = `${currentPos[1]}px`;

        // size
        this.size[0] -= minimizationFactor;
        this.size[1] -= minimizationFactor;
        this.element.style.width = `${this.size[0]}px`;
        this.element.style.height = `${this.size[1]}px`;
    }


    get getpositionElement(){
        return this.element.getBoundingClientRect();
    }
}




bodyElement.addEventListener('keydown', function (event) {
    if (cursorElement.classList.contains(cursorAnimationName)){
        generateContainerAnimation(mainContainerElement, mainContainerAnimationClassName, 50)
        if (event.key !== backSpace){
            let newWrittigBall = new WrittingBalls(writtingBallClassName, writtingBallsContainer, mainContainerPositionObj);
            writtingBallsList.push(newWrittigBall);
        }
    }
})

setInterval(() => {
    updateElements(writtingBallsList, writtingBallsMinimizationFactor, writtingBallsContainer);
    console.log(`Longitud de el arreglo de bolas ${writtingBallsList.length}`)
}, 30);