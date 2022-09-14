import React, { useState, useEffect } from "react";
import dataTrainingsDatas from "../api/services/services_Trainings";

function TrainingComponent() {
  const cardsTabXpPro = dataTrainingsDatas.httpGet().map((res) => (
    <div key={res.Id} className="col-sm-6">
      <div className="card m-3 text-white bg-primary">
        <img className="card-img-top" src={res.imgUrl} alt="Title" />
        <div className="card-body">
          <h4 className="card-title text-center">{res.IntituléDiplome}</h4>
          <p className="card-text">Ecole : {res.NomEcole}</p>
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

  // function resizeImg(url) {
  //   return <img className="card-img-top" src={res.imgUrl} alt="Title" />;
  // }

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <h1 className="text-center">Mes formations</h1>

          {cardsTabXpPro}
        </div>
      </div>
    </div>
  );
}

export default TrainingComponent;
