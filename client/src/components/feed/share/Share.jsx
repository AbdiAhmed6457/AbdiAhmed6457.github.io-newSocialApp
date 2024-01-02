import "./Share.css" 
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LabelIcon from '@material-ui/icons/Label';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {AuthContext} from '../../../context/AuthContext'
import { useContext, useRef, useState } from "react";
import axios from "axios"

export default function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef()
    const [file, setFile] = useState(null);

     const submitHandler = async (e) => {

        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name;
            data.append("file", file)
            data.append("name", filename)
            newPost.img = filename; 
              try {
                await axios.post("/upload", data )
              } catch (error) {
                console.log(error)
              }
        }
        try {
            await axios.post("/posts", newPost)
        } catch (error) {
            
        }
     }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
               <img src= {user.profilepicture ? PF + user.profilepicture : PF + "person/noAvatar.png"} className="shareProfileImg" alt="" />
               <input
                placeholder={"what's in your mind " + user.username + "?"}
                 className="shareInput"
                 ref={desc} 
                 />
            </div>
            <hr className="shareHr"/>

            <form className="shareBottom"  onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOPtionText">photo or video </span>
                        <input style={{display: "none"}} type="file" id="file" accept=".png, .jpeg, .png" onChange={(e) => setFile(e.files[0])} />
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOPtionText">Tags </span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOPtionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOPtionText">Feelings </span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}
