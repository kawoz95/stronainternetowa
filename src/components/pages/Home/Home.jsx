import React from "react";

const Home = () => (
  <main>
    <section className="opening">
      <div className="opening__content">
        <h2 className="opening__header">Witaj!</h2>
        <p className="opening__heading">Otwórz bramę i przejrzyj naszą ofertę</p>
        <a href="#" className="btn btn--primary btn--large">
          Otwórz by zobaczyć więcej
        </a>
      </div>
    </section>

    <section className="offers">
      <div className="offers__container container">
        <div className="offers__single offers__single--brama">
          <div className="offers__text">
            <h2 className="offers__title">Bramy i ogrodzenia</h2>
            <p className="offers__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="offers__image">
            <img src="images/brama.png" alt="zdjęcie bramy" />
          </div>
        </div>

        <div className="offers__single offers__single--balustrady">
          <div className="offers__text">
            <h2 className="offers__title">Balustrady</h2>
            <p className="offers__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="offers__image">
            <img src="images/balustrada.png" alt="balustrady" />
          </div>
        </div>

        <div className="offers__single offers__single--brama">
          <div className="offers__text">
            <h2 className="offers__title">Inne usługi ślusarsko-spawalnicze</h2>
            <p className="offers__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="offers__image">
            <img src="images/uslugi.png" alt="usługi ślusarsko spawalnicze" />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
