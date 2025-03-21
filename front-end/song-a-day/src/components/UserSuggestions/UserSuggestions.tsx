import { useState } from "react";
import styles from "./styles.module.css";

const UserSuggestions = () => {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(songName, artistName);
    setSongName("");
    setArtistName("");
    setSubmitted(true);
  };

  return (
    <div className={styles.UserSuggestions}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h1>Suggest A Song!</h1>
          <input
            type="text"
            placeholder="Song Name"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Artist Name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <p>Thank you for your suggestion!</p>
      )}
    </div>
  );
};

export default UserSuggestions;
