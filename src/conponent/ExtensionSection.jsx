import extImg from "../assets/images/ext-img.png";

const ExtensionSection = () => {
  return (
    <div className="extention-img-section">
      <h1 className="extension-title">AI Email Writer Chrome Extension</h1>
      <img className="ext-img" src={extImg} alt="Extension Screenshot" />
      <a
        target="_blank"
        href="https://github.com/TusharSanisare/AI-Email-Writer-Chrome-Extension"
        className="extension-btn"
      >
        Download Extension
      </a>
    </div>
  );
};

export default ExtensionSection;
