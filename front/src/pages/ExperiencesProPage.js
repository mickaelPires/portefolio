import React, { useState, useEffect } from "react";
import services_ExperiencesPro from "../api/services/services_ExperiencesPro";

function ExperiencesProPage() {
  const cardsTabXpPro = services_ExperiencesPro.httpGet().map((res) => (
    <div key={res.Id} className="col-sm-6">
      <div className="card m-3 text-white bg-primary">
        {/* <img className="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div className="card-body">
          <h4 className="card-title text-center">{res.NomEntreprise}</h4>
          <p className="card-text">Poste : {res.Poste}</p>
          <p className="card-text">
            <span>Date : {res.DateDebut}</span> -
            {!res.DateFin ? (
              <span> en cours</span>
            ) : (
              <span> {res.DateFin} </span>
            )}
          </p>
          <p className="card-text">Ville : {res.Ville}</p>
          <p className="card-text">Pays : {res.Pays}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <h1 className="text-center">Mes Experiences Pro</h1>

          {cardsTabXpPro}
        </div>
      </div>
    </div>
  );
}

export default ExperiencesProPage;
