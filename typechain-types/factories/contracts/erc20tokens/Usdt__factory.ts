/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Usdt, UsdtInterface } from "../../../contracts/erc20tokens/Usdt";

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
        name: "controller",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234620003f15762000014620003f6565b602063155cd91d60e21b818301526200002c620003f6565b631554d11560e21b82820152825190926001600160401b03808311620002f15760038054936001938486811c96168015620003e6575b87871014620003d0578190601f968781116200037a575b508790878311600114620003135760009262000307575b505060001982841b1c191690841b1781555b8551918211620002f15760049586548481811c91168015620002e6575b87821014620002d15785811162000286575b5085908584116001146200021b579383949184926000956200020f575b50501b92600019911b1c19161783555b60058054336001600160a01b0319821681179092556040519291906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a33315620001d25750506002546a084595161401484a00000092838201809211620001bd57506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91600255338352828152604083208481540190556040519384523393a3604051610de690816200041b8239f35b601190634e487b7160e01b6000525260246000fd5b6064928462461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b015193503880620000ee565b9190601f198416928860005284886000209460005b8a898383106200026e575050501062000253575b50505050811b018355620000fe565b01519060f884600019921b161c191690553880808062000244565b86860151895590970196948501948893500162000230565b87600052866000208680860160051c820192898710620002c7575b0160051c019085905b828110620002ba575050620000d1565b60008155018590620002aa565b92508192620002a1565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000bf565b634e487b7160e01b600052604160045260246000fd5b01519050388062000090565b90869350601f1983169185600052896000209260005b8b8282106200036357505084116200034a575b505050811b018155620000a2565b015160001983861b60f8161c191690553880806200033c565b8385015186558a9790950194938401930162000329565b90915083600052876000208780850160051c8201928a8610620003c6575b918891869594930160051c01915b828110620003b657505062000079565b60008155859450889101620003a6565b9250819262000398565b634e487b7160e01b600052602260045260246000fd5b95607f169562000062565b600080fd5b60408051919082016001600160401b03811183821017620002f1576040526004825256fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde03146107b757508063095ea7b31461078d57806318160ddd1461076e57806323b872dd14610731578063313ce5671461071557806339509351146106c557806340c10f191461059d57806342966c681461057f5780634fb2ed6b1461055957806370a0823114610522578063715018a6146104c557806379cc6790146104735780638da5cb5b1461044a57806395d89b411461032a578063a457c2d714610283578063a7fc7a0714610240578063a9059cbb1461020f578063dd62ed3e146101c25763f2fde38b146100f457600080fd5b346101be5760203660031901126101be5761010d6108f5565b90610116610926565b6001600160a01b0391821692831561016c575050600554826bffffffffffffffffffffffff60a01b821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50503461020b578060031936011261020b57806020926101e06108f5565b6101e8610910565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50503461020b578060031936011261020b5760209061023961022f6108f5565b60243590336109a1565b5160018152f35b50503461020b57602036600319011261020b5761025b6108f5565b610263610926565b6001600160a01b0316825260066020528120805460ff1916600117905580f35b50823461032757826003193601126103275761029d6108f5565b918360243592338152600160205281812060018060a01b03861682526020522054908282106102d6576020856102398585038733610b0f565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5091903461020b578160031936011261020b57805190828454600181811c90808316928315610440575b602093848410811461042d5783885290811561041157506001146103bc575b505050829003601f01601f191682019267ffffffffffffffff8411838510176103a957508291826103a59252826108ac565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106103fd5750505050830101388080610373565b8054888601830152930192849082016103e7565b60ff1916878501525050151560051b8401019050388080610373565b634e487b7160e01b895260228a52602489fd5b91607f1691610354565b50503461020b578160031936011261020b5760055490516001600160a01b039091168152602090f35b50503461020b578060031936011261020b5761048d6108f5565b3383526006602052908220546024359060ff16156104b1576104ae91610ca9565b80f35b6104ae916104c0823383610c11565b610ca9565b83346103275780600319360112610327576104de610926565b600580546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461020b57602036600319011261020b5760209181906001600160a01b0361054a6108f5565b16815280845220549051908152f35b50503461020b578160031936011261020b57602090516a084595161401484a0000008152f35b83823461020b57602036600319011261020b576104ae903533610ca9565b5090346101be57806003193601126101be576105b76108f5565b60025460243592916a084595161401484a0000006105d5858461097e565b11610678576001600160a01b03169384156106355750827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9261061b879560209461097e565b60025585855284835280852082815401905551908152a380f35b606490602084519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b825162461bcd60e51b8152602081870152602160248201527f4d696e74696e6720776f756c642065786365656420746f74616c20737570706c6044820152607960f81b6064820152608490fd5b50503461020b578060031936011261020b5761023960209261070e6106e86108f5565b338352600186528483206001600160a01b0382168452865291849020546024359061097e565b9033610b0f565b50503461020b578160031936011261020b576020905160128152f35b50503461020b57606036600319011261020b576020906102396107526108f5565b61075a610910565b60443591610769833383610c11565b6109a1565b50503461020b578160031936011261020b576020906002549051908152f35b50503461020b578060031936011261020b576020906102396107ad6108f5565b6024359033610b0f565b84915083346101be57826003193601126101be5782600354600181811c908083169283156108a2575b602093848410811461042d57838852908115610886575060011461083057505050829003601f01601f191682019267ffffffffffffffff8411838510176103a957508291826103a59252826108ac565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8385106108725750505050830101858080610373565b80548886018301529301928490820161085c565b60ff1916878501525050151560051b8401019050858080610373565b91607f16916107e0565b6020808252825181830181905290939260005b8281106108e157505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016108bf565b600435906001600160a01b038216820361090b57565b600080fd5b602435906001600160a01b038216820361090b57565b6005546001600160a01b0316330361093a57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b9190820180921161098b57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610abc5716918215610a6b57600082815280602052604081205491808310610a1757604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b03908116918215610bc05716918215610b705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b0380831660005260016020526040600020908216600052602052604060002054926000198403610c49575b50505050565b808410610c6457610c5b930391610b0f565b38808080610c43565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b6001600160a01b03168015610d6157600091818352826020526040832054818110610d1157817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef926020928587528684520360408620558060025403600255604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fdfea2646970667358221220d4589d34d3b9cdff2be402c52e903ccb0e40c57e5ada38690f4444fcca31d4fb64736f6c63430008110033";

type UsdtConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdtConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Usdt__factory extends ContractFactory {
  constructor(...args: UsdtConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Usdt> {
    return super.deploy(overrides || {}) as Promise<Usdt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Usdt {
    return super.attach(address) as Usdt;
  }
  override connect(signer: Signer): Usdt__factory {
    return super.connect(signer) as Usdt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdtInterface {
    return new utils.Interface(_abi) as UsdtInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Usdt {
    return new Contract(address, _abi, signerOrProvider) as Usdt;
  }
}