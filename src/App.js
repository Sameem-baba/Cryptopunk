import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Banner from './components/Banner';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunkData, setSelectedPunkData] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x83112a0560443caE2cEaCb6767C339767c45ad9c&order_direction=asc')
      setPunkListData(openseaData.data.assets);
    }

    return getMyNfts();
  }, [])

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Banner punkListData={punkListData} selectedPunk={selectedPunkData} />
            <Slider punkListData={punkListData} setSelectedPunkData={setSelectedPunkData} />
          </>
        )
      }
      
    </div>
  );
}

export default App;
