import React, { useContext, useRef } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import main from "../../config/gemini";

const Main = () => {
  const inputRef = useRef();

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async () => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);

      const response = await main(input);
      let responseArray = response.split("**");
      let newResponse;
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("<br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }
      setLoading(false);
      setInput("");
      inputRef.current.focus();
      setShowResult(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };
  const {
    recentPrompt,
    showResult,
    setRecentPrompt,

    loading,
    resultData,
    setInput,
    input,
    setResultData,
    setLoading,
    setShowResult,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing eselfj
                </p>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              ref={inputRef}
              onKeyDown={handleEnter}
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
