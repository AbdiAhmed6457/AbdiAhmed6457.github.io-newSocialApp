import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from "./Online/Online"
// import Profile from "../../pages/profile/Profile"

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
  return (
          <> 
          <div className="birthdayContainer">
            <img src="assets/post/gift.png" className="birthdayImg" alt="" />
            <span className="birthdayText">
            <b>Faysel siefu </b> and <b>other friends</b> have a birthday today
            </span>
        </div>

        <img src="assets/post/ad.png" className="rightbarAd" alt="" />
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
            <span className="righbarInfoKeyValue">Addis Abeba</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">From: </span>
            <span className="righbarInfoKeyValue">Ethiopia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">Relationship: </span>
            <span className="righbarInfoValue">Single</span>
          </div>
         </div>

         <h4 className="rightbarTitle"> User friends</h4>
         <div className="rightbarFollowings">
          <div className="rightFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
          <div className="rightFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ilha Imran</span>
          </div>
         </div>
      </>
    )
  }
  return (
    <div className="rightbar">
       <div className="rightbarWrapper">
         
         {profile ?  <ProfileRightbar/> : <HomeRightbar/>}
       </div>
    </div>
  )
}
