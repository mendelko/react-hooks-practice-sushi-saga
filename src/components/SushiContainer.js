import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiList, setSushiList, plates, setPlates, account, setAccount}) {

  function handleRemove(id){
    if (sushiList.find(s => s.id === id).price <= account){
      setSushiList(sushiList.filter(s => s.id !== id))
      setPlates([...plates, "koni"])
      setAccount(account - sushiList.find(s => s.id === id).price)
    }
  }

  const displaySushi = sushiList.slice(0, 4).map(sushi => {
    return <Sushi 
           key={sushi.id}
           name={sushi.name}
           image={sushi.img_url}
           price={sushi.price}
           created={sushi.created_at}
           sushi={sushi}
           handleRemove={handleRemove}
           />
  })
  return (
    <div className="belt">
      {displaySushi}
      <MoreButton sushiList={sushiList} setSushiList={setSushiList} />
    </div>
  );
}

export default SushiContainer;
