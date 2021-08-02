import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([]);
  const [plates, setPlates] = useState([]);
  const [account, setAccount] = useState(50);

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushiList(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer 
      plates={plates} 
      setPlates={setPlates} 
      sushiList={sushiList} 
      setSushiList={setSushiList} 
      setAccount={setAccount} 
      account={account}/>
      <Table plates={plates} account={account} />
    </div>
  );
}

export default App;
