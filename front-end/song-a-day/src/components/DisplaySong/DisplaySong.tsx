import DisplaySongLinks from "./components/DisplaySongLinks/DisplaySongLinks";
import styles from "./styles.module.css";

const DisplaySong = () => {
  const songUrl = "https://www.youtube.com/watch?v=eizDlMTanE4";

  const SongTitle = (title: string) => {
    return <h1 className={styles.SongTitle}>{title}</h1>;
  };

  const SongVideo = (videoUrl: string) => {
    const embedUrl = videoUrl.replace("watch?v=", "embed/");
    return (
      <iframe
        width="400px"
        height="200px"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  };

  return (
    <div className={styles.DisplaySongBox}>
      {SongTitle("Song Title")}
      {SongVideo(songUrl)}
      <DisplaySongLinks />
    </div>
  );
};

export default DisplaySong;
