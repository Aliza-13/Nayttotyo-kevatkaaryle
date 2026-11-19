import React from "react";

function Food() {
  return (
    <div className="food-page">
      <h1 className="food-title">Valmistus ja ohje</h1>
      <p className="food-subtitle">
        Tämä tieto on esimerkiksi erikoisruokavalioisille
      </p>

      <div className="food-container">
        <div className="food-card">
          <h2>Ainesosat</h2>
          <p className="food-description">Ainesosat:</p>
          <ul className="ingredient-list">
            <li>
              <p>Kaalia</p>
            </li>
            <li>
              <p>Porkkanaa</p>
            </li>
            <li>
              <p>Lasinuudelia</p>
            </li>
            <li>
              <p>Kananmunan keltuaista</p>
            </li>
            <li>
              <p>Soijaa</p>
            </li>
            <li>
              <p>Vehnäjauhoa</p>
            </li>
          </ul>
        </div>

        <div className="food-card">
          <h2>Valmistus/muuta tietoa</h2>

          <ol className="preparation-list">
            <li>
              <p>
                Kaalit, porkkana ja lasinuudeli ovat tuoreeltaan kaupasta
                ostettuja
              </p>
            </li>
            <li>
              <p>
                Ainesosat paistetaan ja kääritään taikinan sisään, jonka jälkeen
                niitä säilytetään jääkaapissa
              </p>
            </li>
            <li>
              <p>
                Myydään seuraavan päivän aikana tuoreita ja paistetaan
                rasvakeittimellä myyntipaikassa
              </p>
            </li>
          </ol>
        </div>
        <div className="food-tip">
          <h3>Pieni vinkki asiakkaalle</h3>
          <p>Kääryleitä voidaan lämmittää uudelleen mikrossa tai uunissa.</p>
        </div>
      </div>
    </div>
  );
}

export default Food;
