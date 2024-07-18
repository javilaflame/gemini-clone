import React, { useContext } from 'react'
import "./main.css"
import user_icon from "../../assets/user_icon.png"
import compass_icon from "../../assets/compass_icon.png"
import bulb_icon from "../../assets/bulb_icon.png"
import message_icon from "../../assets/message_icon.png"
import code_icon from "../../assets/code_icon.png"
import gallery_icon from "../../assets/gallery_icon.png"
import mic_icon from "../../assets/mic_icon.png"
import send_icon from "../../assets/send_icon.png"
import gemini_icon from "../../assets/gemini_icon.png"
import { Context } from '../../context/Context'

function Main() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help u today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <img src={compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning.</p>
                <img src={bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bounding activities for our work retreat.</p>
                <img src={message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code...</p>
                <img src={code_icon} alt="" />
              </div>
            </div>
          </>
          : <div className='result'>
              <div className="result-title">
                <img src={user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={gemini_icon} alt="" />
                {loading ? <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              </div>
            </div> }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here...' />
            <div>
              <img src={gallery_icon} alt="" />
              <img src={mic_icon} alt="" />
              {input ? <img onClick={() => onSent()} src={send_icon} alt="" /> : null }
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display innacurate info, including about people, so double check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main