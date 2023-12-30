import "./Topbar.css"
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
         <Link to= "/" style={{textDecoration:"none"}}>
            <span className="logo">Abdisocial</span>
         </Link>
         
          </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
          </div>

        <div className="topbarRight">
           <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
           </div>
           <div className="topbarIcons">
                <div className="topbarIconsItem"> <PersonIcon/> 
                   <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconsItem"> <ChatIcon/> 
                   <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconsItem"> <NotificationsIcon/> 
                   <span className="topbarIconBadge">1</span>
                </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
              
       </div>

    </div>
  )
}
