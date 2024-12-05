import users from "./users.js"
import Banner from "./banner.js"


const community = users.map(user => 
    <>
        <div key={user._id} className = "each-profile">
            <Banner props={user}/>
            <img
                className="avatar" 
                src={user.imageUrl}
                alt={user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <h2>{user.name}</h2>
            <p>{user.activity}</p>
        </div>
    </>
);

export default function Community(){
    return (
        <>
            {community}
        </>
    )
};