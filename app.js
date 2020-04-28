document.addEventListener('DOMContentLoaded', () => {
     const squares = document.querySelectorAll('.grid div')
     const scroreDisplay = document.querySelector('span')
     const startBtn = document.querySelector('.start')

     const width = 10
     let currentIndex = 0 // first square/div on the grid
     let appleIndex = 0 //first div on grid
     let currentSnake = [2,1,0] // 2 - head, 1 - body, 0 - tail
     let direction = 1
     let score = 0
     let speed = 0.9
     let intervalTime = 0
     let interval = 0


     //game start and reset
     function startGame() {
         currentSnake.forEach(index => squares[index].classList.remove('snake'))
         squares[appleIndex].classList.remove('apple')
         clearInterval(interval)
         score = 0
        //  randomApple()
        direction = 1
        scroreDisplay.innerHTML = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
     }

     //assign keycodes/ navigationof snake
     function control(e) {
         squares[currentIndex].classList.remove('snake')

         if (e.keyCode === 39) {
             direction = 1 //right arrow
         } else if (e.keyCode === 38) {
             direction = -width //up arrow
         } else if (e.keyCode === 37) {
             direction -1 //left arrow
         } else if (e.keyCode === 40) {
             direction = +width // down arrow
         }
     }

     document.addEventListener('keyup', control)
})