/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SystemConfig,
  SystemConfigInterface,
  ResourceMetering,
} from "../SystemConfig";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_overhead",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_scalar",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_batcherHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_gasLimit",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_unsafeBlockSigner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_config",
        type: "tuple",
        internalType: "struct ResourceMetering.ResourceConfig",
        components: [
          {
            name: "maxResourceLimit",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "elasticityMultiplier",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "baseFeeMaxChangeDenominator",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "minimumBaseFee",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "systemTxMaxGas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "maximumBaseFee",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "UNSAFE_BLOCK_SIGNER_SLOT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "batcherHash",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "gasLimit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_overhead",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_scalar",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_batcherHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_gasLimit",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "_unsafeBlockSigner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_config",
        type: "tuple",
        internalType: "struct ResourceMetering.ResourceConfig",
        components: [
          {
            name: "maxResourceLimit",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "elasticityMultiplier",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "baseFeeMaxChangeDenominator",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "minimumBaseFee",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "systemTxMaxGas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "maximumBaseFee",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "minimumGasLimit",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "overhead",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "resourceConfig",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ResourceMetering.ResourceConfig",
        components: [
          {
            name: "maxResourceLimit",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "elasticityMultiplier",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "baseFeeMaxChangeDenominator",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "minimumBaseFee",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "systemTxMaxGas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "maximumBaseFee",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "scalar",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setBatcherHash",
    inputs: [
      {
        name: "_batcherHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setGasConfig",
    inputs: [
      {
        name: "_overhead",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_scalar",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setGasLimit",
    inputs: [
      {
        name: "_gasLimit",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setResourceConfig",
    inputs: [
      {
        name: "_config",
        type: "tuple",
        internalType: "struct ResourceMetering.ResourceConfig",
        components: [
          {
            name: "maxResourceLimit",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "elasticityMultiplier",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "baseFeeMaxChangeDenominator",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "minimumBaseFee",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "systemTxMaxGas",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "maximumBaseFee",
            type: "uint128",
            internalType: "uint128",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUnsafeBlockSigner",
    inputs: [
      {
        name: "_unsafeBlockSigner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unsafeBlockSigner",
    inputs: [],
    outputs: [
      {
        name: "addr_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "ConfigUpdate",
    inputs: [
      {
        name: "version",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "updateType",
        type: "uint8",
        indexed: true,
        internalType: "enum SystemConfig.UpdateType",
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002187380380620021878339810160408190526200003491620009c1565b620000458787878787878762000052565b5050505050505062000c19565b600054610100900460ff1615808015620000735750600054600160ff909116105b80620000a3575062000090306200022a60201b620008131760201c565b158015620000a3575060005460ff166001145b6200010c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801562000130576000805461ff0019166101001790555b6200013a62000239565b6200014588620002a1565b620001508562000320565b6200015c878762000372565b6200016784620003d6565b620001728362000473565b6200017d82620004db565b620001876200081f565b6001600160401b0316846001600160401b03161015620001d95760405162461bcd60e51b815260206004820152601f602482015260008051602062002127833981519152604482015260640162000103565b801562000220576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050565b6001600160a01b03163b151590565b600054610100900460ff16620002955760405162461bcd60e51b815260206004820152602b60248201526000805160206200216783398151915260448201526a6e697469616c697a696e6760a81b606482015260840162000103565b6200029f6200084c565b565b620002ab620008b3565b6001600160a01b038116620003125760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000103565b6200031d816200090f565b50565b60678190556040805160208082018490528251808303909101815290820190915260005b6000600080516020620021478339815191528360405162000366919062000afa565b60405180910390a35050565b60658290556066819055604080516020810184905290810182905260009060600160408051601f198184030181529190529050600160006000805160206200214783398151915283604051620003c9919062000afa565b60405180910390a3505050565b620003e06200081f565b6001600160401b0316816001600160401b03161015620004325760405162461bcd60e51b815260206004820152601f602482015260008051602062002127833981519152604482015260640162000103565b606880546001600160401b0319166001600160401b038316908117909155604080516020808201939093528151808203909301835281019052600262000344565b620004aa7f65a7ed542fb37fe237fdfbdd70b31598523fe5b32879e307bae27a0bd9581c08826200096160201b6200082f1760201c565b604080516001600160a01b03831660208201526000910160408051601f198184030181529190529050600362000344565b8060a001516001600160801b0316816060015163ffffffff1611156200056a5760405162461bcd60e51b815260206004820152603560248201527f53797374656d436f6e6669673a206d696e206261736520666565206d7573742060448201527f6265206c657373207468616e206d617820626173650000000000000000000000606482015260840162000103565b6001816040015160ff1611620005db5760405162461bcd60e51b815260206004820152602f60248201527f53797374656d436f6e6669673a2064656e6f6d696e61746f72206d757374206260448201526e65206c6172676572207468616e203160881b606482015260840162000103565b606854608082015182516001600160401b0390921691620005fd919062000b68565b63ffffffff161115620006425760405162461bcd60e51b815260206004820152601f602482015260008051602062002127833981519152604482015260640162000103565b6000816020015160ff1611620006b35760405162461bcd60e51b815260206004820152602f60248201527f53797374656d436f6e6669673a20656c6173746963697479206d756c7469706c60448201526e06965722063616e6e6f74206265203608c1b606482015260840162000103565b8051602082015163ffffffff82169160ff90911690620006d590829062000b93565b620006e1919062000bc5565b63ffffffff16146200075c5760405162461bcd60e51b815260206004820152603760248201527f53797374656d436f6e6669673a20707265636973696f6e206c6f73732077697460448201527f6820746172676574207265736f75726365206c696d6974000000000000000000606482015260840162000103565b805160698054602084015160408501516060860151608087015160a09097015163ffffffff96871664ffffffffff199095169490941764010000000060ff948516021764ffffffffff60281b191665010000000000939092169290920263ffffffff60301b19161766010000000000009185169190910217600160501b600160f01b0319166a01000000000000000000009390941692909202600160701b600160f01b03191692909217600160701b6001600160801b0390921691909102179055565b606954600090620008479063ffffffff6a010000000000000000000082048116911662000bf4565b905090565b600054610100900460ff16620008a85760405162461bcd60e51b815260206004820152602b60248201526000805160206200216783398151915260448201526a6e697469616c697a696e6760a81b606482015260840162000103565b6200029f336200090f565b6033546001600160a01b031633146200029f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000103565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b9055565b80516001600160a01b03811681146200097d57600080fd5b919050565b805163ffffffff811681146200097d57600080fd5b805160ff811681146200097d57600080fd5b80516001600160801b03811681146200097d57600080fd5b6000806000806000806000878903610180811215620009df57600080fd5b620009ea8962000965565b60208a015160408b015160608c015160808d0151939b50919950975095506001600160401b03808216821462000a1f57600080fd5b81955062000a3060a08c0162000965565b945060c060bf198401121562000a4557600080fd5b604051925060c083019150828210818311171562000a7357634e487b7160e01b600052604160045260246000fd5b5060405262000a8560c08a0162000982565b815262000a9560e08a0162000997565b602082015262000aa96101008a0162000997565b604082015262000abd6101208a0162000982565b606082015262000ad16101408a0162000982565b608082015262000ae56101608a01620009a9565b60a08201528091505092959891949750929550565b600060208083528351808285015260005b8181101562000b295785810183015185820160400152820162000b0b565b8181111562000b3c576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681851680830382111562000b8a5762000b8a62000b52565b01949350505050565b600063ffffffff8084168062000bb957634e487b7160e01b600052601260045260246000fd5b92169190910492915050565b600063ffffffff8083168185168183048111821515161562000beb5762000beb62000b52565b02949350505050565b60006001600160401b0382811684821680830382111562000b8a5762000b8a62000b52565b6114fe8062000c296000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063b40a817c116100cd578063f2fde38b11610081578063f68016b711610066578063f68016b714610410578063f975e92514610424578063ffa1ad741461043757600080fd5b8063f2fde38b146103f4578063f45e65d81461040757600080fd5b8063c9b26f61116100b2578063c9b26f61146102a4578063cc731b02146102b7578063e81b2c6d146103eb57600080fd5b8063b40a817c1461027e578063c71973f61461029157600080fd5b80634f16540b11610124578063715018a611610109578063715018a6146102455780638da5cb5b1461024d578063935f029e1461026b57600080fd5b80634f16540b146101d557806354fd4d50146101fc57600080fd5b80630c18c1621461015657806318d13918146101725780631fd19ee1146101875780634add321d146101b4575b600080fd5b61015f60655481565b6040519081526020015b60405180910390f35b610185610180366004611156565b61043f565b005b61018f610453565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610169565b6101bc610482565b60405167ffffffffffffffff9091168152602001610169565b61015f7f65a7ed542fb37fe237fdfbdd70b31598523fe5b32879e307bae27a0bd9581c0881565b6102386040518060400160405280600681526020017f312e31312e30000000000000000000000000000000000000000000000000000081525081565b60405161016991906111e3565b6101856104a8565b60335473ffffffffffffffffffffffffffffffffffffffff1661018f565b6101856102793660046111f6565b6104bc565b61018561028c366004611230565b6104d2565b61018561029f366004611359565b6104e3565b6101856102b2366004611375565b6104f4565b61037b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152506040805160c08101825260695463ffffffff8082168352640100000000820460ff9081166020850152650100000000008304169383019390935266010000000000008104831660608301526a0100000000000000000000810490921660808201526e0100000000000000000000000000009091046fffffffffffffffffffffffffffffffff1660a082015290565b6040516101699190600060c08201905063ffffffff80845116835260ff602085015116602084015260ff6040850151166040840152806060850151166060840152806080850151166080840152506fffffffffffffffffffffffffffffffff60a08401511660a083015292915050565b61015f60675481565b610185610402366004611156565b610505565b61015f60665481565b6068546101bc9067ffffffffffffffff1681565b61018561043236600461138e565b6105be565b61015f600081565b610447610833565b610450816108b4565b50565b600061047d7f65a7ed542fb37fe237fdfbdd70b31598523fe5b32879e307bae27a0bd9581c085490565b905090565b60695460009061047d9063ffffffff6a0100000000000000000000820481169116611430565b6104b0610833565b6104ba6000610971565b565b6104c4610833565b6104ce82826109e8565b5050565b6104da610833565b61045081610a79565b6104eb610833565b61045081610b57565b6104fc610833565b61045081610fcb565b61050d610833565b73ffffffffffffffffffffffffffffffffffffffff81166105b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61045081610971565b600054610100900460ff16158080156105de5750600054600160ff909116105b806105f85750303b1580156105f8575060005460ff166001145b610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016105ac565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156106e257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6106ea610ff3565b6106f388610505565b6106fc85610fcb565b61070687876109e8565b61070f84610a79565b610718836108b4565b61072182610b57565b610729610482565b67ffffffffffffffff168467ffffffffffffffff1610156107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53797374656d436f6e6669673a20676173206c696d697420746f6f206c6f770060448201526064016105ac565b801561080957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b9055565b60335473ffffffffffffffffffffffffffffffffffffffff1633146104ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105ac565b6108dd7f65a7ed542fb37fe237fdfbdd70b31598523fe5b32879e307bae27a0bd9581c08829055565b6040805173ffffffffffffffffffffffffffffffffffffffff8316602082015260009101604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052905060035b60007f1d2b0bda21d56b8bd12d4f94ebacffdfb35f5e226f84b461103bb8beab6353be8360405161096591906111e3565b60405180910390a35050565b6033805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606582905560668190556040805160208101849052908101829052600090606001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529050600160007f1d2b0bda21d56b8bd12d4f94ebacffdfb35f5e226f84b461103bb8beab6353be83604051610a6c91906111e3565b60405180910390a3505050565b610a81610482565b67ffffffffffffffff168167ffffffffffffffff161015610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53797374656d436f6e6669673a20676173206c696d697420746f6f206c6f770060448201526064016105ac565b606880547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff83169081179091556040805160208082019390935281518082039093018352810190526002610934565b8060a001516fffffffffffffffffffffffffffffffff16816060015163ffffffff161115610c07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f53797374656d436f6e6669673a206d696e206261736520666565206d7573742060448201527f6265206c657373207468616e206d61782062617365000000000000000000000060648201526084016105ac565b6001816040015160ff1611610c9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f53797374656d436f6e6669673a2064656e6f6d696e61746f72206d757374206260448201527f65206c6172676572207468616e2031000000000000000000000000000000000060648201526084016105ac565b6068546080820151825167ffffffffffffffff90921691610cbf919061145c565b63ffffffff161115610d2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f53797374656d436f6e6669673a20676173206c696d697420746f6f206c6f770060448201526064016105ac565b6000816020015160ff1611610dc4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f53797374656d436f6e6669673a20656c6173746963697479206d756c7469706c60448201527f6965722063616e6e6f742062652030000000000000000000000000000000000060648201526084016105ac565b8051602082015163ffffffff82169160ff90911690610de490829061147b565b610dee91906114c5565b63ffffffff1614610e81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f53797374656d436f6e6669673a20707265636973696f6e206c6f73732077697460448201527f6820746172676574207265736f75726365206c696d697400000000000000000060648201526084016105ac565b805160698054602084015160408501516060860151608087015160a09097015163ffffffff9687167fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000009095169490941764010000000060ff94851602177fffffffffffffffffffffffffffffffffffffffffffff0000000000ffffffffff166501000000000093909216929092027fffffffffffffffffffffffffffffffffffffffffffff00000000ffffffffffff1617660100000000000091851691909102177fffff0000000000000000000000000000000000000000ffffffffffffffffffff166a010000000000000000000093909416929092027fffff00000000000000000000000000000000ffffffffffffffffffffffffffff16929092176e0100000000000000000000000000006fffffffffffffffffffffffffffffffff90921691909102179055565b6067819055604080516020808201849052825180830390910181529082019091526000610934565b600054610100900460ff1661108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105ac565b6104ba600054610100900460ff16611124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105ac565b6104ba33610971565b803573ffffffffffffffffffffffffffffffffffffffff8116811461115157600080fd5b919050565b60006020828403121561116857600080fd5b6111718261112d565b9392505050565b6000815180845260005b8181101561119e57602081850181015186830182015201611182565b818111156111b0576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006111716020830184611178565b6000806040838503121561120957600080fd5b50508035926020909101359150565b803567ffffffffffffffff8116811461115157600080fd5b60006020828403121561124257600080fd5b61117182611218565b803563ffffffff8116811461115157600080fd5b803560ff8116811461115157600080fd5b80356fffffffffffffffffffffffffffffffff8116811461115157600080fd5b600060c082840312156112a257600080fd5b60405160c0810181811067ffffffffffffffff821117156112ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040529050806112fb8361124b565b81526113096020840161125f565b602082015261131a6040840161125f565b604082015261132b6060840161124b565b606082015261133c6080840161124b565b608082015261134d60a08401611270565b60a08201525092915050565b600060c0828403121561136b57600080fd5b6111718383611290565b60006020828403121561138757600080fd5b5035919050565b6000806000806000806000610180888a0312156113aa57600080fd5b6113b38861112d565b96506020880135955060408801359450606088013593506113d660808901611218565b92506113e460a0890161112d565b91506113f38960c08a01611290565b905092959891949750929550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600067ffffffffffffffff80831681851680830382111561145357611453611401565b01949350505050565b600063ffffffff80831681851680830382111561145357611453611401565b600063ffffffff808416806114b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b92169190910492915050565b600063ffffffff808316818516818304811182151516156114e8576114e8611401565b0294935050505056fea164736f6c634300080f000a53797374656d436f6e6669673a20676173206c696d697420746f6f206c6f77001d2b0bda21d56b8bd12d4f94ebacffdfb35f5e226f84b461103bb8beab6353be496e697469616c697a61626c653a20636f6e7472616374206973206e6f742069";

type SystemConfigConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SystemConfigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SystemConfig__factory extends ContractFactory {
  constructor(...args: SystemConfigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _overhead: PromiseOrValue<BigNumberish>,
    _scalar: PromiseOrValue<BigNumberish>,
    _batcherHash: PromiseOrValue<BytesLike>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    _unsafeBlockSigner: PromiseOrValue<string>,
    _config: ResourceMetering.ResourceConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SystemConfig> {
    return super.deploy(
      _owner,
      _overhead,
      _scalar,
      _batcherHash,
      _gasLimit,
      _unsafeBlockSigner,
      _config,
      overrides || {}
    ) as Promise<SystemConfig>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _overhead: PromiseOrValue<BigNumberish>,
    _scalar: PromiseOrValue<BigNumberish>,
    _batcherHash: PromiseOrValue<BytesLike>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    _unsafeBlockSigner: PromiseOrValue<string>,
    _config: ResourceMetering.ResourceConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _overhead,
      _scalar,
      _batcherHash,
      _gasLimit,
      _unsafeBlockSigner,
      _config,
      overrides || {}
    );
  }
  override attach(address: string): SystemConfig {
    return super.attach(address) as SystemConfig;
  }
  override connect(signer: Signer): SystemConfig__factory {
    return super.connect(signer) as SystemConfig__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SystemConfigInterface {
    return new utils.Interface(_abi) as SystemConfigInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SystemConfig {
    return new Contract(address, _abi, signerOrProvider) as SystemConfig;
  }
}
