import './Letter.css'
function Letter(props) {
    //props guessed, index, word, letter
    console.log(props)
    console.log(props.guessed)
    console.log(props['guessed'])
    if(!props.letter)
        return <p className='notGuessed'></p>
    if(!props.guessed){
        console.log("Not guessed")
        return <p className='notGuessed'>{props.letter}</p>
    }
    if(props.word[props.index]==props.letter){
        console.log("Correct")  
        return <p class='correct'>{props.letter}</p>}
    else if(props.word.includes(props.letter)){
        console.log("Included")
        return <p class='included'>{props.letter}</p>}
    else{
        console.log("Wrong")
        return <p class='wrong'>{props.letter}</p>}

    return <p>Hmmm something wrong</p>
};

export default Letter;