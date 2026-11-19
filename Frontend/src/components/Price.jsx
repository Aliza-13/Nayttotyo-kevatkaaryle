import React from "react";

function Price() {
  return (
    <div className="price-page">
      <h1 className="price-title">Hinnasto</h1>

      <div className="price-container">
        {/* Vasen hinnasto */}
        <div className="price-box">
          <ul>
            <li>
              <p>3kpl: 5 euroa</p>
            </li>
            <li>
              <p> 6kpl: 10 euroa</p>
            </li>
            <li>
              <p>9kpl: 15 euroa</p>
            </li>
            <li>
              <p>12kpl: 20 euroa</p>
            </li>
            <li>
              <p>15kpl: 25 euroa</p>
            </li>
            <li>
              <p>18kpl: 30 euroa</p>
            </li>
            <li>
              <p>21kpl: 35 euroa</p>
            </li>
            <li>
              <p>24 kpl: 40 euroa</p>
            </li>
            <li>
              <p>27 kpl: 45 euroa</p>
            </li>
            <li>
              <p>30 kpl: 50 euroa</p>
            </li>
          </ul>
        </div>

        {/* Oikean puolen hinnasto */}
        <div className="price-box">
          <h2>Yksittäiset kappaleet</h2>
          <p className="price-description">Ilman kolmen kappaleen tarjousta</p>
          <ul>
            <li>
              <p>1kpl: 2 euroa</p>
            </li>
            <li>
              <p>2 kpl: 4 euroa</p>
            </li>
            <li>
              <p>4 kpl: 7 euroa</p>
            </li>
            <li>
              <p>5 kpl: 9 euroa</p>
            </li>
            <li>
              <p>7 kpl: 12 euroa</p>
            </li>
            <li>
              <p>8 kpl: 14 euroa</p>
            </li>
            <li>
              <p>10 kpl: 17 euroa</p>
            </li>
            <li>
              <p>11 kpl: 19 euroa</p>
            </li>
          </ul>
        </div>
      </div>

      <p className="price-info">
        Eli jos ostat vaikka 4 kpl saat viidellä eurolla sen kolme ja siihen
        lisätään 2 euroa siitä neljännestä kääryleestä
      </p>
      <p>Maksaa voi käteisellä tai mobilepaylla numeroon 0409659123 Alisa M</p>
    </div>
  );
}

export default Price;
