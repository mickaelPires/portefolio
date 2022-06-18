import React, { Component } from "react";
import photoCv from "../assets/images/photoCv.png";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { age: 34, dateEmmengamentMarseille: 1 };
  }

  render() {
    return (
      <div>
        <div className="text-center mx-5">
          <h1>Bienvenue sur mon Portefolio</h1>
        </div>

        <div className="my-5 text-center">
          <img src={photoCv} />
        </div>

        <div className="text-justify m-3 m-sm-5">
          <p>
            Présention rapide : Je m'appelle Mickael, j'ai {this.state.age} ans
            et je suis passionné d'informatique
          </p>

          <p>
            Ce portefolio a pour but de vous montrer mon parcours pro, mes
            diverses formations, mes compétences informatiques et traverses
            acquises, ainsi que mes hobbies.
          </p>
          <p>Il a été réalisé en reactJS/boostrap5 pour la partie front</p>
        </div>
        {/* <p>Je m'appelle Mickael, j'ai {this.state.age} ans</p>
        <p>
          J'habite sur Marseille depuis {this.state.dateEmmengamentMarseille} an
        </p>
        <p>Je suis passionné d'informatique depuis mon adolescance</p>
        <p> Apres avoir travaillé durant 3 ans à la Caf de Paris</p>
        <p>
          J'ai vécu 3 années en Australie, de 2016 à 2019 ce qui m'a permis
          d'apprendre l'anglais
        </p>
        <p>
          {" "}
          A mon retour de cette incroyable experience, j'ai décidé de reprendre
          mes études afin de faire de ma passion, mon métier
        </p> */}
      </div>
    );
  }
}

export default HomePage;
