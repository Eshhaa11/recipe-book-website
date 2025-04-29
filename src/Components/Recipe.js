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
        image: "https://source.unsplash.com/300x200/?pancakes",
        ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking powder"],
        steps: ["Mix ingredients", "Pour on pan", "Cook until golden"],
      },
    {
        title: "Avocado Toast",
        image: "https://source.unsplash.com/300x200/?avocado-toast",
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
];