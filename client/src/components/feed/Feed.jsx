import "./Feed.css"
import Share from "./share/Share"
import Post from "./post/Post"
// import { Posts } from "../../dummyData"
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Feed({username}) {
  const [posts, setPosts] = useState ([]);
  const [text, setText] = useState("")

  useEffect (() => {
     const fetchPosts = async () => {
      const res =  username
      ? await axios.get("/posts/profile/" + username)
     : await axios.get("/posts/timeline/65891c6dc382b866ae459081")

      setPosts(res.data)
     }
         fetchPosts();
  },[username])


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map ((p) => (
          <Post key={p._id} post = {p}/>
            
        ))}
        
      </div>
    </div>
  )
}
