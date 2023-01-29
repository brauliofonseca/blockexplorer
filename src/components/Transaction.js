function Transaction({key,transaction}) {
    return (
        <div className="transaction">
            <div>TX {transaction.transactionIndex}</div>
            <div>TX Hash: {transaction.hash}</div>
            <div>Recieving Address: {transaction.to}</div>
            <div>Sending Address: {transaction.from}</div>
            <div>Gas Price: {transaction.gasPrice._hex} ETH</div>
            <div>Value: {transaction.value._hex}</div>
            <div>Nonce: {transaction.nonce}</div>
        </div>
    )
}

export default Transaction