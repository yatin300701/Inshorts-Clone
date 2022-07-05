import React from "react";
import categories from "../data/categories";
import "../css-files/NewsBody.css";

function handle(car) {
  console.log(car);
}

export default function NewsBody({ setCategory }) {
  return (
    <>
      <ul>
        {categories.map((car) => {
          return (
            <li
              onClick={() => {
                setCategory(car);
              }}
              key={car}
            >
              <a> {car}</a>
              <br />
            </li>
          );
        })}
      </ul>
    </>
  );
}
