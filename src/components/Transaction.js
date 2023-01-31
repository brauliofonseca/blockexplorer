import './stylesheets/Transaction.scss'
import 

{/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}


function Transaction({transaction, selected, setSelected}) {
    // const [selected, setSelected] = useState()

    const handleClick = () => {
        setSelected(selected)
    }

    return (
        <div>
        {
            (selected === true) ?
                <div className="Transaction-card-open">
                    <div>TX {transaction.transactionIndex}</div>
                    <div>TX Hash: {transaction.hash}</div>
                    <div>Recieving Address: {transaction.to}</div>
                    <div>Sending Address: {transaction.from}</div>
                    <div>Gas Price: {transaction.gasPrice._hex} ETH</div>
                    <div>Value: {transaction.value._hex}</div>
                    <div>Nonce: {transaction.nonce}</div>
                </div> :
                <div className="Transaction-card-close">
                    <div className="Transaction-hash">Transaction hash: {transaction.hash.slice(0,10)}...{transaction.hash.slice(-10)}</div>
                    <button className={"arrow-button"} onClick={handleClick} />
                </div>
        }
        </div>
    )
}

export default Transaction