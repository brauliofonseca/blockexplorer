import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import BlockContainer from './components/BlockContainer';
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
const NUM_BLOCK = 20

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    async function getBlockData() {
      // Set blockNumber from the latest block
      setBlockNumber(await alchemy.core.getBlockNumber());
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

  return (
    <div className="App">
      <div className="App-header">Block Explorer</div>
      <BlockContainer blocks={blocks}/>
    </div>
  )
}

export default App;
