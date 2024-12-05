import LogAsUser from "./log-as.js"
import { useState, useEffect, useRef } from "react";

export default function LogIn (){
    let userLocal = null;
    const [currentUser, setCurrentUser] = useState();
    const [imageSrc, setImageSrc] = useState();
    const imageRef = useRef(userLocal);

    useEffect(() => {
        userLocal = JSON.parse(localStorage.getItem('user'));
        setCurrentUser(userLocal);
        if (currentUser !== null){
            setImageSrc(userLocal.imageUrl);
            //imageSrc = imageRef;
        }
        
    })

    function handleClick(user){
        if (user === false){
            setImageSrc(imageRef);
        } else {
            setImageSrc("./icons/profile-user-svgrepo-com.svg")
        };
    }

    return(
        <>  
            <img id="user" src={imageSrc} onClick = {() => handleClick(userLocal)} alt="user"></img>
            {currentUser && <LogAsUser />}
        </>
    )
}