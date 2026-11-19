import React from "react";

function Places() {
  return (
    <div className="place-page">
      <h1 className="place-title">Paikat</h1>
      <div className="place-location">
        Tässä näytämme paikat missä myydään ja milloin
      </div>
      <div className="place-list">
        <div className="place-item">paikka 1</div>
        <div className="place-item">paikka 2</div>
        <div className="place-item">paikka 3</div>
        <div className="place-item">paikka 4</div>
        <div className="place-item">paikka 5</div>
      </div>

      <div className="place-map">
        <h2>Kartta myyntipaikoista</h2>

        <div className="map-image">
          <img src="/images/map.jpg" alt="kartta"></img>

          <span className="map-marker">📍</span>
        </div>
      </div>

      <div className="place-next">
        <h2>Merkintä seuraavasta myyntipäivästä</h2>

        <div className="next-info">
          <p>
            <strong>Päivämäärä:</strong> XX.XX.XX
          </p>

          <p>
            <strong>Myyntipaikka</strong> Paikka 1
          </p>

          <p>
            <strong>Kellonaika:</strong> XX:XX-XX.XX
          </p>
        </div>
      </div>
    </div>
  );
}

export default Places;
