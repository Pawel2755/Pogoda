import Form from './Form';
import Result from './Result';
import './App.css';
import { Component } from 'react';
const APIKey = '872ba1fcbe9c210a6b5ee2bb87a058ae'

class App extends Component{

  state = {
    value: '',
    date: '',
    city: '',
    wschod: '',
    zachod: '',
    temperatura: '',
    cisnienie: '',
    wiatr: '',
    blad: false,
    strefa: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  obslugamiasta = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(odpowiedz => {
      if(odpowiedz.ok){
        return odpowiedz
      }
      throw Error("Nie udało się")
    }
      )
      .then(odpowiedz => odpowiedz.json() )
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState({
          blad: false,
          date: time,
          city: this.state.value,
          wschod: data.sys.sunrise,
          zachod: data.sys.sunset,
          temperatura: data.main.temp,
          cisnienie: data.main.pressure,
          wiatr: data.wind.speed,  
          strefa: data.timezone,

        })
      })
    .catch(blad => {
      console.log(blad)
      this.setState({
        blad: true,
        city: this.state.value
      })
    })

  }

  render() {
  return (
    <div className="App">
      <Form value={this.state.value} change={this.handleInputChange}
      submit={this.obslugamiasta}
      />
      <Result pogoda={this.state}/>
    </div>
  );
  }
}


export default App;
