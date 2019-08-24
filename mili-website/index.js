var express = require("express");
var mysql = require("mysql");
var path = require("path");
var logger = require("morgan");
var ejs = require("ejs");
var https = require("https");
var context = require("request-context");
var serviceAccount1 = require(__dirname + "/firebase_key/test-6d54b-firebase-adminsdk-1fxtq-d4815dc7f4.json");
var routes = require("./controllers/admin/admin.js");
const bodyParser = require("body-parser");
const log = require("node-file-logger");
const jwtLogin = require("jwt-login");
const roles = require("user-groups-roles");
var AWS = require("aws-sdk");
AWS.config.loadFromPath("aws_config.json");
var multiparty = require("multiparty");
var http = require("http");
var util = require("util");
var fs = require("file-system");
var session = require("express-session");
var FCM = require("fcm-node");
var dateFormat = require("dateformat");
var server = http.createServer(app);
var socket = require("socket.io");
var pool = require("./Database/config");



var app = express();


app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use("/miliadmin", routes);

app.use(logger("dev"));

app.use(express.static("./views"));

app.use(context.middleware("req"));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());



//GET ALL FOOD ITEMS
app.get("/get_all_dishes", function (request, response) {
    var globalFoodQuery =
        "SELECT food_ingredients,variations,food_taste,cuisine,is_veg,food_global_id, food_description, food_img_url,food_name, food_taste, alternate_names,other_facts,origin_place FROM mili_global_schema.global_food_items ORDER BY RAND ( ) LIMIT 50";
    pool.query(globalFoodQuery, function (error, result) {
        if (error) {
            log.Error("Error is " + error);
        } else {
            console.log("data from result " + result);
            response.json(result);
        }
    });
});


app.get("/get_live_news", function (request, response) {
    var last_id = request.query.last_id;

   
    var getNewsQuery =
        "SELECT * FROM mili_global_schema.feeds_news where id_feeds_news >= ?";

    pool.query(getNewsQuery, last_id, function (error, results) {
        if (error) { } else {
            var totalNewsItemCount = results.length;

            response.json({
                total_count: totalNewsItemCount,
                food_feeds: results
            });
        }
    });
});

app.get("/get_restaurants_for_global_food", async function (request, response) {
    var food_id = request.query.food_id;
    var restaurantSchemaName;
    var foodPrice;
    var restaurantDetails = [];
    var getAllRelatedRestaurantsForFoodId =
        "SELECT restaurant_schema_name, food_restaurant_item_price from mili_global_schema.global_restaurant_food_item  where global_food_id = ?";
    console.log("User EMail " + food_id);
    try {
        var rows = await pool.query(getAllRelatedRestaurantsForFoodId, [food_id]);
        if (rows.length > 0) {
            for (var i = 0; i < rows.length; i++) {
                restaurantSchemaName = rows[i].restaurant_schema_name;
                foodPrice = rows[i].food_restaurant_item_price;
                try {
                    var getRestaurantDetails =
                        "SELECT restaurant_start_time,restaurant_id,restaurant_city,restaurant_end_time,restaurant_name,restaurant_address,restaurant_sublocality,restaurant_locality,restaurant_landmark,restaurant_rating,restaurant_is_pure_veg FROM mili_global_schema.global_restaurants where restaurant_schema_name = ?";

                    var restaurantData = await pool.query(getRestaurantDetails, [
                        restaurantSchemaName
                    ]);
                    restaurantData.map(item => (item.food_price = foodPrice));
                    restaurantDetails.push(restaurantData[0]);
                    console.log(
                        "restaurant data " + foodPrice + restaurantDetails.toString
                    );
                } catch (Error) {
                    console.log("Inner Error " + Error);
                }
            }
            response.json(restaurantDetails);
        } else {
            response.json([]);
        }
    } catch (Error) {
        console.log("Outer error " + Error);
    }
});



//Get food dishes based on text search
app.get("/search_query_results", async function (request, response) {
    var resultItems = [];
    var search_query = request.query.search_query;
    /*var getRestaurants =
        "SELECT restaurant_id,restaurant_name,restaurant_locality,restaurant_city,restaurant_cost_two,restaurant_rating,cuisines,restaurant_images_url,restaurant_is_pure_veg FROM mili_global_schema.global_restaurants WHERE  restaurant_name like " +
        pool.escape("%" + search_query + "%") +
        " or restaurant_locality like " +
        pool.escape("%" + search_query + "%") +
        " or cuisines like " +
        pool.escape("%" + search_query + "%");*/
    var getFoodItems =
        "SELECT is_veg,food_global_id, food_name FROM mili_global_schema.global_food_items WHERE food_name like " +
        pool.escape("%" + search_query + "%") +
        " or cuisine like " +
        pool.escape("%" + search_query + "%");

    try {
        //var restaurantData = await pool.query(getRestaurants);
        var foodData = await pool.query(getFoodItems);

        //resultItems.push(restaurantData);
        resultItems.push(foodData);
        response.json(resultItems);
    } catch (Error) {
        console.log(" something went wrong for generic search " + Error);
        response.json(resultItems);
    }
});



//for https running on port 80
var servercreate = app.listen(80, function(error) {
 if (!!error) log.Error("error while starting server", "app", "listen");
 else log.Info("Server started and Listening to the port 80");
 if (process.send) {
   process.send("online");
 }
});


module.exports = app;