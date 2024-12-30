// Declare global variables to track the total intake
let totalCalories = 0;
let totalCarbs = 0;
let totalProteins = 0;
let totalFats = 0;

// Handle food entry submission
document.getElementById('add-food-entry').addEventListener('click', function() {
    const foodName = document.getElementById('food-name').value.trim();
    const calories = parseInt(document.getElementById('calories').value.trim());
    const carbs = parseInt(document.getElementById('carbs').value.trim());
    const proteins = parseInt(document.getElementById('proteins').value.trim());
    const fats = parseInt(document.getElementById('fats').value.trim());

    if (!foodName || isNaN(calories) || isNaN(carbs) || isNaN(proteins) || isNaN(fats)) {
        alert("Please fill out all fields.");
        return;
    }

    // Update the totals
    totalCalories += calories;
    totalCarbs += carbs;
    totalProteins += proteins;
    totalFats += fats;

    // Add food to the list
    addFoodToLog(foodName, calories, carbs, proteins, fats);

    //
