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

var milk_tea_m = [
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
    size: "A",
    unit: "ice cup"
  },
  {
    name: "black_tea",
    qty: "n/a",
    unit: "n/a"
  }
]
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
  var fieldsetLength = $("fieldset").length;
  debugger;
  for (var i = 0; i < fieldsetLength; i ++) {

    var ingName = $("#ingName_" + i).val();
    var qty = $("#qty_" + i).val();
    var unit = $("#unit_" + i).val();
    debugger;
    //check to see if the sugar is correct
    for (var k = 0; k < milk_tea_m.length; k++) {
      if (milk_tea_m[k].name == ingName) {
        if (milk_tea_m[k].qty == qty) {
          console.log("correct")
        } else {
          console.log("incorrect qty")
        }
        if (milk_tea_m[k].unit == unit){
          console.log("correct")
        } else {
          console.log("incorrect unit")
        }
      } else {
        console.log("this ingredient doesn't exists");
      }
    }
  }

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
  divQty.innerHTML = 'Quantity: <input id="qty_' + fieldsetID + '" type="text"><br>'


  var divUnit = document.createElement("div");
  divUnit.innerHTML = 'Unit: <input id="unit_' + fieldsetID + '" type="text"><br>'


  var divIngName = document.createElement("div");
  divIngName.innerHTML = 'Ingredient: <input id="ingName_' + fieldsetID + '"type="text">'

  var btnRemove = document.createElement("button");
  btnRemove.setAttribute("value", fieldsetID);
  btnRemove.setAttribute("class", "remove-btn");
  btnRemove.innerHTML = "Remove";


  fieldset.appendChild(divQty);
  fieldset.appendChild(divUnit);
  fieldset.appendChild(divIngName);
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
