import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { cocktails, loading } = useGlobalContext();

  const { id } = useParams();

  const cocktail = cocktails.find((item) => item.id === id);

  if (loading) {
    return <Loading />;
  } else {
    const { name, image, info, glass, instruction, ingredient } = cocktail;
    console.log(name);
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <div className="drink">
          <img src={image}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name: </span>
              {name}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instruction}
            </p>
            {/* <p>
              <span className="drink-data">ingredients:</span>
              {ingredient.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p> */}
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail;
