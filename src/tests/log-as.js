import users from "./users";
import LogIn from "./log-button.js"
import setUser from "./../App.js"


function LogAs(user){
    localStorage.setItem('user', JSON.stringify(user));
}

const logAs = users.map(user =>
    <>
        <div key={user.id} onClick={() => LogAs(user)}>
            <img
                key={user._id}
                src={user.imageUrl}
                alt={user.name}
            />
            <p>{user.name}</p>
        </div>
    </>
    )

export default function LogAsUser(){
    return(
        <div id="user-list">
            {logAs}
        </div>
    )
}