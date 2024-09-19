export const ContractAbi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_topic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_descriptionHashIpfs",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isTimed",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "expiryTime",
        "type": "uint256"
      }
    ],
    "name": "createNewDebate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "debateId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_contentHashIpfs",
        "type": "string"
      }
    ],
    "name": "createNewPost",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "username",
        "type": "string"
      }
    ],
    "name": "ProfileCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "debateId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "topic",
        "type": "string"
      }
    ],
    "name": "newDebateStarted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "debateId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "postId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      }
    ],
    "name": "newPostCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_username",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bioHashIpfs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_profilePictureHashIpfs",
        "type": "string"
      }
    ],
    "name": "setProfileData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allDebates",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "debateId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "internalType": "struct Counters.Counter",
        "name": "postIdTracker",
        "type": "tuple"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "topic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "descriptionHashIpfs",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "debatesExpirationDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "debateTrack",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllDebates",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "debateId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
              }
            ],
            "internalType": "struct Counters.Counter",
            "name": "postIdTracker",
            "type": "tuple"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "topic",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "descriptionHashIpfs",
            "type": "string"
          }
        ],
        "internalType": "struct Debate2.Debate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "debateId",
        "type": "uint256"
      }
    ],
    "name": "getPostsForDebate",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "postId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "timeOfCreation",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "contentHashIpfs",
            "type": "string"
          }
        ],
        "internalType": "struct Debate2.Post[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "postsOfDebate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "postId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "timeOfCreation",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "contentHashIpfs",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "profilesData",
    "outputs": [
      {
        "internalType": "string",
        "name": "username",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bioHashIpfs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profilePictureHashIpfs",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const ContractAddress = '0xeDF2fAADe54D1f2442bAdec4568b10188F05eC67';


