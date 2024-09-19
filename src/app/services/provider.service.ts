import { Injectable } from '@angular/core';
import { ethers, Contract } from 'ethers';

import { ContractAddress, ContractAbi } from '../../types/ContractData';
import { ProfileData, Debate, DebateWithReplies } from '../../types/ContractModel';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readyPromise: Promise<void>;
  private ETHERSCAN_KEY = 'etherscan_key';
  private signer: any;
  private provider: any;
  private contract: any;

  //ipfs part

  private helia: any;


  constructor() {
    this.readyPromise = this.init();
  }

  private async init() {

    if (window.ethereum == null) {
      alert("Metamask not installed, install metamask and try again!");
      console.log("MetaMask not installed; using read-only defaults");
      this.provider = ethers.getDefaultProvider('sepolia', {
        etherscan: localStorage.getItem(this.ETHERSCAN_KEY),
      });
    } else {
      this.provider = new ethers.BrowserProvider(window.ethereum);
      this.signer = await this.provider.getSigner();
      this.contract = new Contract(ContractAddress, ContractAbi, this.signer);
    }

    this.getAllDebates()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  private async initHelia() {
    // this.helia = await createHelia();
  }

  public setKey(key: string): void {
    localStorage.setItem(this.ETHERSCAN_KEY, key);
  }

  public async setProfileData(username: string, bioHashIpfs: string, profilePictureHashIpfs: string): Promise<void> {
    try {
      if (!this.contract) {
        console.log('Contract not initialized');
        return;
      }
      const tx = await this.contract.setProfileData(username, bioHashIpfs, profilePictureHashIpfs);
      await tx.wait();
      alert("Transaction successful!");
    } catch (error) {
      console.error(error);
    }
  }

  public async getProfileData(): Promise<ProfileData> {
    await this.readyPromise;
    const address = await this.signer.getAddress();
    const profile = await this.contract.profilesData(address);
    return {
      username: profile.username,
      bioHashIpfs: profile.bioHashIpfs,
      profilePictureHashIpfs: profile.profilePictureHashIpfs,
    };
  }

  public async getUsernameForAddress(address: string): Promise<string | null> {
    await this.readyPromise;
    try {
      const profile = await this.contract.profilesData(address);
      return profile.username || null;
    } catch (error) {
      console.error('Error fetching username for address:', error);
      return null;
    }
  }

  public async getProfileDataByAddress(userAddress: string): Promise<ProfileData> {
    await this.readyPromise;
    const profile = await this.contract.profilesData(userAddress);
    return {
      username: profile.username,
      bioHashIpfs: profile.bioHashIpfs,
      profilePictureHashIpfs: profile.profilePictureHashIpfs,
    };
  }

  public async createDebate(title: string, topic: string, descriptionHash: string, isTimed: boolean, expiryTime: number): Promise<number> {
    await this.readyPromise;
    const tx = await this.contract.createNewDebate(title, topic, descriptionHash, isTimed, expiryTime);
    const receipt = await tx.wait();
    const newDebateEvent = this.contract.interface.parseLog(receipt.logs[0]);
    const debateId = newDebateEvent.args.debateId;
    console.log(receipt.logs);
    console.log(`debateId: ${debateId}`);
    return debateId;
  }

  public async getAllDebates(): Promise<Debate[]> {
    await this.readyPromise;
    return await this.contract.getAllDebates();
  }

  public async getDebateWithReplies(debateId: number): Promise<DebateWithReplies | null> {
    await this.readyPromise;
    try {
      const debate = await this.contract.allDebates(debateId);
      const posts = await this.contract.getPostsForDebate(debateId);
      const debateWithReplies: DebateWithReplies = {
        debate: {
          debateId: debate.debateId,
          creator: debate.creator,
          postIdTracker: debate.postIdTracker[0],
          title: debate.title,
          topic: debate.topic,
          descriptionHashIpfs: debate.descriptionHashIpfs,
        },
        replies: posts.map((post: any) => ({
          postId: post.postId,
          creator: post.creator,
          timeOfCreation: Number(post.timeOfCreation) * 1000,
          contentHashIpfs: post.contentHashIpfs,
        })),
      };
      return debateWithReplies;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async createNewReply(debateId: number, contentHashIpfs: string): Promise<void> {
    await this.readyPromise;
    try {
      if (!this.contract) {
        throw new Error('Contract is not initialized');
      }
      const tx = await this.contract.createNewPost(debateId, contentHashIpfs);
      await tx.wait();
      alert("New reply transaction successful!");
    } catch (error) {
      console.error('Error creating new reply:', error);
      alert("Error creating new reply. See console for details.");
      throw error;
    }
  }
}
