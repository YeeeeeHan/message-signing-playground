/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Frg, FrgInterface } from "../../../contracts/erc20tokens/Frg";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUMSUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "testPermit",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610140604090808252346200051357620000198162000518565b600981526020918282019168232923902a37b5b2b760b91b93848452825194620000438662000518565b6009865281860152825191620000598362000518565b6003908184526246524760e81b83850152845195620000788762000518565b6001808852603160f81b85890190815289516001600160401b03959193929190868111620004075781548381811c9116801562000508575b89821014620004f2578190601f9d818f80931162000490575b508a91831160011462000429576000926200041d575b505060001982841b1c191690831b1781555b875190868211620004075760049889548481811c91168015620003fc575b8a821014620003e7578d81116200039b575b5088908d8411600114620003305793839491849260009562000324575b50501b92600019911b1c19161786555b60058054336001600160a01b03198216811790925588519491906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a351902096519020968660e052610100978089524660a052848301907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f988983528885015260608401524660808401523060a084015260a0835260c0830193838510908511176200030f57838752825190206080523060c0526101209687523315620002cf575050506002546a05ca4ec2a79a7f6700000092838201809211620002ba57506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025533835282815284832084815401905584519384523393a35190611385928362000535843960805183611215015260a051836112e1015260c051836111df015260e051836112640152518261128a015251816112410152f35b601190634e487b7160e01b6000525260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300916101049160649562461bcd60e51b865260c483015260e48201520152fd5b604186634e487b7160e01b6000525260246000fd5b0151935038806200013e565b9190601f198416928b600052848b6000209460005b8d8983831062000383575050501062000368575b50505050811b0186556200014e565b01519060f884600019921b161c191690553880808062000359565b86860151895590970196948501948893500162000345565b8a6000528d8a6000209080860160051c8201928c8710620003dd575b0160051c019085905b828110620003d057505062000121565b60008155018590620003c0565b92508192620003b7565b60228b634e487b7160e01b6000525260246000fd5b90607f16906200010f565b634e487b7160e01b600052604160045260246000fd5b015190503880620000df565b90859350601f19831691856000528b6000209260005b8d82821062000479575050841162000460575b505050811b018155620000f1565b015160001983861b60f8161c1916905538808062000452565b83850151865589979095019493840193016200043f565b91509150836000528d8a6000209080850160051c8201928c8610620004e8575b8594928289929593950160051c01915b828110620004d0575050620000c9565b600091939550809294505501918e91868594620004c0565b92508192620004b0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620000b0565b600080fd5b604081019081106001600160401b03821117620004075760405256fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde031461095a57508063095ea7b31461093057806318160ddd1461091157806323b872dd146108d4578063313ce567146108b85780633644e51514610894578063395093511461084457806340293fda146107c757806340c10f191461069f57806342966c68146106815780634fb2ed6b1461065b57806370a0823114610624578063715018a6146105c757806379cc6790146105975780637ecebe001461055f5780638da5cb5b1461053657806395d89b4114610432578063a457c2d71461038b578063a9059cbb1461035a578063d505accf14610230578063dd62ed3e146101e35763f2fde38b1461011557600080fd5b346101df5760203660031901126101df5761012e610a99565b90610137610b19565b6001600160a01b0391821692831561018d575050600554826bffffffffffffffffffffffff60a01b821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50503461022c578060031936011261022c5780602092610201610a99565b610209610ab4565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b5082903461022c5761024136610aca565b90839794979695964211610317576001600160a01b03808716808b52600660209081528c8c208054600181019091558d51929793969594939183019291829161028e91908e8e8e88610fdb565b03601f19810182526102a09082610b71565b5190206102ac90611307565b926102b69361114d565b6102bf90611033565b16036102d457506102d1939450610d3a565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b895162461bcd60e51b8152602081870152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b50503461022c578060031936011261022c5760209061038461037a610a99565b6024359033610bcc565b5160018152f35b50823461042f578260031936011261042f576103a5610a99565b918360243592338152600160205281812060018060a01b03861682526020522054908282106103de576020856103848585038733610d3a565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5091903461022c578160031936011261022c57805191809380549160019083821c9282851694851561052c575b6020958686108114610519578589529081156104f5575060011461049d575b610499878761048f828c0383610b71565b5191829182610a50565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106104e257505050826104999461048f9282010194388061047e565b80548685018801529286019281016104c4565b60ff19168887015250505050151560051b830101925061048f82610499388061047e565b634e487b7160e01b845260228352602484fd5b93607f169361045f565b50503461022c578160031936011261022c5760055490516001600160a01b039091168152602090f35b50503461022c57602036600319011261022c5760209181906001600160a01b03610587610a99565b1681526006845220549051908152f35b50503461022c5736600319011261042f576102d16105b3610a99565b602435906105c2823383610e3c565b610ed4565b833461042f578060031936011261042f576105e0610b19565b600580546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461022c57602036600319011261022c5760209181906001600160a01b0361064c610a99565b16815280845220549051908152f35b50503461022c578160031936011261022c57602090516a084595161401484a0000008152f35b83823461022c57602036600319011261022c576102d1903533610ed4565b5090346101df57806003193601126101df576106b9610a99565b60025460243592916a084595161401484a0000006106d78584610ba9565b1161077a576001600160a01b03169384156107375750827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9261071d8795602094610ba9565b60025585855284835280852082815401905551908152a380f35b606490602084519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b825162461bcd60e51b8152602081870152602160248201527f4d696e74696e6720776f756c642065786365656420746f74616c20737570706c6044820152607960f81b6064820152608490fd5b50503461022c5760209161083d9161083561083061081a6108286107ea36610aca565b9895949196928b60018060a09b949b1b039d8e8816815260206006905220548c5195602094879586019889610fdb565b03601f198101835282610b71565b519020611307565b61114d565b939093611033565b5191168152f35b50503461022c578060031936011261022c5761038460209261088d610867610a99565b338352600186528483206001600160a01b03821684528652918490205460243590610ba9565b9033610d3a565b50503461022c578160031936011261022c576020906108b16111dc565b9051908152f35b50503461022c578160031936011261022c576020905160128152f35b50503461022c57606036600319011261022c576020906103846108f5610a99565b6108fd610ab4565b6044359161090c833383610e3c565b610bcc565b50503461022c578160031936011261022c576020906002549051908152f35b50503461022c578060031936011261022c57602090610384610950610a99565b6024359033610d3a565b9291905034610a4c5783600319360112610a4c57600354600181811c9186908281168015610a42575b6020958686108214610a2f5750848852908115610a0d57506001146109b4575b610499868661048f828b0383610b71565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106109fa57505050826104999461048f9282010194386109a3565b80548685018801529286019281016109dd565b60ff191687860152505050151560051b830101925061048f82610499386109a3565b634e487b7160e01b845260229052602483fd5b93607f1693610983565b8380fd5b6020808252825181830181905290939260005b828110610a8557505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610a63565b600435906001600160a01b0382168203610aaf57565b600080fd5b602435906001600160a01b0382168203610aaf57565b60e0906003190112610aaf576001600160a01b03906004358281168103610aaf57916024359081168103610aaf5790604435906064359060843560ff81168103610aaf579060a4359060c43590565b6005546001600160a01b03163303610b2d57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610b9357604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610bb657565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610ce75716918215610c9657600082815280602052604081205491808310610c4257604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03908116918215610deb5716918215610d9b5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b0380831660005260016020526040600020908216600052602052604060002054926000198403610e74575b50505050565b808410610e8f57610e86930391610d3a565b38808080610e6e565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b6001600160a01b03168015610f8c57600091818352826020526040832054818110610f3c57817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926020928587528684520360408620558060025403600255604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981526001600160a01b039182166020820152911660408201526060810191909152608081019190915260a081019190915260c00190565b600581101561113757806110445750565b600181036110915760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036110de5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b6003146110e757565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116111d05791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156111c35781516001600160a01b038116156111bd579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806112de575b15611237577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610b935760405251902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461120e565b61130f6111dc565b9060405190602082019261190160f01b845260228301526042820152604281526080810181811067ffffffffffffffff821117610b93576040525190209056fea2646970667358221220f8bdeb1d655d898f31b777dde6026c51ca0ce3b848444dac40958a1a0be1a5b264736f6c63430008110033";

type FrgConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FrgConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Frg__factory extends ContractFactory {
  constructor(...args: FrgConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Frg> {
    return super.deploy(overrides || {}) as Promise<Frg>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Frg {
    return super.attach(address) as Frg;
  }
  override connect(signer: Signer): Frg__factory {
    return super.connect(signer) as Frg__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FrgInterface {
    return new utils.Interface(_abi) as FrgInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Frg {
    return new Contract(address, _abi, signerOrProvider) as Frg;
  }
}
