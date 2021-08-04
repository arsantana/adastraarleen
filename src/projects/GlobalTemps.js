import React from 'react'

export default function GlobalTemps() {

  getData();

  async function getData() {
    const response = await fetch('../data/ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    console.log(data);
  }
  return(
    <div className="globalTemps">
      <p>Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies </p>
    </div>
  )
}