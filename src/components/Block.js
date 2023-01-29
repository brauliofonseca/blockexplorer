import { useEffect, useState } from 'react';
import './stylesheets/Block.scss'

function Block({blockData, setSelectedBlock}) {
    const timestamp = new Date(blockData.timestamp)

    const handleClick = () => {
        setSelectedBlock(blockData)
    }

    return (
        <div className="blockContainer">
            <div className="blockInfo">
                <div className="blockNum">Block number: {blockData.number}</div>
                <div>Timestamp: {blockData.timestamp}</div>
                <div>Hash: {blockData.hash}</div>
                <div>Parent Hash: {blockData.parentHash}</div>
                <div>Miner: {blockData.miner}</div>
                <div>Extra data: {blockData.extraData}</div>
                <div>Gas used: {blockData.gasUsed._hex}</div>
                <div>Transactions: {blockData.transactions.length}</div>
            </div>
            <button className="transaction-btn" onClick={handleClick} >See transactions</button>
        </div>
    )
}

export default Block

