import { useState } from "react";
import "./styles.css";

const fooddb = {
  chinese: [
    { name: "Chilli Paneer", rating: "3✨", desc:"Paneer, green chili sauce, soy sauce, free, sesame oil" },

    { name: "Honey Chilli Potato", rating: "3.6✨",desc:"Aloo, apple cider vinegar, rice flour, bell peppers, chilli sauce" },
    { name: "DimSums", rating: "3.5✨",desc:"a large range of small Chinese dishes that are traditionally enjoyed in restaurants for breakfast and lunch." }
  ],
  italian: [
    { name: "Pizza", rating: "4.1✨", 
    desc:" dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients" },
    { name: "Raviolli", 
    rating: "4.7✨",
    desc:"Italian dumpling that's typically stuffed with ricotta, meat, cheese, and vegetables. " },
    { name: "White Sauce Pasta" , rating: "3.9✨",desc:" yummy italian creamy white sauce pasta which will make you fall in love"}
  ],
  northIndian: [
    { name: "Chole Bhatoore", rating: "3✨" ,desc:" food dish popular in the Northern areas of the Indian subcontinent."},
    { name: "Dahi Bhalla", rating: "3.2✨" ,desc:"Dahi vada is a type of chaat (snack) originating from the Indian subcontinent and popular throughout South Asia."},
    { name: "Dal Makhani", rating: "3.5✨",desc:"dish originating in New Delhi, India. It is a modern take on the age-old Urad ki Dal" }
  ],
  southIndian: [{ name: "Dosa", rating: "3.6✨",desc:"a thin pancake or crepe, originating from South India, made from a fermented batter predominantly consisting of lentils and rice." }, 
  { name: "Idli", rating: "3.8✨",desc:" a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India" }, 
  { name: "Sambhar Vada", rating: "4✨",desc:"a traditional South Indian delicacy prepared using black lentils or urad dal batter." }]
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
              key={food}
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
              <div style={{ fontSize: "larger" }}> {food.name} {food.rating}
              {food.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
