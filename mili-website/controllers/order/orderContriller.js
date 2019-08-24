var pool = require('../../Database/config')
var fs = require('fs');
var realtime = require("firebase-admin");
var index = require('../../index.js');

var message = {
    //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'registration_token',

    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    },

    data: {

    }
};

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName, query) {
    var arr = query.split("restaurantSchemaName");
    return arr[0] + restaurantSchemaName + arr[1];
}

function bindrestaurantSchemaNameAndQueryForTemp(restaurantSchemaName, query) {
    var arr = query.split("restaurantSchemaName");
    return arr[0] + restaurantSchemaName + arr[1] + restaurantSchemaName + arr[2];
}

function getrestaurantSchemaNameAndQuery(result) {
    return result[0].restaurant_schema_name;
}

exports.index = function (req, res) {
    var restaurantId = req.query.restaurantId;
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = "select DISTINCT fod.order_id, fod.order_food_cost, fod.table_id, fod.order_status, rfm.food_name from " + restaurantSchemaName + ".food_order_detail fod INNER JOIN " + restaurantSchemaName + ".restaurant_food_menu rfm ON " + restaurantSchemaName + ".fod.food_id=" + restaurantSchemaName + ".rfm.food_id";
            pool.query(sql_query_1, function (err, result) {
                if (!!err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            });
        }
    });
};

exports.getRestaurantOrder = function (req, res) {
    var restaurantId = req.query.restaurantId;
    var responseJson = [
        { 'order_Id ': 'break snacks', 'table_No': 'img/recype/recype-1.jpg', 'food_ID': 'name', 'food_name': '$32', 'food_category': 'desc', 'comments': '4' },
        { 'order_Id ': 'break snacks', 'table_No': 'img/recype/recype-1.jpg', 'food_ID': 'name', 'food_name': '$32', 'food_category': 'desc', 'comments': '4' }
    ];
    res.json(responseJson);
};

exports.updateFoodOrderStatus = function (request, response) {
    var restaurantId = request.query.restaurantId;
    var orderID = request.query.order_id;
    var orderStatus = request.query.order_status;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var restaurantOrderDetailsByOrderStatusAndFoodOrderIdQuery = bindrestaurantSchemaNameAndQuery(restaurantSchemaName, JSON.parse(query).restaurantOrderDetailsByOrderStatusAndFoodOrderIdQuery);
            pool.query(restaurantOrderDetailsByOrderStatusAndFoodOrderIdQuery, [orderStatus, orderID], function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    pool.query('SELECT order_id FROM ' + restaurantSchemaName + '.food_order_detail where food_order_id = ?', [food_order_id], function (error, rows, fields) {
                        if (!!error) {
                        } else {
                            pool.query('CALL mili_global_schema.rejectFoodorder(?,?)', [rows[0].order_id, restaurantSchemaName], function (error, rows, fields) {
                                if (!!error) {
                                } else {

                                }
                            });
                        }
                    });
                    var sql_query_1 = 'SELECT fcm_key FROM mili_global_schema.global_user where user_email = (SELECT user_identifier FROM ' + restaurantSchemaName + '.order_detail WHERE order_id =?);';

                    pool.query(sql_query_1, [orderID], function (error, rows, fields) {
                        if (!!error) {

                        } else {
                            var fcm_key = rows[0].fcm_key;
                            message.to = fcm_key;
                            index.fcmDef.send(message, function (err, response) {
                                if (err) {
                                    console.log("Something has gone wrong!" + err);
                                } else {
                                    console.log("Successfully sent with response: ", response);
                                    console.log(response.results[0].error);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

exports.updateOrderStatus = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var orderID = request.query.order_id;
    var orderStatus = request.query.order_status;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateOrderStatus = bindrestaurantSchemaNameAndQuery(restaurantSchemaName, JSON.parse(query).updateOrderStatus);
            pool.query(updateOrderStatus, [orderStatus, orderID], function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    index.socketDef.sockets.emit('broadcast_update_order_status_webportal', {
                        order_id: orderID,
                        order_status: orderStatus,
                        restaurant_id: restaurantId
                    });

                    var sql_query_1 = 'SELECT fcm_key FROM mili_global_schema.global_user where user_email = (SELECT user_identifier FROM ' + restaurantSchemaName + '.order_detail WHERE order_id =?);';

                    pool.query(sql_query_1, [orderID], function (error, rows, fields) {
                        if (!!error) {
                            throw error;
                        } else {
                            var fcm_key = rows[0].fcm_key;
                            message.to = fcm_key;
                            message.data.orderID = orderID;
                            message.data.orderStatus = orderStatus;
                            console.log(message);
                            index.fcmDef.send(message, function (err, response) {
                                if (err) {
                                    console.log("Something has gone wrong!" + err);
                                } else {
                                    console.log("Successfully sent with response: ", message);
                                }
                            });
                        }
                    });
                    response.send(result);
                }
            });
        }
    });
};

exports.updateOrderPayStatus = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var orderID = request.query.order_id;
    var order_pay_Status = request.query.order_pay_Status;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateOrderPayStatus = bindrestaurantSchemaNameAndQuery(restaurantSchemaName, JSON.parse(query).updateOrderPayStatus);
            pool.query(updateOrderPayStatus, [order_pay_Status, orderID], function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    response.send(result);

                    var sql_query_1 = 'SELECT fcm_key FROM mili_global_schema.global_user where user_email = (SELECT user_identifier FROM ' + restaurantSchemaName + '.order_detail WHERE order_id =?);';

                    pool.query(sql_query_1, [orderID], function (error, rows, fields) {
                        if (!!error) {

                        } else {
                            var fcm_key = rows[0].fcm_key;
                            message.to = fcm_key;
                            message.data.orderID = orderID;
                            message.data.orderPayStatus = order_pay_Status;
                            console.log(message);
                            index.fcmDef.send(message, function (err, response) {
                                if (err) {
                                    console.log("Something has gone wrong!" + err);
                                } else {
                                    console.log("Successfully sent with response: ", message);
                                }
                            });
                        }
                    });
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
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateFoodRecommended = bindrestaurantSchemaNameAndQuery(restaurantSchemaName, JSON.parse(query).updateFoodRecommended);
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
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var getFoodByOrderId = bindrestaurantSchemaNameAndQueryForTemp(restaurantSchemaName, JSON.parse(query).getFoodByOrderId);
            pool.query(getFoodByOrderId, [orderId], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
}

exports.getFoodByOrder = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var orderId = request.query.orderId;
    var sequenceNo = request.query.sequence_no;
    console.log(orderId + "------ " + sequenceNo);
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var getFoodByOrder = bindrestaurantSchemaNameAndQueryForTemp(restaurantSchemaName, JSON.parse(query).getFoodByOrder);
            console.log("SELECT T1.food_order_id, T1.order_food_cost, T1.user_identifier, T1.table_id, T1.order_status, T1.offer_id, T1.restaurant_food_id, T1.food_customization_comments, T1.food_order_priority, T1.food_count, T1.order_id, T1.user_created, T1.user_updated,T2.restaurant_food_menu_id, T2.food_id, T2.food_name, T2.food_price, T2.food_quantity, T2.is_veg, T2.menu_category_id, T2.menu_category, T2.is_customizable,T2.food_description, T2.is_special_for_today, T2.ready_in, T2.food_likes, T2.is_available FROM " + restaurantSchemaName + ".food_order_detail AS T1 inner join " + restaurantSchemaName + ".restaurant_food_menu AS T2 ON T1.restaurant_food_id =T2.restaurant_food_menu_id and T1.order_id = ? and T1.food_order_sequence_no = ?");
            pool.query("SELECT T1.food_order_id, T1.order_food_cost, T1.user_identifier, T1.table_id, T1.order_status, T1.offer_id, T1.restaurant_food_id, T1.food_customization_comments, T1.food_order_priority, T1.food_count, T1.order_id, T1.user_created, T1.user_updated,T2.restaurant_food_menu_id, T2.food_id, T2.food_name, T2.food_price, T2.food_quantity, T2.is_veg, T2.menu_category_id, T2.menu_category, T2.is_customizable,T2.food_description, T2.is_special_for_today, T2.ready_in, T2.food_likes, T2.is_available FROM " + restaurantSchemaName + ".food_order_detail AS T1 inner join " + restaurantSchemaName + ".restaurant_food_menu AS T2 ON T1.restaurant_food_id =T2.restaurant_food_menu_id and T1.order_id = ? and T1.food_order_sequence_no = ?", [orderId, sequenceNo], function (err, result) {
                if (err) { throw err; }
                else {
                    console.log(result);
                    response.send(result);
                }
            });
        }
    });
}

exports.updateFoodOrderStatus = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var food_order_id = request.query.order_id;
    var orderStatus = request.query.order_status;
    var sequenceNo = request.query.sequence_no;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, [restaurantId], function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var updateFoodOrderStatus = bindrestaurantSchemaNameAndQuery(restaurantSchemaName, JSON.parse(query).updateFoodOrderStatus);
            pool.query(updateFoodOrderStatus, [orderStatus, food_order_id], function (err, result) {
                if (err) {
                    throw err;
                }
                else {
                    pool.query('SELECT order_id FROM ' + restaurantSchemaName + '.food_order_detail where food_order_id = ?', [food_order_id], function (error, rows, fields) {
                        if (!!error) {
                        } else {
                            pool.query('CALL mili_global_schema.rejectFoodorder(?,?)', [rows[0].order_id, restaurantSchemaName], function (error, rows, fields) {
                                if (!!error) {
                                    throw error;
                                } else {
                                    index.socketDef.sockets.emit('broadcast_update_food_order_status_webportal', {
                                        food_order_id: food_order_id,
                                        order_status: orderStatus,
                                        restaurant_id: restaurantId
                                    });
                                    response.send({
                                        "code": 400,
                                        "success": "1"
                                    })
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};

exports.getFoodAnalytics = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var orderId = request.query.orderID;
    var responseJson = {};
    let query = fs.readFileSync('Database/query.json');
    var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
    pool.query(restaurantSchemaNameQuery, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
            var getFoodByOrderId = bindrestaurantSchemaNameAndQueryForTemp(restaurantSchemaName, JSON.parse(query).getFoodAnalytics);
            pool.query(getFoodByOrderId, [orderId], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
}