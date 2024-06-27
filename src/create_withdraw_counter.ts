import {createSVMContext, genWithdrawCounterAccountKey, sendTransaction, SYSTEM_PROGRAM} from "./helper/svm_context";
import {TransactionInstruction} from "@solana/web3.js";

async function main() {
    let svmContext = await createSVMContext();

    const counterKey = genWithdrawCounterAccountKey(svmContext.SVM_WITHDRAW_PROGRAM_ID);

    const instructionIndex = Buffer.alloc(4);
    instructionIndex.writeUInt32LE(0);
    const instruction = new TransactionInstruction({
        data: Buffer.concat([instructionIndex]),
        keys: [
            { pubkey: counterKey, isSigner: false, isWritable: true },
            { pubkey: svmContext.SVM_USER.publicKey, isSigner: true, isWritable: true },
            { pubkey: SYSTEM_PROGRAM, isSigner: false, isWritable: false },
        ],
        programId: svmContext.SVM_WITHDRAW_PROGRAM_ID,
    });

    await sendTransaction(svmContext, [instruction])
}

main().catch((error) => {
    console.error(error);
});
