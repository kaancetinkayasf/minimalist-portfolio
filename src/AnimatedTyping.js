import Typing from 'react-typing-animation';

function AnimatedTyping(props){
    return(
    <Typing>
        <Typing.Speed ms={50} />
        <h1>{props.message}</h1>
    </Typing>
    )
}

export default AnimatedTyping;

