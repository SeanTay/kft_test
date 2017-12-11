var recipes = [
  {
    name: "milk tea",
    medium: {
      no_topping: {

      },
      one_topping: [
        {
          name: "sugar",
          qty: 1.5,
          unit: "oz"
        },
        {
          name: "milk_powder",
          qty: 2,
          unit: "scoop"
        },
        {
          name: "ice",
          size: "A"
        },
        {
          name: "black_tea",
          qty: "fill"
        }
      ],
      two_topping: {

      }
    },
    large: {},
    hot: {}
  }
]

var milk_tea = [
  {
    name: "sugar",
    qty: 1.5,
    unit: "oz"
  },
  {
    name: "milk_powder",
    qty: 2,
    unit: "scoop"
  },
  {
    name: "ice",
    size: "A"
  },
  {
    name: "black_tea",
    qty: "fill"
  }
]
debugger;
//each recipe will be consist of quantity, unit, ingredient
function Recipe(qty, unit, ingredient) {
  this.quanity = qty;
  this.unit = unit;
  this.ingredient = ingredient;
}



//put together all the recipe and construct an arraw of objects
var Drink = [];

function Make_Drink() {
  var recipe_1 = new Recipe("1.5", "oz", "sugar");
  var recipe_2 = new Recipe("2", "cup", "milk powder");
    Drink.push(recipe_1);
    Drink.push(recipe_2);
    console.log(Drink);
}

Make_Drink();

$("#submit-btn").click(function(e){
  e.preventDefault();
  checkRecipe();
})
//check function the drink to the correct recipe
function checkRecipe() {
  console.log("checkRecipe");
}

//take the first object, find the name, look for the name, compare each item
//take the second object, find the name, look for the name, compare each item
//take the third object, find the name, look for the name, compare each item


//namespacing each fieldset

//dom minpulations
var form = document.getElementById("formRecipes");
var fieldsetID = 1;


$("#add-btn").click(function(e){
  e.preventDefault();
  var fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "ingredient_" + fieldsetID);

  var divQty = document.createElement("div");
  divQty.innerHTML = 'Quantity: <input id="quantity" type="text"><br>'

  var divUnit = document.createElement("div");
  divUnit.innerHTML = 'Unit: <input id="unit" type="text"><br>'

  var divIngredient = document.createElement("div");
  divIngredient.innerHTML = 'Ingredient: <input id="ingredient" type="text">'

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("value", fieldsetID);
  btnRemove.setAttribute("class", "remove-btn");
  btnRemove.innerHTML = "Remove";


  fieldset.appendChild(divQty);
  fieldset.appendChild(divUnit);
  fieldset.appendChild(divIngredient);
  fieldset.appendChild(btnRemove);
  form.appendChild(fieldset);

  fieldsetID += 1;
})
$("#formRecipes").on("click", ".remove-btn", function(e){
  e.preventDefault();
  var divToRemove = document.getElementById("ingredient_" + this.value);
  form.removeChild(divToRemove);
})

//end of dom minipulation
