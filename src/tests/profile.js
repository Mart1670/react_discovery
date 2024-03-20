import Community from "./community.js"

let content;
let isLoggedIn = false;

function Profile () {
    if (isLoggedIn){
        content = 
            <div className = "sub-profiles">
                <Community />
            </div>
    } else {
        content = 
            <>
                <div className = "hidden-content"></div>
                <div className = "sub-profiles">
                    <Community />
                </div>
            </>
    }
    return (
        <div id="profiles">
            {content}
        </div>
    )
};

export default Profile