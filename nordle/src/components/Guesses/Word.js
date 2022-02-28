import Letter from './Letter.js'

function Word(props) {
    let letterProps = []

    console.log(props)
    //Define the parts of the letters
    for(let i = 0; i < 5; i++){
        letterProps.push({
            'index':i,
            'word':props.word,
            'letter':props.guess[i],
            'guessed':true,
        });
        console.log(i);
    }

    if(!props.guessed){
        for(let i = 0; i < 5; i++){
            letterProps[i].guessed=false;
        }
    } 
    console.log(letterProps);
    return (<div class="guessrow">
                <Letter word={props.word} guessed={props.guessed} index={0} letter={props.guess[0]}></Letter>
                <Letter word={props.word} guessed={props.guessed} index={1} letter={props.guess[1]}></Letter>
                <Letter word={props.word} guessed={props.guessed} index={2} letter={props.guess[2]}></Letter>
                <Letter word={props.word} guessed={props.guessed} index={3} letter={props.guess[3]}></Letter>
                <Letter word={props.word} guessed={props.guessed} index={4} letter={props.guess[4]}></Letter>
            </div>)
}

export default Word;