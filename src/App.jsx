import "./App.css";
import avatar from "../public/assets/profile__img.png";
import Atom from "./Atom/Atom";
import slack from "../public/assets/slack.png"
import github from "../public/assets/github.png"
import zuri from "../public/assets/zuri.png"
import ingressive from "../public/assets/ingressive.png"

function App() {
  return (
    <div className="test">
      <div className="avatar-details">
        <img src={avatar} id="profile__img" alt="" />
        <h1 className="avatar-name" id="slack">
          Adetomokun Israel
        </h1>
      </div>
      <div>
        <a href="https://twitter.com/Ilesanmiisrael0">
          <Atom id="twitter" linkName="Twitter Link" />
        </a>
        <a href="https://training.zuri.team/">
          <Atom id="btn__zuri" linkName="Zuri Team" />
        </a>
        <a id="books" href="http://books.zuri.team/">
          <Atom linkName="Zuri Books" />
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Adetomokun_Israel"
          id="book__python"
        >
          <Atom linkName="Python Books" />
        </a>

        <a href="https://background.zuri.team/" id="pitch">
          <Atom linkName="Background Check for Coders" />
        </a>
        <a href="https://books.zuri.team/design-rules" id="book__design">
          <Atom linkName="Design Books" />
        </a>
      </div>
      <div className="socials">
        <a href="https://slack.com/Adetomokun_Israel">
          {" "}
          <img src={slack} alt="slack" />
        </a>
        <a href="https://github.com/Israel-sanmi">
          <img src={github} alt="github" />
        </a>
      </div>
      <hr />
      <div className="zuri">
        <img src={zuri} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="" />
      </div>
    </div>
  );
}

export default App;
