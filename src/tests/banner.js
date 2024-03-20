let content;

function Banner (user) {
    if(user.id === "12") {
        content = <div className = "profile-banner current-user"></div>
    } else {
        content = <div className = "profile-banner"></div>
    }
    return (
        <>
            {content}
        </>
    );
};

export default Banner