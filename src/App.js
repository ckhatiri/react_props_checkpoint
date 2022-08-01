import "./App.css";
import Profile from "./Profile/Profile";
import ProfilePhoto from "./Profile/images/profilePhoto.jpeg";

function App() {
  const profile = {
    'fullName':"Khatiri Chahrazad",
    'bio':"I’m a web developer.",
    'profession':"full-stack JS developer"
  }
  const handleName = (e) => {
    e.preventDefault();
    alert(`This is ${profile.fullName} profile`)
}
  return (
    <div className="App">
      <Profile
       profile = {profile}
       handleName ={handleName}
      >
      <img style={{ width: "400px"}} src={ProfilePhoto} alt="profile"/>
      </Profile>
    </div>
  );
}

export default App;
