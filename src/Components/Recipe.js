import { useState } from "react";
import "./Recipe.css";

const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Black pepper"],
        steps: ["Boil pasta", "Fry pancetta", "Mix eggs and cheese", "Combine all"],
    },
    {
        title: "Pancakes",
    
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking powder"],
        steps: ["Mix ingredients", "Pour on pan", "Cook until golden"],
      },
    {
        title: "Avocado Toast",
        
        ingredients: ["Bread", "Avocado", "Salt", "Lemon juice", "Chili flakes"],
        steps: ["Toast bread", "Mash avocado", "Season and spread"],
    },
    {
        title: "Bruschetta",

        ingredients: ["Baguette", "Tomatoes", "Garlic", "Basil", "Olive oil", "Salt"],
        steps: ["Toast baguette", "Top with tomato mixture", "Drizzle oil, serve fresh"],
      },
    {
        title: "Mango Smoothie",
    
        ingredients: ["Mango", "Yogurt", "Milk", "Honey", "Ice"],
        steps: ["Blend all ingredients until smooth", "Serve chilled"],
      },
      {
        title: "Chole Bhature",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Garam masala", "Flour", "Yogurt"],
        steps: [
          "Soak and boil chickpeas",
          "Prepare spicy tomato-onion gravy",
          "Mix dough and fry bhature",
          "Serve hot with chole",
        ],
      },
      {
        title: "Masala Dosa",
        
        ingredients: ["Rice", "Urad dal", "Potatoes", "Onion", "Mustard seeds", "Curry leaves"],
        steps: [
          "Prepare dosa batter with rice and dal",
          "Make potato filling with spices",
          "Spread dosa, add filling, fold and serve",
        ],
      },
];

    function Recipe() {
        const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div className="recipe-cont">
             {recipes.map((recipe, index) => (
             <div className="recipe-card" key={index}>
                     
                 <h3>{recipe.title}</h3>
                 <button
                   onClick={() =>
                    setExpandedIndex(index === expandedIndex ? null : index)
                  }
                >
                     {expandedIndex === index ? "Hide" : "Show"} Recipe
                     </button>
                     {expandedIndex === index && (
              <div className="recipe-details">
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <strong>Steps:</strong>
              <ol>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Recipe;