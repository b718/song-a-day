import DisplaySong from "./components/DisplaySong/DisplaySong";
import UserSuggestions from "./components/UserSuggestions/UserSuggestions";
import UserVote from "./components/UserVote/UserVote";

function App() {
  return (
    <>
      <DisplaySong />
      <UserVote />
      <UserSuggestions />
    </>
  );
}

export default App;
