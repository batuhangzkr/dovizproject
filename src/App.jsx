import './App.css'
import Header from './components/header'
import Dolar from './components/dolar'
import Euro from './components/euro'
import Sterlin from './components/sterlin'
import axios from 'axios'
import { useEffect, useState } from 'react'




function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [sterlin, setSterlin] = useState(0);
  const [tl, setTl] = useState(0);
  const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_CEHmqOjzyLOhQsBzMkiUjSich2KFQeJfKF4unbrX";

  const getDoviz = async () => {
    const response = await axios.get(BASE_URL)
    setDolar(response.data.data.USD)
    setTl(response.data.data.TRY)
    setEuro(response.data.data.EUR)
    setSterlin(response.data.data.GBP)
  }
  useEffect(() => { getDoviz() })



  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(null);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      setInputValue(newValue);
    }
  };

  const valueprops = { valueprop: value }

  const handleButtonClick = () => {
    setValue(inputValue);
  };
  const props = { dolarprop: (value / tl), europrop: (value / tl) * euro, sterlinprop: (value / tl) * sterlin }

  return (
    <>

      <Header />
      <div>
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', paddingTop: '200px' }}>
          <Dolar props={props} />
          <Euro props={props} />
          <Sterlin props={props} />
        </div>
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '250px', padding: '20px', borderBlockColor: 'blue', border: '5px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <input
              style={{ fontSize: '30px', borderBlockColor: 'blue', height: '50px', width: '200px', border: '5px solid black' }}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Sayı girin"
            />
            <button style={{ marginTop: '10px', display: 'flex', border: '5px solid black', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={handleButtonClick}>Kaydet</button>
          </div >
        </div>
      </div>






      <style jsx>{`body {margin: 0px; padding: 0px;}`}</style>
    </>
  )
}

export default App
