import './App.css';
import { useState, useEffect } from 'react'



function App() {


  const [serverData, setServerData] = useState([])
  const [selectDate, setSelectDate] = useState("2021-02-12")

  let API_Key = '9DRuPKFIe3FrWTh1qAYrHhi1HDkrkgbwDN3M0QZG'

    useEffect(() => {

          fetch(
            `https://api.nasa.gov/planetary/apod?date=${selectDate}&api_key=${API_Key}`
            )
          .then(response => response.json())
          .then(data => setServerData(data));

 
  }, [selectDate]);

  console.log(serverData)
  return (
    <div className="nasa">
      <input 
        type="date"
        onChange={(e) => {
          setSelectDate(e.target.value);
        }}/>
      <h1>{serverData.title}</h1>
      <div className="content">
        <img src={serverData.url}/>
        <p>{serverData.explanation}</p>
      </div>
      <div className="footer">
        <small>{serverData.copyright}</small>
        <small>{serverData.date}</small>
      </div>
    </div>
  );
}

export default App;
