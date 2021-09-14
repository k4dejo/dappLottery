/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface Lottery extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Lottery;
  clone(): Lottery;
  methods: {
    admin(): NonPayableTransactionObject<string>;

    betCount(): NonPayableTransactionObject<string>;

    betSize(): NonPayableTransactionObject<string>;

    currentState(): NonPayableTransactionObject<string>;

    houseFee(): NonPayableTransactionObject<string>;

    players(arg0: number | string | BN): NonPayableTransactionObject<string>;

    getPlayers(): NonPayableTransactionObject<string[]>;

    createBet(
      count: number | string | BN,
      size: number | string | BN
    ): NonPayableTransactionObject<void>;

    bet(): PayableTransactionObject<void>;

    cancel(): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
