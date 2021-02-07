fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then(response => response.json())
    .then(data => displayMeal(data))

const displayMeal = (x) => {
    const meal = x.meals
    const mealArea = document.getElementById('meal-area');
    meal.forEach(element => {
        // meal img
        const mealImg = element.strMealThumb;
        // meal name
        const mealName = element.strMeal;
        // create single div
        const singleMealDiv = document.createElement('div');
        // onclick this div
        singleMealDiv.onclick = `mealDetails(${x})`
        singleMealDiv.classList = 'singleMealDiv col-md-3';
        mealArea.appendChild(singleMealDiv);
        const mealInfo = `
            <img src="${mealImg}" alt="hello">
            <p>${mealName}</p>
            `
        singleMealDiv.innerHTML = mealInfo;
    });
}