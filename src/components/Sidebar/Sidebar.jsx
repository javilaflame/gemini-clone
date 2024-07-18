import React, { useContext, useState } from 'react'
import menu_icon from "../../assets/menu_icon.png"
import plus_icon from "../../assets/plus_icon.png"
import message_icon from "../../assets/message_icon.png"
import question_icon from "../../assets/question_icon.png"
import history_icon from "../../assets/history_icon.png"
import setting_icon from "../../assets/setting_icon.png"
import x_icon from "../../assets/simbolo-x.png"

import "./sidebar.css"
import { Context } from '../../context/Context'

function Sidebar() {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' src={extended ? x_icon : menu_icon} alt="" onClick={(x) => setExtended(x => !x)} />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={plus_icon} alt="" srcset="" />
                    {extended ? (<p>New Chat</p>) : null}
                </div>
                {extended ? (<div className='recent'>

                    <p className='recent-title'>Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                                <img src={message_icon} alt="" />
                                <p>{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}
                </div>) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={question_icon} alt="" />
                    {extended ? (<p>Help</p>) : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={history_icon} alt="" />
                    {extended ? (<p>Activity</p>) : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={setting_icon} alt="" />
                    {extended ? (<p>Settings</p>) : null}

                </div>
            </div>
        </div>
    )
}

export default Sidebar