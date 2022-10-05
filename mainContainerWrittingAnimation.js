// names
const mainContainerAnimationClassName = 'main-input-container-writting-animation'
const writtingBallsContainerClassName = 'writting-balls-container'
const writtingBallClassName = 'writting-ball'
const mainContainerPositionObj = mainContainerElement.getBoundingClientRect();

// elements
const writtingBallsContainer = document.getElementsByClassName(writtingBallsContainerClassName)[0];

// variables
let writtingBallsList = []


class WrittingBalls{
    constructor(newElementClassName, newElementContainer, mainContainerPositionObj){
        this.element = generateWrittingBall(newElementClassName, newElementContainer, mainContainerPositionObj)
        this.position = [selfPositionElement.x, selfPositionElement.y]
        this.move = generateRandomMove()
    }

    update(){
        let positionalElement = this.positionElement()
        positionalElement.x += this.move[0]
        positionalElement.y += this.move[1]
    }

    positionElement(){
        return this.element.getBoundingClientRect();
    }
}

function generateRandomMove(){
    return [Math.random()*10,Math.random()*10];
}

function updateElements(writtingElementsList){
    writtingElementsList.forEach((element) => {
        element.update()
    });
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
function generateRandomColor(){
    return undefined;
}


bodyElement.addEventListener('keydown', function (event) {
    if (cursorElement.classList.contains(cursorAnimationName)){
        mainContainerElement.classList.add(mainContainerAnimationClassName)
        setTimeout(function (){
            mainContainerElement.classList.remove(mainContainerAnimationClassName);
        },50)
    let newWrittigBall = new WrittingBalls(writtingBallClassName, writtingBallsContainer, mainContainerPositionObj);
    writtingBallsList.push(newWrittigBall);

    }
})

setInterval(() => {
    updateElements(writtingBallsList)
console.log("Hola")
}, 50);