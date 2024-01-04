import './Post.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import { Users } from '../../../dummyData';
import { useState, useEffect, useContext} from 'react';
import axios from 'axios'
import { format, render, cancel, register } from 'timeago.js';
import { render as timeAgoRender } from 'timeago.js';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../context/AuthContext'


export default function Post( {post}) {
    // console.log(post)
    const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

     useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
      }, [currentUser._id, post.likes]);
    
      useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?userId=${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);
    
      const likeHandler = () => {
        try {
          axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };


   
  return (

    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to = {`profile/${user.username}`}>
                      <img className='postProfileImg' src= {user.profilepicture ? PF + user.profilepicture : PF+"person/noAvatar.png"} alt="" />
                    </Link>
                   <span className="postUsername">{user.username}</span>
                   <span className="postDate">{format(post.createdAt)}</span>
                </div>
                
                <div className="postTopRight">
                    <MoreVertIcon/>      
                    
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img src= {PF + "/post/" + post.img} alt="" className='postImg' />
                
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={ likeHandler  } className='likeIcon'  src= {`${PF}post/like.png`} alt="" />
                    <img  onClick={likeHandler} className='likeIcon' src={`${PF}post/heart.png`} alt="" />
                    <span className="postLikeCounter">{like} liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post?.comment}</span>
                </div>
            </div>
        </div>      
    </div>
  )
}
