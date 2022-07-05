import { Link } from "react-router-dom";

export default function CheckLoginPage(props) {
  if (props.username === "") {
    return (
      <div style={{ marginTop: "10%" }}>
        <p>
          You are not logged in, either <Link to="/login">LOGIN</Link> or{" "}
          <Link to="/signup">SIGN UP</Link> to enter your Car Mx App.
        </p>
      </div>
    );
  }
  return <div>{props.actualPage()}</div>;
}
