import './stylesheets/TransactionContainer.scss'
import Transaction from './Transaction'
import { useState, useEffect  } from 'react'

function TransactionInfo({block}) {

    const [selected, setSelected] = useState(false)

    useEffect(() => { 
    }) 

    return (
        <div className="TransactionInfoContainer">
            { (block === undefined) ? 
                <div className="TransactionData-empty">
                    Please select a block to see transaction data
                </div> :
                <div className="TransactionData-loaded">
                    <div className="SelectedBlock">
                        Selected block: {block.number}
                    </div>
                    <div className="TransactionData">
                        {block.transactions.map((transaction, index) => 
                            <Transaction key={index} transaction={transaction} selected={selected} setSelected={setSelected} />
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default TransactionInfo 