// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/utils/Counters.sol";


contract Debate2 {
    
    using Counters for Counters.Counter;


    //structs
    struct Profile {
        string username;
        string bioHashIpfs; //ipfs hash
        string profilePictureHashIpfs; // ipfshash
    }

    struct Debate {
        uint256 debateId;
        address creator;
        Counters.Counter postIdTracker;
        string title;
        string topic;
        string descriptionHashIpfs; //ipfsHash
    }

    struct Post {
        uint256 postId;
        address creator;
        uint256 timeOfCreation;
        string contentHashIpfs;
    }

    //PROFILE VARIABLES

    mapping(address => Profile) public profilesData;

    //DEBATE VARIABLES

    //used for id tracking
    Counters.Counter public debateTrack;

    //mapping containing all debates;
    mapping(uint256 => Debate) public allDebates;

    //mapping containing expiration dates of debates (if present)
    //debateId => expiration date
    mapping(uint256 => uint256) public debatesExpirationDate;

    //POST VARIABLES

    // debateId => list of debate's ids
    mapping(uint256 => Post[]) public postsOfDebate;




    //EVENTS

    event ProfileCreated(address creator, string username);

    event newDebateStarted(uint256 debateId, address creator, string title, string topic);

    event newPostCreated(uint256 debateId, uint256 postId, address creator);







    //PROFILE CODE

    modifier validateProfileData(string memory _username) {
        require(bytes(_username).length <= 20, "USename must be 20 characters long at max");
        _;
    }

    function setProfileData(string memory _username, string memory _bioHashIpfs, string memory _profilePictureHashIpfs) public validateProfileData(_username) {

        Profile memory profile = Profile({
            username: _username,
            bioHashIpfs: _bioHashIpfs,
            profilePictureHashIpfs: _profilePictureHashIpfs
        });

        profilesData[msg.sender] = profile;
        emit ProfileCreated(msg.sender, _username);
    }

    


    

    modifier validateDebateInfo(string memory _title, string memory _topic, string memory _descriptionHashIpfs, uint256 _expiryTime, bool isTimed, uint256 expiryTime) {
        require(bytes(_title).length <= 40 && bytes(_title).length >= 10, "Title length must be between 10 and 40 characters");
        require(bytes(_topic).length <= 15 && bytes(_topic).length >= 3, "Topic length must be between 3 and 15 characters");
        //validacija IPFS CID-a
        require((_expiryTime >= 1 && _expiryTime <= 31) || !isTimed, "Timed debates must last between 1 and 31 day");
        _;
    }

    //DEBATE CODE

    function createNewDebate(string memory _title, string memory _topic, string memory _descriptionHashIpfs, bool isTimed, uint256 expiryTime) public validateDebateInfo(_title, _topic, _descriptionHashIpfs, expiryTime,  isTimed,  expiryTime ) returns (uint256) {
        uint256 id = debateTrack.current();


        allDebates[id] = Debate({
          debateId: id,
          creator: msg.sender,
          postIdTracker: Counters.Counter(0),
          title: _title,
          topic: _topic,
          descriptionHashIpfs: _descriptionHashIpfs
        });

        if (isTimed) {
            debatesExpirationDate[id] = block.timestamp + 1 days * expiryTime;
        }

      emit newDebateStarted(id, msg.sender, _title, _topic);

        debateTrack.increment();


        return id;
    }

    function getAllDebates() public view returns (Debate[] memory) {
        uint256 totalDebates = debateTrack.current();
        Debate[] memory debates = new Debate[](totalDebates);
    
        for (uint256 i = 0; i < totalDebates; i++) {
            debates[i] = allDebates[i];
        }
    
        return debates;
    }


    //POST CODE


    modifier validatePostCreation(uint256 debateId, string memory _contentHashIpfs) {
        require(allDebates[debateId].debateId == debateId, "Debate does not exist");
        require(bytes(_contentHashIpfs).length > 0, "Content hash cannot be empty");
        uint256 expirationDate = debatesExpirationDate[debateId];
        if (expirationDate != 0) { // If there is an expiration date set
            require(block.timestamp <= expirationDate, "Debate is expired");
        }
        _;
    }


    function createNewPost(uint256 debateId, string memory _contentHashIpfs) public validatePostCreation(debateId, _contentHashIpfs) returns (uint256) {
        uint256 id = allDebates[debateId].postIdTracker.current();
        Post memory post = Post({
            postId: id,
            creator: msg.sender,
            timeOfCreation: block.timestamp,
            contentHashIpfs: _contentHashIpfs
        });
        postsOfDebate[debateId].push(post);
        allDebates[debateId].postIdTracker.increment();

        emit newPostCreated(debateId, id, msg.sender);
        return id;

    }

    function getPostsForDebate(uint256 debateId) public view returns (Post[] memory) {
        return postsOfDebate[debateId];
    }   




    constructor() {}











}
