const user = {
    name: "Cool-Guy",
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/16/12/51/man-2647703_1280.jpg",
    imageSize: 90
};

export default function Profile(){
    return (
        <>
            <h2>{user.name}</h2>
            <img 
                className="avatar" 
                src={user.imageUrl}
                alt={'Photo of '+ user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize,
                    objectFit: 'cover'
                }}
            />
        </>
    )
};