/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CacheGoldLockedDataCronKeeper,
  CacheGoldLockedDataCronKeeperInterface,
} from "../CacheGoldLockedDataCronKeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cacheGoldLockedOracleParam",
        type: "address",
      },
      {
        internalType: "address",
        name: "cacheGoldLockedDataAPIConsumerParam",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "cacheGoldContractAddress",
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
    name: "cacheGoldLockedDataAPIConsumer",
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
        internalType: "bytes",
        name: "checkData",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610c4c380380610c4c83398181016040528101906100329190610130565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561006c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100a657600080fd5b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050506101b5565b60008151905061012a8161019e565b92915050565b6000806040838503121561014357600080fd5b60006101518582860161011b565b92505060206101628582860161011b565b9150509250929050565b60006101778261017e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101a78161016c565b81146101b257600080fd5b50565b60805160601c60a05160601c610a586101f46000396000818160de01526102740152600081816101070152818161035001526105b50152610a586000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063242e3bbe146100515780634585e33b1461006f5780636e04ff0d1461008b578063a6daca57146100bc575b600080fd5b6100596100da565b60405161006691906107ec565b60405180910390f35b61008960048036038101906100849190610638565b610102565b005b6100a560048036038101906100a09190610638565b610347565b6040516100b3929190610807565b60405180910390f35b6100c46105b1565b6040516100d191906107ec565b60405180910390f35b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527fdef19f54000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516101cc91906107d5565b600060405180830381855afa9150503d8060008114610207576040519150601f19603f3d011682016040523d82523d6000602084013e61020c565b606091505b509150915081610251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024890610837565b60405180910390fd5b600081806020019051810190610267919061067d565b90508060008190555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1686866040516102b99291906107bc565b6000604051808303816000865af19150503d80600081146102f6576040519150601f19603f3d011682016040523d82523d6000602084013e6102fb565b606091505b505090508061033f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033690610877565b60405180910390fd5b505050505050565b600060606000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527fdef19f54000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161041591906107d5565b600060405180830381855afa9150503d8060008114610450576040519150601f19603f3d011682016040523d82523d6000602084013e610455565b606091505b50915091508161049a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049190610837565b60405180910390fd5b6000818060200190518101906104b0919061067d565b905060005481146105555760016040516024016104cc90610857565b6040516020818303038152906040527f6374441b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050945094505050506105aa565b6000878781818080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090509050945094505050505b9250929050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60008083601f8401126105eb57600080fd5b8235905067ffffffffffffffff81111561060457600080fd5b60208301915083600182028301111561061c57600080fd5b9250929050565b60008151905061063281610a0b565b92915050565b6000806020838503121561064b57600080fd5b600083013567ffffffffffffffff81111561066557600080fd5b610671858286016105d9565b92509250509250929050565b60006020828403121561068f57600080fd5b600061069d84828501610623565b91505092915050565b6106af816108cf565b82525050565b6106be816108e1565b82525050565b60006106d083856108b3565b93506106dd838584610917565b82840190509392505050565b60006106f482610897565b6106fe81856108a2565b935061070e818560208601610926565b61071781610959565b840191505092915050565b600061072d82610897565b61073781856108b3565b9350610747818560208601610926565b80840191505092915050565b60006107606027836108be565b915061076b8261096a565b604082019050919050565b6000610783600c836108be565b915061078e826109b9565b602082019050919050565b60006107a66018836108be565b91506107b1826109e2565b602082019050919050565b60006107c98284866106c4565b91508190509392505050565b60006107e18284610722565b915081905092915050565b600060208201905061080160008301846106a6565b92915050565b600060408201905061081c60008301856106b5565b818103602083015261082e81846106e9565b90509392505050565b6000602082019050818103600083015261085081610753565b9050919050565b6000602082019050818103600083015261087081610776565b9050919050565b6000602082019050818103600083015261089081610799565b9050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b60006108da826108ed565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610944578082015181840152602081019050610929565b83811115610953576000848401525b50505050565b6000601f19601f8301169050919050565b7f556e61626c6520746f206665746368206c6f636b656420676f6c64206f72616360008201527f6c65206461746100000000000000000000000000000000000000000000000000602082015250565b7f6772616d735f6c6f636b65640000000000000000000000000000000000000000600082015250565b7f556e61626c6520746f20706572666f726d2075706b6565700000000000000000600082015250565b610a148161090d565b8114610a1f57600080fd5b5056fea2646970667358221220396e9f9517c4b4bf5cf75582affe86d9190aae8da80ff260e3078233cdfcb8c864736f6c63430008040033";

export class CacheGoldLockedDataCronKeeper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    cacheGoldLockedOracleParam: string,
    cacheGoldLockedDataAPIConsumerParam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CacheGoldLockedDataCronKeeper> {
    return super.deploy(
      cacheGoldLockedOracleParam,
      cacheGoldLockedDataAPIConsumerParam,
      overrides || {}
    ) as Promise<CacheGoldLockedDataCronKeeper>;
  }
  getDeployTransaction(
    cacheGoldLockedOracleParam: string,
    cacheGoldLockedDataAPIConsumerParam: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      cacheGoldLockedOracleParam,
      cacheGoldLockedDataAPIConsumerParam,
      overrides || {}
    );
  }
  attach(address: string): CacheGoldLockedDataCronKeeper {
    return super.attach(address) as CacheGoldLockedDataCronKeeper;
  }
  connect(signer: Signer): CacheGoldLockedDataCronKeeper__factory {
    return super.connect(signer) as CacheGoldLockedDataCronKeeper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CacheGoldLockedDataCronKeeperInterface {
    return new utils.Interface(_abi) as CacheGoldLockedDataCronKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CacheGoldLockedDataCronKeeper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CacheGoldLockedDataCronKeeper;
  }
}
