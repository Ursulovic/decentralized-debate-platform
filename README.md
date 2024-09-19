# Decentralized Debate Platform

This project is a decentralized debate platform built using Angular for the frontend and Solidity smart contracts deployed on Ethereum for the backend. It allows users to create debates, post replies, and manage profiles, all stored on a decentralized blockchain.

## Features

### 1. **User Profiles**
- Users can create and update profiles, including their username, bio, and profile picture, which are stored on IPFS (InterPlanetary File System).
- Profile data is linked to the user’s Ethereum address, ensuring that the identity is tied to the blockchain.

### 2. **Create Debates**
- Users can create debates on specific topics.
- Each debate consists of a title, topic, and description, all stored on IPFS.
- Debates can be timed (with an expiration date) or timeless, giving flexibility to the type of discussions.
- Smart contracts ensure that debates are properly validated before creation.

### 3. **Post Replies**
- Users can reply to debates by creating posts, with their content stored on IPFS.
- Replies are linked to the debate and timestamped on the blockchain, ensuring the authenticity of participation.
- Users cannot post to expired debates.

### 4. **View Debates and Replies**
- All debates are retrievable from the blockchain.
- Users can view debates along with their replies, ensuring transparency and immutability of the discussion.

### 5. **Blockchain Integration**
- The platform uses the Ethereum blockchain for storing debate metadata and managing interactions.
- All content (profile data, debate descriptions, post contents) is stored on IPFS, ensuring decentralized storage.
- The platform integrates with MetaMask for user authentication and transaction signing.

## Technologies Used
- **Frontend**: Angular
- **Blockchain**: Solidity smart contracts on Ethereum
- **Decentralized Storage**: IPFS for profile data, debate descriptions, and post contents
- **Ethereum Provider**: Ethers.js

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/decentralized-debate-platform.git
    cd decentralized-debate-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the Angular development server:
    ```bash
    ng serve
    ```

4. Set up your Ethereum provider (MetaMask) to connect to the Sepolia network or another test network.

## Smart Contracts

The smart contracts are written in Solidity and handle:
- Profile management
- Debate creation and storage
- Post replies and debate expiration

To deploy the contracts:
1. Set up a local Ethereum node or use a testnet.
2. Compile and deploy the contracts using Hardhat or Truffle.

---

