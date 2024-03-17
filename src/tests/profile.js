import ListUsers from "./listUsers.js"

let content;
let isLoggedIn = false;

function Profile () {
    if (isLoggedIn){
        content = 
            <div className = "sub-profiles">
                <ListUsers />
            </div>
    } else {
        content = <>
            <div className = "hidden-content"></div>
            <div className = "sub-profiles">
                <ListUsers />
            </div>
        </>
    }
    return (
        <div className = "profiles" id="profiles">
            {content}
        </div>
    )
};

export default Profile