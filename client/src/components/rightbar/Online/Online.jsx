import "./Online.css"

export default function Online({user}) {
    console.log(user)
  return (
    <li className="rightBarFriend">
        <div className="rightbarProfileImgContainer">
            <img src= {user.profilePicture} className="rightbarProfileImg" alt="" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
  </li>

  )
}
