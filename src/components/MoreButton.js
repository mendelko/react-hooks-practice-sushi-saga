import React from "react";

function MoreButton({ sushiList, setSushiList }) {

  return <button onClick={() => setSushiList(sushiList.slice(4, 100))}>More sushi!</button>;
}

export default MoreButton;
