// function to search meal recipe through API
function buttonClicked() {
    // variable for the input value from the search bar
    var food = document.getElementById('food_input').value;

    // this will fetch the API with the variable earlier
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        // meal data assigned to the variable named 'info'
        var info = data;

        // data that want to display (meal name)
        meal.innerHTML = "Food: " + info.meals[0].strMeal + "<br><br>";
        
        // data that want to display (location)
        loc.innerHTML = "From: " + info.meals[0].strArea + "<br><br>";
        
        // data that want to display (meal category)
        cat.innerHTML = "Category: " + info.meals[0].strCategory + "<br><br>";

        // data that want to display (ingredients)
        ingre.innerHTML = "Ingredients: " + "<br><br>" + info.meals[0].strIngredient1 + ", " + info.meals[0].strIngredient2 + ", " + info.meals[0].strIngredient3 + ", " + info.meals[0].strIngredient4 + ", " + info.meals[0].strIngredient5 + ", " + info.meals[0].strIngredient6 + ", " + info.meals[0].strIngredient7 + ", " + info.meals[0].strIngredient8 + ", " + info.meals[0].strIngredient9;

        // data that want to display (instructions)
        instruc.innerHTML = "Instructions: " + "<br><br>" + info.meals[0].strInstructions + "<br>";

        // data that want to display (more info)
        more.innerHTML = "For more information: " + "<br><br>" + info.meals[0].strSource + "<br><br>" + "Watch the video: " + "<br><br>" + info.meals[0].strYoutube

        
        // displays those data webpage through "id" as output
        document.getElementById("meal").innerHTML == meal.innerHTML;

        document.getElementById("loc").innerHTML == loc.innerHTML;

        document.getElementById("cat").innerHTML == cat.innerHTML;

        document.getElementById("ingre").innerHTML == ingre.innerHTML;

        document.getElementById("instruc").innerHTML == instruc.innerHTML;

        document.getElementById("more").innerHTML == more.innerHTML;
    })
}


