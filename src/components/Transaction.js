import './stylesheets/Transaction.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'



function Transaction({key, transaction}) {

    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <div>
        {
            (selected) ?
                <div className="Transaction-card-open">
                    <div className="Transaction-card-close">
                        <div className="Transaction-hash">TX hash: {transaction.hash.slice(0,10)}...{transaction.hash.slice(-5)}</div>
                        <button className="expand-button" onClick={handleClick} >
                            <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                        </button>
                    </div>
                    <div className="Transaction-card-open-tx-data">
                        <div>TX index: {transaction.transactionIndex}</div>
                        <div>Hash: {transaction.hash}</div>
                        <div>Recieving Address: {transaction.to}</div>
                        <div>Sending Address: {transaction.from}</div>
                        <div>Gas Price: {transaction.gasPrice._hex} ETH</div>
                        <div>Value: {transaction.value._hex}</div>
                        <div>Nonce: {transaction.nonce}</div>
                    </div>
                </div> :
                <div className="Transaction-card-close">
                    <div className="Transaction-hash">TX hash: {transaction.hash.slice(0,10)}...{transaction.hash.slice(-5)}</div>
                    <button className="expand-button" onClick={handleClick} >
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
        }
        </div>
    )
}

export default Transaction