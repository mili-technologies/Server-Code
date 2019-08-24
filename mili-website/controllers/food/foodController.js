var pool = require('../../Database/config')
var fs = require('fs');

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName,query){
        var arr = query.split("restaurantSchemaName");
        return arr[0] + restaurantSchemaName + arr[1];
}

function getrestaurantSchemaNameAndQuery(result){
    return result[0].restaurant_schema_name;
}

exports.updateFoodStatus = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var orderID = request.query.restaurant_food_Id;
    var orderStatus = request.query.food_status;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateFoodAvailableStatus = bindrestaurantSchemaNameAndQuery(restaurantSchemaName,JSON.parse(query).updateFoodAvailableStatus);
            pool.query(updateFoodAvailableStatus, [orderStatus, orderID], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
};

exports.insertOrderDetails = function (request, response) {
    var restaurantId = request.query.restaurantId;
    var orderID = request.query.restaurant_food_Id;
    var recommendedStatus = request.query.food_recommended;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {            
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var restaurantOrderDetailsQuery = bindrestaurantSchemaNameAndQuery(restaurantSchemaName,JSON.parse(query).restaurantOrderDetailsQuery);
            pool.query(sql_query_1, [recommendedStatus, orderID], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
};

exports.updateFoodRecommended = function (request, response) {
    var resSession = request.session;    
    var restaurantId = resSession.restaurantId;
    var orderID = request.query.restaurant_food_Id;
    var recommendedStatus = request.query.food_recommended;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateFoodRecommended = bindrestaurantSchemaNameAndQuery(restaurantSchemaName,JSON.parse(query).updateFoodRecommended);
            pool.query(updateFoodRecommended, [recommendedStatus, orderID], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
};

exports.getFoodByorderId = function (request, response) { 
    var resSession = request.session;    
    var restaurantId = resSession.restaurantId;
    var orderId = request.query.orderID;
    var sequence_no = request.query.sequence_no;
    var responseJson = {};
    var restaurant_schema_name; 
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'SELECT * FROM ' + restaurantSchemaName + '.food_order_detail where order_id = ? and sequence_no = ?';
            pool.query(sql_query_1,[orderId],function (err, result) { 
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
}