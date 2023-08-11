import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch(props) {

  const clickHandler1 = () => {
    props.handler("Home");
  }

  return (
    <div className="watch">
      <div className="back" onClick={clickHandler1}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=TlEbmg1TGCA"
      />
    </div>
  );
}

