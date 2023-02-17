/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FrgPermit,
  FrgPermitInterface,
} from "../../../contracts/erc20tokens/FrgPermit";

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
  "0x610140604090808252346200051357620000198162000518565b600981526020918282019168232923902a37b5b2b760b91b93848452825194620000438662000518565b6009865281860152825191620000598362000518565b6003908184526246524760e81b83850152845195620000788762000518565b6001808852603160f81b85890190815289516001600160401b03959193929190868111620004075781548381811c9116801562000508575b89821014620004f2578190601f9d818f80931162000490575b508a91831160011462000429576000926200041d575b505060001982841b1c191690831b1781555b875190868211620004075760049889548481811c91168015620003fc575b8a821014620003e7578d81116200039b575b5088908d8411600114620003305793839491849260009562000324575b50501b92600019911b1c19161786555b60058054336001600160a01b03198216811790925588519491906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a351902096519020968660e052610100978089524660a052848301907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f988983528885015260608401524660808401523060a084015260a0835260c0830193838510908511176200030f57838752825190206080523060c0526101209687523315620002cf575050506002546a05ca4ec2a79a7f6700000092838201809211620002ba57506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025533835282815284832084815401905584519384523393a351906115f192836200053584396080518361142f015260a051836114ea015260c051836113f9015260e0518361147e015251826114a40152518161145b0152f35b601190634e487b7160e01b6000525260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300916101049160649562461bcd60e51b865260c483015260e48201520152fd5b604186634e487b7160e01b6000525260246000fd5b0151935038806200013e565b9190601f198416928b600052848b6000209460005b8d8983831062000383575050501062000368575b50505050811b0186556200014e565b01519060f884600019921b161c191690553880808062000359565b86860151895590970196948501948893500162000345565b8a6000528d8a6000209080860160051c8201928c8710620003dd575b0160051c019085905b828110620003d057505062000121565b60008155018590620003c0565b92508192620003b7565b60228b634e487b7160e01b6000525260246000fd5b90607f16906200010f565b634e487b7160e01b600052604160045260246000fd5b015190503880620000df565b90859350601f19831691856000528b6000209260005b8d82821062000479575050841162000460575b505050811b018155620000f1565b015160001983861b60f8161c1916905538808062000452565b83850151865589979095019493840193016200043f565b91509150836000528d8a6000209080850160051c8201928c8610620004e8575b8594928289929593950160051c01915b828110620004d0575050620000c9565b600091939550809294505501918e91868594620004c0565b92508192620004b0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620000b0565b600080fd5b604081019081106001600160401b03821117620004075760405256fe60806040526004361015610013575b600080fd5b60003560e01c806306fdde03146101b7578063095ea7b3146101ae57806318160ddd146101a557806323b872dd1461019c578063313ce567146101935780633644e5151461018a578063395093511461018157806340c10f191461017857806342966c681461016f5780634fb2ed6b1461016657806370a082311461015d578063715018a61461015457806379cc67901461014b5780637ecebe00146101425780638da5cb5b1461013957806395d89b4114610130578063a457c2d714610127578063a9059cbb1461011e578063d505accf14610115578063dd62ed3e1461010c5763f2fde38b1461010457600080fd5b61000e610acd565b5061000e610a74565b5061000e6108fd565b5061000e6108d6565b5061000e61081b565b5061000e610757565b5061000e61072d565b5061000e6106f2565b5061000e6106b5565b5061000e610656565b5061000e61061b565b5061000e6105f4565b5061000e6105c3565b5061000e610471565b5061000e610418565b5061000e6103f4565b5061000e6103d7565b5061000e61039e565b5061000e61037f565b5061000e61034d565b5061000e610214565b919082519283825260005b8481106101ec575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016101cb565b9060206102119281815201906101c0565b90565b503461000e5760008060031936011261031e5760405190806003549060019180831c92808216928315610314575b60209283861085146103005785885260208801949081156102df5750600114610286575b6102828761027681890382610c3d565b60405191829182610200565b0390f35b600360005294509192917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8386106102ce5750505091019050610276826102823880610266565b8054858701529482019481016102b2565b60ff191685525050505090151560051b019050610276826102823880610266565b634e487b7160e01b82526022600452602482fd5b93607f1693610242565b80fd5b600435906001600160a01b038216820361000e57565b602435906001600160a01b038216820361000e57565b503461000e57604036600319011261000e5761037461036a610321565b6024359033610e3b565b602060405160018152f35b503461000e57600036600319011261000e576020600254604051908152f35b503461000e57606036600319011261000e576103746103bb610321565b6103c3610337565b604435916103d2833383610f66565b610d35565b503461000e57600036600319011261000e57602060405160128152f35b503461000e57600036600319011261000e5760206104106113f6565b604051908152f35b503461000e57604036600319011261000e57610374610435610321565b33600052600160205261046a6024356104648360406000209060018060a01b0316600052602052604060002090565b54610c5f565b9033610e3b565b503461000e57604036600319011261000e5761048b610321565b6024356002546a084595161401484a0000006104a78383610c5f565b11610574576001600160a01b03831692831561052f578261051461052a926104fa6104f56000977fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef97610c5f565b600255565b6001600160a01b0316600090815260208190526040902090565b8054820190556040519081529081906020820190565b0390a3005b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b60405162461bcd60e51b815260206004820152602160248201527f4d696e74696e6720776f756c642065786365656420746f74616c20737570706c6044820152607960f81b6064820152608490fd5b503461000e57602036600319011261000e576105e6336105e1610fff565b611558565b6105f260043533611038565b005b503461000e57600036600319011261000e5760206040516a084595161401484a0000008152f35b503461000e57602036600319011261000e576001600160a01b0361063d610321565b1660005260006020526020604060002054604051908152f35b503461000e5760008060031936011261031e57610671610b97565b600580546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461000e57604036600319011261000e576105f26106d2610321565b602435906106e2336105e1610fff565b6106ed823383610f66565b611038565b503461000e57602036600319011261000e576001600160a01b03610714610321565b1660005260066020526020604060002054604051908152f35b503461000e57600036600319011261000e576005546040516001600160a01b039091168152602090f35b503461000e5760008060031936011261031e5760405190806004549060019180831c92808216928315610811575b60209283861085146103005785885260208801949081156102df57506001146107b8576102828761027681890382610c3d565b600460005294509192917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8386106108005750505091019050610276826102823880610266565b8054858701529482019481016107e4565b93607f1693610785565b503461000e57604036600319011261000e57610835610321565b602435903360005260016020526108628160406000209060018060a01b0316600052602052604060002090565b54918083106108835761087792039033610e3b565b60405160018152602090f35b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b503461000e57604036600319011261000e576103746108f3610321565b6024359033610d35565b503461000e5760e036600319011261000e57610917610321565b61091f610337565b60443590606435926084359360ff8516850361000e57804211610a2f576109ff610a2a916109d96105f2976109e76109728760018060a01b03166000526006602052604060002090815491600183019055565b604080517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9602082019081526001600160a01b03808c1693830193909352918b166060820152608081018c905260a081019290925260c082019590955292839060e0820190565b03601f198101845283610c3d565b6109fa60c4359360a43593519020611510565b611210565b610a0b816105e161116d565b610a17836105e1611199565b6001600160a01b038381169116146111c4565b610e3b565b60405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b503461000e57604036600319011261000e576020610ac4610a93610321565b610a9b610337565b6001600160a01b0391821660009081526001855260408082209290931681526020919091522090565b54604051908152f35b503461000e57602036600319011261000e57610ae7610321565b610aef610b97565b6001600160a01b03908116908115610b4357600554826bffffffffffffffffffffffff60a01b821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6005546001600160a01b03163303610bab57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6040810190811067ffffffffffffffff821117610c0b57604052565b634e487b7160e01b600052604160045260246000fd5b60c0810190811067ffffffffffffffff821117610c0b57604052565b90601f8019910116810190811067ffffffffffffffff821117610c0b57604052565b91908201809211610c6c57565b634e487b7160e01b600052601160045260246000fd5b15610c8957565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b15610ce157565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b916001600160a01b038084169290918315610de857610514827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef94610de3941696610d81881515610c82565b610dc884610da18360018060a01b03166000526000602052604060002090565b54610dae82821015610cda565b039160018060a01b03166000526000602052604060002090565b556001600160a01b0316600090815260208190526040902090565b0390a3565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b038082169291908315610f15578216938415610ec55780610eb47f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92594610e9d610de39560018060a01b03166000526001602052604060002090565b9060018060a01b0316600052602052604060002090565b556040519081529081906020820190565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b6001600160a01b038082166000908152600160209081526040808320938616835292905220909190549260018401610f9f575b50505050565b808410610fba57610fb1930391610e3b565b38808080610f99565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b6040519061100c82610bef565b601982527f494e2045524332304255524e41424c452043414c4c45523a20000000000000006020830152565b6001600160a01b03811690811561111e576001600160a01b0381166000908152602081905260409020548381106110ce57837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926110b0600096610de394039160018060a01b03166000526000602052604060002090565b556110be8160025403600255565b6040519081529081906020820190565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b6040519061117a82610bef565b601082526f24b7102832b936b4ba1039b4b3b732b960811b6020830152565b604051906111a682610bef565b600f82526e24b7102832b936b4ba1037bbb732b960891b6020830152565b156111cb57565b60405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606490fd5b91610211939161121f93611367565b919091611247565b6005111561123157565b634e487b7160e01b600052602160045260246000fd5b61125081611227565b806112585750565b61126181611227565b600181036112ae5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6112b781611227565b600281036113045760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80611310600392611227565b1461131757565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116113ea5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156113dd5781516001600160a01b038116156113d7579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806114e7575b15611451577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526114e181610c21565b51902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611428565b6115186113f6565b9060405190602082019261190160f01b845260228301526042820152604281526080810181811067ffffffffffffffff821117610c0b5760405251902090565b6000919082916115a86040518092611589602083019563319af33360e01b87526040602485015260648401906101c0565b6001600160a01b0391909116604483015203601f198101835282610c3d565b51906a636f6e736f6c652e6c6f675afa5056fea2646970667358221220a57813837f5dec29e8d7529e9cc673e6dff3c7780552273e0c27a513a7ee1a9064736f6c63430008110033";

type FrgPermitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FrgPermitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FrgPermit__factory extends ContractFactory {
  constructor(...args: FrgPermitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FrgPermit> {
    return super.deploy(overrides || {}) as Promise<FrgPermit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FrgPermit {
    return super.attach(address) as FrgPermit;
  }
  override connect(signer: Signer): FrgPermit__factory {
    return super.connect(signer) as FrgPermit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FrgPermitInterface {
    return new utils.Interface(_abi) as FrgPermitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FrgPermit {
    return new Contract(address, _abi, signerOrProvider) as FrgPermit;
  }
}
