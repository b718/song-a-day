export interface UserVoteTitles {
  title: string;
  positiveVote: string;
  negativeVote: string;
}

const userVoteTitles: UserVoteTitles[] = [
  {
    title: "Ass or gas?",
    positiveVote: "Ass",
    negativeVote: "Gas",
  },
  {
    title: "Mid or lit?",
    positiveVote: "Mid",
    negativeVote: "Lit",
  },
  {
    title: "Hit or miss?",
    positiveVote: "Hit",
    negativeVote: "Miss",
  },
];

export const getRandomUserVoteTitle = () => {
  return userVoteTitles[Math.floor(Math.random() * userVoteTitles.length)];
};
