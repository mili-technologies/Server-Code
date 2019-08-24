//Insert new food in menu
var pool = require("../../Database/config");
var fs = require("fs");

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName, query) {
  var arr = query.split("restaurantSchemaName");
  return arr[0] + restaurantSchemaName + arr[1];
}

function getrestaurantSchemaNameAndQuery(result) {
  return result[0].restaurant_schema_name;
}

exports.addFoodInMenu = function(request, response) {
  var restaurantId = request.body.restaurantId;
  var food_name = request.body.food_name;
  var food_price = request.body.food_price;
  var food_quantity = request.body.food_quantity;
  var is_veg = request.body.is_veg;
  var menu_category = request.body.menu_category;
  var is_customizable = request.body.is_customizable;
  var food_description = request.body.food_description;
  var ready_in = request.body.ready_in;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  //var query_select2= 'select food_global_id from mili_global_schema.global_food_items where food_name = ?';
  pool.query(restaurantSchemaNameQuery, [restaurantId, food_name], function(
    err,
    result
  ) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var insertFoodInMenu = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).insertFoodInMenu
      );
      pool.query(
        insertFoodInMenu,
        [
          food_name,
          food_price,
          food_quantity,
          is_veg,
          menu_category,
          is_customizable,
          food_description,
          ready_in
        ],
        function(err, result) {
          if (err) {
            throw err;
          } else {
            response.redirect("/menu");
          }
        }
      );
    }
  });
};

//update old food items in menu
exports.updateFoodInMenu = function(request, response) {
  var restaurant_food_menu_id = request.body.restaurant_food_menu_id;
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var food_name = request.body.food_name;
  var food_price = request.body.food_price;
  var food_quantity = request.body.food_quantity;
  var is_veg = request.body.is_veg;
  var menu_category = request.body.menu_category;
  var is_customizable = request.body.is_customizable;
  var food_description = request.body.food_description;
  var ready_in = request.body.ready_in;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var updateFoodInMenuByFoodMenuId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).updateFoodInMenuByFoodMenuId
      );
      pool.query(
        updateFoodInMenuByFoodMenuId,
        [
          food_name,
          food_price,
          food_quantity,
          is_veg,
          menu_category,
          is_customizable,
          food_description,
          ready_in,
          restaurant_food_menu_id
        ],
        function(err, result) {
          if (err) {
            throw err;
          } else {
            response.redirect("/menu");
          }
        }
      );
    }
  });
};

//Delete food items from menu
exports.deleteFoodFromMenu = function(request, response) {
  var restaurant_food_menu_id = request.query.food_resturant_id;
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var deleteFoodInMenuByFoodMenuId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).deleteFoodInMenuByFoodMenuId
      );
      pool.query(
        deleteFoodInMenuByFoodMenuId,
        [restaurant_food_menu_id],
        function(err, result) {
          if (err) {
            throw err;
          } else {
            response.send(result);
          }
        }
      );
    }
  });
};

// List all food name for menu
exports.listFoodName = function(request, response) {
  var restaurant_food_menu_id = request.query.food_resturant_id;
  var food_name = request.query.food_name;
  var restaurantId = request.query.restaurantId;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var listFoodName = JSON.parse(query).listFoodName;
  pool.query(listFoodName, function(err, result) {
    if (err) {
      throw err;
    } else {
      response.json(result);
    }
  });
};

// List all food name for menu
exports.listFoodNameByRestaurantId = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var listFoodNameByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).listFoodNameByRestaurantId
      );
      pool.query(listFoodNameByRestaurantId, function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(result);
        }
      });
    }
  });
};
