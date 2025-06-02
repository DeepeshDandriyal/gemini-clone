import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import main from "../../config/gemini";

const Main = () => {
  const onSent = async () => {
    try {
      await main(input);
    } catch (err) {
      console.log(err.message);
    }
  };
  const { recentPromt, showResult, loading, resultData, setInput, input } =
    useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Deepesh</span>
          </p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing eselfj</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem, ipsum. Lorem ipsum dolor sit amet consectetur.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={onSent} />
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            aliquam pariatur reiciendis voluptatum nostrum harum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
