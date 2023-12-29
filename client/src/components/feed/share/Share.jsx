import "./Share.css" 
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LabelIcon from '@material-ui/icons/Label';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
               <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
               <input placeholder="wha's in your mind bro" className="shareInput" />
            </div>
            <hr className="shareHr"/>

            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOPtionText">photo or video </span>
                    </div>
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
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
