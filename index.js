// Your Code Here
let userName = window.prompt('Please enter your name:')
let score = 0
let playAgain = true

function playGame(){
    for ( let i = 0; i < questions.length; i++){
        let question = questions[i]
        let answer = window.prompt(question.text)
        if ( answer.toLowerCase() == question.correctAnswer.toLowerCase())
            score += 10
    }

    window.alert(`Your score is: ${score}`)
}

while ( playAgain ){
    playGame()
    let userChoice = window.prompt('Would you like to play again? Answer yes or no.')
    if ( userChoice.toLowerCase() === 'yes')
        playAgain = true
    else {
        playAgain = false
        window.alert('Thanks for playing the game!')
    }
}
