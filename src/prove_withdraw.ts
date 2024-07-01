import minimist from "minimist";
import {isValidSolanaPublicKey, parseWithdrawTxInfo} from "./helper/tool";
import {createSVMContext} from "./helper/svm_context";
import {PublicKey} from "@solana/web3.js";
import {createEVMContext} from "./helper/evm_context";
import {OptimismPortal__factory} from "../typechain-types";
import axios from "axios";
import {Types} from "../typechain-types/OptimismPortal";

const options = {
    string: ['withdrawId', 'withdrawHeight']
};

async function main() {
    const args = minimist(process.argv.slice(2), options);
    console.log("args:", args);
    if (isValidSolanaPublicKey(args.withdrawId)) {
        throw new Error("invalid solana pubkey format.");
    }

    let svmContext = await createSVMContext();
    const withdrawInfo = await svmContext.SVM_Connection.getAccountInfo(new PublicKey(args.withdrawId));
    if (!withdrawInfo || withdrawInfo.data.length < 148) {
        throw new Error("invalid withdraw Id.");
    }
    //get withdraw tx
    const withdrawTx = parseWithdrawTxInfo(withdrawInfo.data);

    //get output root proof
    let outputRootProof: Types.OutputRootProofStruct;
    try {
        const response = await axios.post<Types.OutputRootProofStruct>(svmContext.SVM_Connection.rpcEndpoint, {
            jsonrpc: '2.0',
            id: 1,
            method: "outputAtBlock",
            params: {
                block_number: args.withdrawHeight
            }
        });
        outputRootProof = response.data;
        console.log("response.data:", response.data);
    } catch (error) {
        console.error('fetch outputAtBlock error:', error);
    }
    console.log("outputRootProof:", outputRootProof);

    //get withdraw proof
    let withdrawalProof: string[];
    try {
        const response = await axios.post(svmContext.SVM_Connection.rpcEndpoint, {
            jsonrpc: '2.0',
            id: 1,
            method: "getSoonWithdrawalProof",
            params: {
                pda_address: args.withdrawId,
                block_number: args.withdrawHeight
            }
        });
        console.log("response.data:", response.data);
        withdrawalProof = response.data.withdrawal_proof;
    } catch (error) {
        console.error('fetch output_at_block error:', error);
    }
    console.log("outputRootProof:", outputRootProof);

    let EVMContext = await createEVMContext(false);
    const OptimismPortal = OptimismPortal__factory.connect(EVMContext.EVM_OP_PORTAL, EVMContext.EVM_USER)
    const receipt = await (await OptimismPortal.connect(EVMContext.EVM_USER).provePDAWithdrawalTransaction(withdrawTx, args.withdrawHeight, args.withdrawId, outputRootProof, withdrawalProof)).wait(1)

    console.log(`Withdraw tx prove success. txHash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
});
