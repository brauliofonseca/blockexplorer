import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import BlockContainer from './components/BlockContainer';
import TransactionInfo from './components/TransactionInfo';
import './App.css';


// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

// Number of blocks retrieved from call
const NUM_BLOCK = 10

function App() {
  const [blocks, setBlocks] = useState([])
  const [selectedBlock, setSelectedBlock] = useState()

  useEffect(() => {
    async function getBlockData() {
      // Get latest block number
      const blockNumberTemp = await alchemy.core.getBlockNumber()

      // Get data for latest 20 blocks
      const blockDataList = []
      for (let i = 0; i < NUM_BLOCK; i+=1) {
        const blockData = await alchemy.core.getBlockWithTransactions(blockNumberTemp - i)
        blockDataList.push(blockData)
      }
      setBlocks(blockDataList)
    }
    getBlockData();
  }, []);

  useEffect(() => {
    console.log("Current block: " + selectedBlock)
  }, [selectedBlock])

  return (
    <div className="App">
      <div className="App-header">Block Explorer</div>
      <div className="App-menu">
        <div className="App-menu-blocks">Blocks</div>
        <div className="App-menu-accounts">Accounts</div>
      </div>
      <div className="App-data">
        <BlockContainer blocks={blocks} setSelectedBlock={setSelectedBlock}/>
        <TransactionInfo block={selectedBlock}/>
      </div>
    </div>
  )
}

export default App;
