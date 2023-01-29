import './stylesheets/TransactionContainer.scss'
import Transaction from './Transaction'

function TransactionInfo({block}) {
    return (
        <div className="TransactionInfoContainer">
            { (block === undefined) ? 
                <div className="TransactionData-empty ">
                    Please select a block to see transaction data
                </div> :
                <div className="TransactionData">
                    {block.transactions.map((transaction, index) => 
                        <Transaction key={index} transaction={transaction} />
                    )}
                </div>
            }
        </div>
    )
}

export default TransactionInfo 