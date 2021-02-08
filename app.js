const searchedMeal = food =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealMenus(data.meals))
}

const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', ()=> {
    const inputMeal = document.getElementById('food').value;
    searchedMeal(inputMeal);
});

const displayMealMenus = menus => {
    const divOfMeals = document.getElementById('menus');

    menus.forEach(menu => {
        const divOfMeal = document.createElement('div');
        divOfMeal.className ='menu';
        const menuInfo =`
            <div onclick ='displayMenuDetail("${menu.strMeal}")'>
                <img class='menu-image' src="${menu.strMealThumb}">
                <h3 class='menu-name'>${menu.strMeal}</h3>

            </div>

        `;

        divOfMeal.innerHTML = menuInfo;
        divOfMeals.appendChild(divOfMeal);
    });
}



const displayMenuDetail = food =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderMenuInfo(data.meals[0]));
}

const renderMenuInfo = menu => {
    const allInfo = document.getElementById("meal-detail");

    allInfo.innerHTML =`
        <img class = 'menu-image' src = "${menu.strMealThumb}">
        <h3 class ='menu-name'>${menu.strMeal}</h3>
        <h5>Ingredients</h5>
        <li>${menu.strIngredient1}</li>
        <li>${menu.strIngredient2}</li>
        <li>${menu.strIngredient3}</li>
        <li>${menu.strIngredient4}</li>
        <li>${menu.strIngredient5}</li>
        <li>${menu.strIngredient6}</li>
        <li>${menu.strIngredient7}</li>
        <li>${menu.strIngredient8}</li>
        <li>${menu.strIngredient9}</li>
        <li>${menu.strIngredient10}</li>

    `;
}