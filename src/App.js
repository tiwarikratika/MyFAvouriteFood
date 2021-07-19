import { useState } from "react";
import "./styles.css";

const fooddb = {
  chinese: [
    { name: "Chilli Paneer" },

    { name: "Honey Chilli Potato" },
    { name: "DimSums" }
  ],
  italian: [
    { name: "Pizza" },
    { name: "Raviolli" },
    { name: "White Sauce Pasta" }
  ],
  northIndian: [
    { name: "Chole Bhatoore" },
    { name: "Dahi Bhalla" },
    { name: "Dal Makhani" }
  ],
  southIndian: [{ name: "Dosa" }, { name: "Idli" }, { name: "Sambhar Vada" }]
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
              <div style={{ fontSize: "larger" }}> {food.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
