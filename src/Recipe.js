import React from 'react'

const Recipe = ({title,image,calories,ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} />
            <ul>
                {
                    ingredients.map(ingredient => (   
                        <li>{ingredient.text}</li>            
                    ))
                }
            </ul>
            <p>Total Calories: {calories}</p>
        </div>
    )
}

export default Recipe
