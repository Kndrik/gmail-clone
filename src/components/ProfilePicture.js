const ProfilePicture = (props) => {
    return (
        <button onClick={props.clickEvent} className="profilePictureButton">
            <div className="profilePictureContainer">
                <img src={props.image} alt="profile picture"/>
            </div>
        </button>
    );
};

export default ProfilePicture;