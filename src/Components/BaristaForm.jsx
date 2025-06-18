import React, {Component, useState} from "react";
const BaristaForm = () => {
  const onCheckAnswer = (event) => {

  }

  const onNewDrink = (event) => {

  }
  
  return (

    <div>
        <form>
            <h2>Hi, I'd like to order a:</h2>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
            <button type="new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
        </form>
    </div>
  );
  
};

export default BaristaForm;