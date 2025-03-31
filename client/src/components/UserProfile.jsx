function UserProfile(props) {
  return (
    <>
      <p>Hi {props.name}, welcome to the profile section </p>
      <button type="button" onClick={props.onClick}>
        Logout
      </button>
    </>
  );
}

export default UserProfile;
