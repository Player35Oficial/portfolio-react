import Profile from "./components/Profile";
import "./App.css";
import Links from "./components/Links";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Education from "./components/Education";

function UserProfile() {
  return (
    <div className="App-User">
      <Profile />
      <Links />
      <Technologies />
      <Experiences />
      <Education />
    </div>
  );
}

export default UserProfile;
