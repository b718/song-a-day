import styles from "./styles.module.css";

const DisplaySongLinks = () => {
  const links = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/track/1234567890",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/track/1234567890",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/watch?v=1234567890",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/1234567890",
    },
  ];

  return (
    <div className={styles.DisplaySongLinks}>
      {links.map((link) => (
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DisplaySongLinks;
