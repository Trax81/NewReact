function User({id, name, email, username}) {
    return (
    <div style={{ border: `2px solid black` }} key={user.id}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
          </div>
    );
}
export default User;