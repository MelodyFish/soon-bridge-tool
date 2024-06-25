/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Initializable,
  InitializableInterface,
} from "../../utils/Initializable";

const _abi = [
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
] as const;

export class Initializable__factory {
  static readonly abi = _abi;
  static createInterface(): InitializableInterface {
    return new utils.Interface(_abi) as InitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Initializable {
    return new Contract(address, _abi, signerOrProvider) as Initializable;
  }
}
