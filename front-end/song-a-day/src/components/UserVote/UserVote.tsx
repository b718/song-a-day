import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getRandomUserVoteTitle, UserVoteTitles } from "./utilities/utilites";

const UserVote = () => {
  const [userVoteObject] = useState<UserVoteTitles>(getRandomUserVoteTitle());
  const [vote, setVote] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const handleVote = (vote: string) => {
    setVote(vote);
  };

  const VoteButton = ({ vote }: { vote: string }) => {
    if (!vote) return null;

    return (
      <button
        className={styles.UserVoteButton}
        onClick={() => handleVote(vote)}
      >
        {vote}
      </button>
    );
  };

  useEffect(() => {
    if (vote) {
      setSubmitted(true);
    }
  }, [vote]);

  return (
    <div className={styles.UserVote}>
      <h1>{userVoteObject.title}</h1>
      {!submitted ? (
        <div className={styles.UserVoteButtons}>
          <VoteButton vote={userVoteObject.positiveVote} />
          <VoteButton vote={userVoteObject.negativeVote} />
        </div>
      ) : (
        <p>Thank you for your vote!</p>
      )}
    </div>
  );
};

export default UserVote;
