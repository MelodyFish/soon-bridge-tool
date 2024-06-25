/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface SuperchainConfigInterface extends utils.Interface {
  functions: {
    "GUARDIAN_SLOT()": FunctionFragment;
    "PAUSED_SLOT()": FunctionFragment;
    "guardian()": FunctionFragment;
    "initialize(address,bool)": FunctionFragment;
    "pause(string)": FunctionFragment;
    "paused()": FunctionFragment;
    "unpause()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GUARDIAN_SLOT"
      | "PAUSED_SLOT"
      | "guardian"
      | "initialize"
      | "pause"
      | "paused"
      | "unpause"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "GUARDIAN_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSED_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "pause",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "GUARDIAN_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSED_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "ConfigUpdate(uint8,bytes)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Paused(string)": EventFragment;
    "Unpaused()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfigUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface ConfigUpdateEventObject {
  updateType: number;
  data: string;
}
export type ConfigUpdateEvent = TypedEvent<
  [number, string],
  ConfigUpdateEventObject
>;

export type ConfigUpdateEventFilter = TypedEventFilter<ConfigUpdateEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PausedEventObject {
  identifier: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {}
export type UnpausedEvent = TypedEvent<[], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface SuperchainConfig extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SuperchainConfigInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    /**
     * The address of the guardian, which can pause withdrawals from the System.         It can only be modified by an upgrade.
     */
    GUARDIAN_SLOT(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Whether or not the Superchain is paused.
     */
    PAUSED_SLOT(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Getter for the guardian address.
     */
    guardian(
      overrides?: CallOverrides
    ): Promise<[string] & { guardian_: string }>;

    /**
     * Initializer.
     * @param _guardian Address of the guardian, can pause the OptimismPortal.
     * @param _paused Initial paused status.
     */
    initialize(
      _guardian: PromiseOrValue<string>,
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Pauses withdrawals.
     * @param _identifier (Optional) A string to identify provenance of the pause transaction.
     */
    pause(
      _identifier: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Getter for the current paused status.
     */
    paused(
      overrides?: CallOverrides
    ): Promise<[boolean] & { paused_: boolean }>;

    /**
     * Unpauses withdrawals.
     */
    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<[string]>;
  };

  /**
   * The address of the guardian, which can pause withdrawals from the System.         It can only be modified by an upgrade.
   */
  GUARDIAN_SLOT(overrides?: CallOverrides): Promise<string>;

  /**
   * Whether or not the Superchain is paused.
   */
  PAUSED_SLOT(overrides?: CallOverrides): Promise<string>;

  /**
   * Getter for the guardian address.
   */
  guardian(overrides?: CallOverrides): Promise<string>;

  /**
   * Initializer.
   * @param _guardian Address of the guardian, can pause the OptimismPortal.
   * @param _paused Initial paused status.
   */
  initialize(
    _guardian: PromiseOrValue<string>,
    _paused: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Pauses withdrawals.
   * @param _identifier (Optional) A string to identify provenance of the pause transaction.
   */
  pause(
    _identifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Getter for the current paused status.
   */
  paused(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Unpauses withdrawals.
   */
  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Semantic version.
   */
  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * The address of the guardian, which can pause withdrawals from the System.         It can only be modified by an upgrade.
     */
    GUARDIAN_SLOT(overrides?: CallOverrides): Promise<string>;

    /**
     * Whether or not the Superchain is paused.
     */
    PAUSED_SLOT(overrides?: CallOverrides): Promise<string>;

    /**
     * Getter for the guardian address.
     */
    guardian(overrides?: CallOverrides): Promise<string>;

    /**
     * Initializer.
     * @param _guardian Address of the guardian, can pause the OptimismPortal.
     * @param _paused Initial paused status.
     */
    initialize(
      _guardian: PromiseOrValue<string>,
      _paused: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Pauses withdrawals.
     * @param _identifier (Optional) A string to identify provenance of the pause transaction.
     */
    pause(
      _identifier: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Getter for the current paused status.
     */
    paused(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Unpauses withdrawals.
     */
    unpause(overrides?: CallOverrides): Promise<void>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ConfigUpdate(uint8,bytes)"(
      updateType?: PromiseOrValue<BigNumberish> | null,
      data?: null
    ): ConfigUpdateEventFilter;
    ConfigUpdate(
      updateType?: PromiseOrValue<BigNumberish> | null,
      data?: null
    ): ConfigUpdateEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Paused(string)"(identifier?: null): PausedEventFilter;
    Paused(identifier?: null): PausedEventFilter;

    "Unpaused()"(): UnpausedEventFilter;
    Unpaused(): UnpausedEventFilter;
  };

  estimateGas: {
    /**
     * The address of the guardian, which can pause withdrawals from the System.         It can only be modified by an upgrade.
     */
    GUARDIAN_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Whether or not the Superchain is paused.
     */
    PAUSED_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Getter for the guardian address.
     */
    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Initializer.
     * @param _guardian Address of the guardian, can pause the OptimismPortal.
     * @param _paused Initial paused status.
     */
    initialize(
      _guardian: PromiseOrValue<string>,
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Pauses withdrawals.
     * @param _identifier (Optional) A string to identify provenance of the pause transaction.
     */
    pause(
      _identifier: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Getter for the current paused status.
     */
    paused(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Unpauses withdrawals.
     */
    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * The address of the guardian, which can pause withdrawals from the System.         It can only be modified by an upgrade.
     */
    GUARDIAN_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Whether or not the Superchain is paused.
     */
    PAUSED_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Getter for the guardian address.
     */
    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Initializer.
     * @param _guardian Address of the guardian, can pause the OptimismPortal.
     * @param _paused Initial paused status.
     */
    initialize(
      _guardian: PromiseOrValue<string>,
      _paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Pauses withdrawals.
     * @param _identifier (Optional) A string to identify provenance of the pause transaction.
     */
    pause(
      _identifier: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Getter for the current paused status.
     */
    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Unpauses withdrawals.
     */
    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Semantic version.
     */
    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
