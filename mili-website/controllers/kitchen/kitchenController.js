var pool = require('../../Database/config')
var fs = require('fs');

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName,query){
        var arr = query.split("restaurantSchemaName");
        return arr[0] + restaurantSchemaName + arr[1];
}

function getrestaurantSchemaNameAndQuery(result){
    return result[0].restaurant_schema_name;
}

exports.index = function (req, res) {    
    var restaurantId = req.query.restaurantId;    
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var restaurantOrderDetailsQuery = bindrestaurantSchemaNameAndQuery(restaurantSchemaName,JSON.parse(query).restaurantOrderDetailsQuery);
            pool.query(restaurantOrderDetailsQuery, function (err, result) {  
                if (!!err) {
                    res.json(err)
                } else {
                    res.json(result);
                }
            });
        }
    });
}