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
    name: "milk powder",
    qty: 2,
    unit: "scoop"
  },
  {
    name: "ice",
    qty: "A",
    unit: "ice cup"
  },
  {
    name: "black tea",
    qty: "n/a",
    unit: "n/a"
  }
]



//submission 
$("#submit-btn").click(function(e){
  e.preventDefault();
  var fieldsetLength = $("fieldset").length;
  var aIngList = [];
  var wrongAns = false;
  //check for missing ingredient
  var missingIngList = [];

  for (var missingIngIndex = 0; missingIngIndex < milk_tea_m.length; missingIngIndex++) {
    var missingIngName = milk_tea_m[missingIngIndex].name;
    missingIngList.push(missingIngName);
  }


  for (var i = 0; i < fieldsetLength; i ++) {
    var ingName = $("#ingName_" + i).val();
    var qty = $("#qty_" + i).val();
    var unit = $("#unit_" + i).val();
    //check to see if the sugar is correct
    for (var k = 0; k < milk_tea_m.length; k++) {
      //if recipes ing match the input

      //this can be switch statement
      if (milk_tea_m[k].name == ingName) {
        //remove it from missingIngList
        for (var j = 0 ; j < missingIngList.length ; j++) {
          if (missingIngList[j] == ingName){
            missingIngList.splice(j, 1);
          }
        }
        if (milk_tea_m[k].qty == qty) {
          console.log("correct")
        } else {
          console.log("incorrect qty")
          wrongAns = true;
        }
        if (milk_tea_m[k].unit == unit){
          console.log("correct")
        } else {
          console.log("incorrect unit")
          wrongAns = true;
        }
      } else {
        console.log(milk_tea_m[k].name + " ingredient doesn't exists");
      }
    }
  }
  if (wrongAns == false && missingIngList.length == 0) {
    alert ("answer is correct");
  } else {
    alert ("wrong")
    missingIngList = []
  }

})
//end of submission


//dom minpulations
var form = document.getElementById("formRecipes");
var fieldsetID = 1;


$("#add-btn").click(function(e){
  e.preventDefault();

  addFieldset(fieldsetID);

})

$("#formRecipes").on("click", ".remove-btn", function(e){
  e.preventDefault();
  var divToRemove = document.getElementById("ingredient_" + this.value);
  form.removeChild(divToRemove);
})

function addFieldset() {
  var fieldset = document.createElement("fieldset");
  fieldset.className += "fieldset-container";
  fieldset.setAttribute("id", "ingredient_" + fieldsetID);

  var divQty = addQtyField(fieldsetID);
  var divUnit = addUnitField(fieldsetID);
  var divIngName = addIngField(fieldsetID);

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
} 

function addQtyField(fieldsetID) {
  var divQty = document.createElement("div");
  divQty.className += "col-xs-4";
  divQty.innerHTML = '<input id="qty_' + fieldsetID + '" type="text"><br>';
  return divQty;
}

function addUnitField(filedsetID) {
  var divUnit = document.createElement("divUnit"); 
  divUnit.className += "col-xs-4";
  var selectEl = document.createElement("select")
  selectEl.className += "form-control";
  var unitArray = ["Choose...", "Oz", "cc", "scoop"]
  for (var unit = 0; unit < unitArray.length ; unit++) {
    var op = new Option();
    op.text = unitArray[unit];
    selectEl.options.add(op); 
  }
  divUnit.appendChild(selectEl);
  return divUnit;
}

function addIngField(fieldsetID) {
  var divIngName = document.createElement("div");
  divIngName.className += "col-xs-4";
  divIngName.innerHTML = '<input id="ingName_' + fieldsetID + '" type="text">';
  return divIngName;
}
//end of dom minipulation
