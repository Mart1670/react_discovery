let content;

function Banner (user) {
    if(user.id === 12) {
        console.log(isNaN(user.id));
        content = <div className = "profile-banner current-user"></div>
    } else {
        content = <div className = "profile-banner other-users"></div>
    }
    return (
        <>
            {content}
        </>
    );
};

export default Banner