import { useEffect, useState } from 'react';
import './stylesheets/Block.scss'

function Block({blockData}) {
    return (
        <div className="blockContainer">
            <div className="blockInfo">
                <div>Block number: {blockData.number}</div>
                <div>Timestamp: {blockData.timestamp}</div>
                <div>Hash: {blockData.hash}</div>
                <div>Parent Hash: {blockData.parentHash}</div>
                <div>Number: {blockData.number}</div>
                <div>Nonce: {blockData.nonce}</div>
                <div>Miner: {blockData.miner}</div>
                <div>Extra data: {blockData.extraData}</div>
                <div>Gas used: {blockData.gasUsed._hex}</div>
                <div>Transactions: {blockData.transactions.length}</div>
            </div>
            <button className="transaction-btn">See transactions</button>
        </div>
    )
}

export default Block

