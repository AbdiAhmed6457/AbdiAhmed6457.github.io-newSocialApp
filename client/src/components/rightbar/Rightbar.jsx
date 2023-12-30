import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from "./Online/Online"
// import Profile from "../../pages/profile/Profile"

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
  return (
          <> 
          <div className="birthdayContainer">
            <img src={`${PF}post/gift.png`} className="birthdayImg" alt="" />
            <span className="birthdayText">
            <b>Faysel siefu </b> and <b>other friends</b> have a birthday today
            </span>
        </div>

        <img src={`${PF}post/ad.png`} className = "rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
            { Users.map((u) => (
              <Online key={u.id} user={u}/>
            ))}
        </ul>
      </>
  )
    
   
  }
  const ProfileRightbar = () => {
    return (
      <>
         <h4 className="rightbarTitle"> User Infromation</h4>
         <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">city: </span>
            <span className="righbarInfoKeyValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From: </span>
            <span className="righbarInfoKeyValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship: </span>
            <span className="righbarInfoValue">{user.relationship ===1 ? "Single" :
             user.relationship === 2 ? "Married" : "not spacified" }</span>
          </div>
         </div>

         <h4 className="rightbarTitle"> User friends</h4>
         <div className="rightbarFollowings">
          <div className="rightFollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
         </div>
      </>
    )
  }
  return (
    <div className="rightbar">
       <div className="rightbarWrapper">
         
         {user ?  <ProfileRightbar/> : <HomeRightbar/>}
       </div>
    </div>
  )
}
