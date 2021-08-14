import { useState } from "react";
import "./styles.css";

const fooddb = {
  chinese: [
    { name: "Chilli Paneer", rating: "3" },

    { name: "Honey Chilli Potato", rating: "3" },
    { name: "DimSums", rating: "3" }
  ],
  italian: [
    { name: "Pizza", rating: "3" },
    { name: "Raviolli", rating: "3" },
    { name: "White Sauce Pasta" , rating: "3"}
  ],
  northIndian: [
    { name: "Chole Bhatoore", rating: "3" },
    { name: "Dahi Bhalla", rating: "3" },
    { name: "Dal Makhani", rating: "3" }
  ],
  southIndian: [{ name: "Dosa", rating: "3" }, 
  { name: "Idli", rating: "3" }, 
  { name: "Sambhar Vada", rating: "3" }]
};

export default function App() {
  const [selectfood, setfood] = useState("southIndian");
  function foodClickHandler(foodtype) {
    setfood(foodtype);
  }

  return (
    <div className="App">
      <h1> Are you a foodie ?</h1>
      <p
        style={{
          fontSize: "24px"
        }}
      >
        Have a look at my favourite food from my favourite cuisines
      </p>

      <div>
        {Object.keys(fooddb).map((foodtype) => (
          <button
            onClick={() => foodClickHandler(foodtype)}
            style={{
              cursor: "pointer",
              background: "#F87171",
              color: "black",
              borderRadius: "0.3rem",
              border: "none",
              height: "3rem",
              width: "10rem",
              fontSize: "20px",
              padding: "4rem 1 rem",
              margin: "1rem 0.5rem",
              hover: "blue"
            }}
          >
            {foodtype}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {fooddb[selectfood].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                alignContent: "center",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.3rem",
                backgroundColor: "#FEE2E2",
                border: "none"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
