function AnotherButton() {
    function handleClick(){
        alert('You should loggin first !')
    }
    return (
        <button className="p-2 max-w-sm mx-auto bg-grey font-bold rounded-xl " onClick = {handleClick}>
            Watch the Community members
        </button>
    );
}


export default AnotherButton