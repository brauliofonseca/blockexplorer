import './stylesheets/TransactionContainer.scss'

function TransactionInfo({block}) {
    return (
        <div className="TransactionInfoContainer">
            { (block === undefined) ? 
                <div className="TransactionData">
                    Please select a block to see transaction data
                </div> :
                <div className="TransactionData">
                    Gonna show some TX data now
                    {block.number}
                </div>
            }
        </div>
    )
}

export default TransactionInfo 