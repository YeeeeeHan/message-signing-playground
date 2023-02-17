/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234620003195762001189803803806200001d816200031e565b928339810190604081830312620003195780516001600160401b03908181116200031957836200004f91840162000344565b916020938482015183811162000319576200006b920162000344565b825190828211620003035760008054926001958685811c95168015620002f8575b88861014620002e4578190601f9586811162000291575b5088908683116001146200022d57849262000221575b5050600019600383901b1c191690861b1781555b81519384116200020d5784548581811c9116801562000202575b87821014620001ee57838111620001a6575b50859284116001146200014157839495509262000135575b5050600019600383901b1c191690821b1790555b604051610dd29081620003b78239f35b01519050388062000111565b9190601f1984169585845280842093905b8782106200018e5750508385961062000174575b505050811b01905562000125565b015160001960f88460031b161c1916905538808062000166565b80878596829496860151815501950193019062000152565b8582528682208480870160051c820192898810620001e4575b0160051c019086905b828110620001d8575050620000f9565b838155018690620001c8565b92508192620001bf565b634e487b7160e01b82526022600452602482fd5b90607f1690620000e7565b634e487b7160e01b81526041600452602490fd5b015190503880620000b9565b8480528985208994509190601f198416865b8c8282106200027a575050841162000260575b505050811b018155620000cd565b015160001960f88460031b161c1916905538808062000252565b8385015186558c979095019493840193016200023f565b9091508380528884208680850160051c8201928b8610620002da575b918a91869594930160051c01915b828110620002cb575050620000a3565b8681558594508a9101620002bb565b92508192620002ad565b634e487b7160e01b83526022600452602483fd5b94607f16946200008c565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200030357604052565b919080601f84011215620003195782516001600160401b03811162000303576020906200037a601f8201601f191683016200031e565b92818452828287010111620003195760005b818110620003a257508260009394955001015290565b85810183015184820184015282016200038c56fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146107645750816306fdde0314610699578163081812fc14610679578163095ea7b31461050b57816323b872dd146104e157816342842e0e146104935781636352211e1461046257816370a08231146103cc57816395d89b41146102b3578163a22cb465146101e3578163b88d4fde14610155578163c87b56dd14610104575063e985e9c5146100b457600080fd5b3461010057806003193601126101005760ff816020936100d261080f565b6100da61082a565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b838334610100576020366003190112610100576101246101519335610c56565b81815161013081610875565b5280519161013d83610875565b8252519182916020835260208301906107cf565b0390f35b919050346101df5760803660031901126101df5761017161080f565b61017961082a565b846064359467ffffffffffffffff8611610100573660238701121561010057850135946101b16101a8876108c9565b955195866108a7565b858552366024878301011161010057856101dc966024602093018388013785010152604435916109dd565b80f35b8280fd5b919050346101df57806003193601126101df576101fe61080f565b90602435918215158093036102af576001600160a01b03169233841461026d5750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152fd5b8480fd5b8284346103c957806003193601126103c9578151918160019283549384811c918186169586156103bf575b60209687851081146103ac578899509688969785829a52918260001461038557505060011461032a575b505050610151929161031b9103856108a7565b519282849384528301906107cf565b91908693508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061036d575050508201018161031b610151610308565b8054848a018601528895508794909301928101610354565b60ff19168782015293151560051b8601909301935084925061031b91506101519050610308565b634e487b7160e01b835260228a52602483fd5b92607f16926102de565b80fd5b83915034610100576020366003190112610100576001600160a01b036103f061080f565b1690811561040d5760208480858581526003845220549051908152f35b608490602085519162461bcd60e51b8352820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152fd5b8284346103c95760203660031901126103c9575061048260209235610931565b90516001600160a01b039091168152f35b838334610100576104a336610840565b91835193602085019085821067ffffffffffffffff8311176104ce576101dc969750528584526109dd565b634e487b7160e01b875260418852602487fd5b83346103c9576101dc6104f336610840565b916105066105018433610a78565b61097b565b610b40565b9050346101df57816003193601126101df5761052561080f565b6024359290916001600160a01b039190828061054087610931565b1694169380851461062c5780331490811561060d575b50156105a557848652602052842080546001600160a01b0319168317905561057d83610931565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff828720541638610556565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b8284346103c95760203660031901126103c9575061048260209235610957565b8284346103c957806003193601126103c95781519181825492600184811c9181861695861561075a575b60209687851081146103ac578899509688969785829a5291826000146103855750506001146106ff57505050610151929161031b9103856108a7565b91908693508280527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828410610742575050508201018161031b610151610308565b8054848a018601528895508794909301928101610729565b92607f16926106c3565b8491346101df5760203660031901126101df573563ffffffff60e01b81168091036101df57602092506380ac58cd60e01b81149081156107be575b81156107ad575b5015158152f35b6301ffc9a760e01b149050836107a6565b635b5e139f60e01b8114915061079f565b919082519283825260005b8481106107fb575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016107da565b600435906001600160a01b038216820361082557565b600080fd5b602435906001600160a01b038216820361082557565b6060906003190112610825576001600160a01b0390600435828116810361082557916024359081168103610825579060443590565b6020810190811067ffffffffffffffff82111761089157604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761089157604052565b67ffffffffffffffff811161089157601f01601f191660200190565b156108ec57565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b6000908152600260205260409020546001600160a01b03166109548115156108e5565b90565b61096081610c56565b6000908152600460205260409020546001600160a01b031690565b1561098257565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b90610a019392916109f16105018433610a78565b6109fc838383610b40565b610c7b565b15610a0857565b60405162461bcd60e51b815280610a2160048201610a25565b0390fd5b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b906001600160a01b038080610a8c84610931565b16931691838314938415610abf575b508315610aa9575b50505090565b610ab591929350610957565b1614388080610aa3565b909350600052600560205260406000208260005260205260ff604060002054169238610a9b565b15610aed57565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b90610b6891610b4e84610931565b6001600160a01b0393918416928492909183168414610ae6565b16918215610c055781610b8591610b7e86610931565b1614610ae6565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60008481526004602052604081206bffffffffffffffffffffffff60a01b9081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600090815260026020526040902054610c79906001600160a01b031615156108e5565b565b9293600093909291803b15610d9157948491610cd59660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c9760848301906107cf565b0393165af1849181610d51575b50610d40575050503d600014610d38573d610cfc816108c9565b90610d0a60405192836108a7565b81528091833d92013e5b80519182610d355760405162461bcd60e51b815280610a2160048201610a25565b01fd5b506060610d14565b6001600160e01b0319161492509050565b9091508581813d8311610d8a575b610d6981836108a7565b810103126102af57516001600160e01b0319811681036102af579038610ce2565b503d610d5f565b50505091505060019056fea2646970667358221220978add1b2615bdc4a26f6e7cc79b5647a72aeb58e8ba74464b4c2ebae36e0c3664736f6c63430008110033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
