import users from "./users.js"

const listUsers = users.map((user) => 
    <>
        <div className = "each-profile">
            <div className = "profile-banner"></div>
            <img
                className="avatar" 
                src={user.imageUrl}
                alt={user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize,
                    objectFit: 'cover'
                }}
            />
            <h2>{user.name}</h2>
            <p>{user.activity}</p>
        </div>
    </>
);

export default function Profile(){
    return (
        <>
            <div className = "profiles">
                {listUsers}
            </div>
        </>
    )
};