import React from "react";
import styles from "./form.module.scss";

const form = () => {
  return (
    <>
     <form onSubmit={this.getWeather}>
       <input type="text" name="place" placeholder="city"/>
       <input type="text" name="temp" placeholder="temp"/>
       <button>Get Current Weather</button>
     </form>

    </>
  );
};

export default form;
