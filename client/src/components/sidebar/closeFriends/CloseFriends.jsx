import './CloseFriends.css'

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
        <img src= {user.profilePicture} className="sidebarFriendImg" alt="" />
        <span className="sidebarFriendName"> {user.username}</span>
     </li>
  )
}
