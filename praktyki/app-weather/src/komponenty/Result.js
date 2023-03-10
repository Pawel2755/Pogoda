import React from "react";
import './Result.css'

const Result = props => {

    const {blad, city, temperatura, date, wschod, zachod, cisnienie, wiatr, strefa} = props.pogoda;

    let content = null;

    if(!blad && city) {

        const sunriseTime = new Date((wschod + strefa - 3600) * 1000).toLocaleTimeString();
        const sunsetTime = new Date((zachod + strefa - 3600) * 1000).toLocaleTimeString();
        content = (
            <div>
                <h3>Wyświetlanie wyników wyszukiwania dla miasta: <strong>{city}</strong></h3>
                <h4>Dane pogodowe aktualne na dzień i godzinę: {date} </h4>
                <h4>Bieżąca temperatura: {temperatura} &#176;C</h4>
                <h4>Wschód słońca w dzisiejszym dniu jest o godzinie: {sunriseTime}</h4>
                <h4>Zachód słońca w dzisiejszym dniu jest o godzinie: {sunsetTime}</h4>
                <h4>Bieżąca prędkość wiatru wynosi: {wiatr} m/s</h4>
                <h4>Aktualne ciśnienie atmosferyczne wynosi: {cisnienie} hPa</h4>
            </div>
        )
    }

    return (
        <div className="result">
            {blad ? `Nie mamy w bazie danych miasta: ${city}` : content}
        </div>
    );
}

export default Result;