export interface ProfileData {
  username: string,
  bioHashIpfs: string,
  profilePictureHashIpfs: string
}

export interface Debate {
  debateId: number;
  creator: string; // Ethereum address is represented as string in web3.js/ethers.js
  postIdTracker: number;
  title: string;
  topic: string;
  descriptionHashIpfs: string;
}

export interface Post {
  postId: number;
  creator: string; // Assuming the Ethereum address is represented as a string
  timeOfCreation: number; // Assuming this is a Unix timestamp
  contentHashIpfs: string;
}

export interface DebateWithReplies {
  debate: Debate;
  replies: Post[];
}



