import React from "react";
import ExtensionInList from "../assets/images/Extension_In_List.jpg";
import ClickOnReplyButton from "../assets/images/Click_On_Reply_Button.jpg";
import AIBtnOptions from "../assets/images/AI_Btn_Options.jpg";
import ToneSelectionOptions from "../assets/images/Tone_Selection_Options.jpg";
import AIGeneratedResponse from "../assets/images/AI_Generated_Response.jpg";

const ScreenSection = () => {
  return (
    <>
      <div className="product-detail-container">
        <div className="screenshoot">
          <p className="ss-text">
            1. Pin AI Email Writer Chrome Extension in chrome browser.
          </p>
          <img
            className="ss-img"
            src={ExtensionInList}
            alt="Extension In List"
          />
        </div>
        <div className="screenshoot right-side">
          <p className="ss-text">
            2. Now just open the mail you want to reply and click on the Reply
            button.
          </p>
          <img
            className="ss-img"
            src={ClickOnReplyButton}
            alt="Click On Reply Button"
          />
        </div>
        <div className="screenshoot">
          <p className="ss-text">
            3. Walaa! now you have generate AI reply button and Tone selection.
          </p>
          <img className="ss-img" src={AIBtnOptions} alt="AI Button Options" />
        </div>
        <div className="screenshoot right-side">
          <p className="ss-text">
            4. Using Tone selection you can select the tone of the reply you
            want to generate.
          </p>
          <img
            className="ss-img"
            src={ToneSelectionOptions}
            alt="Tone Selection Options"
          />
        </div>
        <div className="screenshoot">
          <p className="ss-text">
            5. Daaammm!! you have generated reply using AI boom...
          </p>
          <img
            className="ss-img"
            src={AIGeneratedResponse}
            alt="AI Generated Response"
          />
        </div>
      </div>
    </>
  );
};

export default ScreenSection;
