var pool = require("../../Database/config");
var fs = require("fs");

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName, query) {
  var arr = query.split("restaurantSchemaName");
  return arr[0] + restaurantSchemaName + arr[1];
}

function getrestaurantSchemaNameAndQuery(result) {
  return result[0].restaurant_schema_name;
}

//Get All Restaurant based on particular restaurant type
exports.getAllRestaurantsByRestaurantType = function(req, res) {
  var restaurantType = req.query.restaurantType.trim();
  let query = fs.readFileSync("Database/query.json");
  var getRestaurantsTypeQuery = JSON.parse(query).getRestaurantsTypeQuery;
  pool.query(getRestaurantsTypeQuery, restaurantType, function(error, result) {
    if (!!error) {
      log.Error(error);
    } else {
      res.json(result);
    }
  });
};

exports.sendRestaurant = function(req, res) {
  var isLogin = req.query.isLogin;
  var restaurantId = req.query.restaurantId;

  if (!!isLogin) {
    var responseJson = [
      {
        itemType: "break snacks",
        img: "img/recype/recype-1.jpg",
        itemName: "name",
        price: "$32",
        descriptions: "desc",
        rating: "4"
      },
      {
        itemType: "snacks",
        img: "img/recype/recype-2.jpg",
        itemName: "name",
        price: "$32",
        descriptions: "desc",
        rating: "4"
      }
    ];
    res.render("restaurantsFront", {
      jsondata: responseJson
    });
  } else {
    res.json({ message: "Please check the credentials" });
  }
};

exports.addRestaurantDetails = function(request, res) {
  restaurant_name = request.body.restaurant_name;
  restaurant_address = request.body.restaurant_address;
  restaurant_sublocality = request.body.restaurant_sublocality;
  restaurant_locality = request.body.restaurant_locality;
  restaurant_landmark = request.body.restaurant_landmark;
  restaurant_city = request.body.city;
  restaurant_State = request.body.stt;
  restaurant_contact = request.body.restaurant_contact;
  restaurant_zip_code = request.body.restaurant_zip_code;
  restaurant_email_id = request.body.restaurant_email_id;
  restaurant_start_time = request.body.restaurant_start_time;
  restaurant_end_time = request.body.restaurant_end_time;
  restaurant_cost_two = request.body.restaurant_cost_two;
  restaurant_description = request.body.restaurant_description;
  restaurant_is_pure_veg = request.body.restaurant_is_pure_veg;
  restaurant_type = request.body.restaurant_type;
  fssai_approved = request.body.fssai_approved;
  home_delivery = request.body.home_delivery;
  take_away = request.body.take_away;
  alcohol_in = request.body.alcohol_in;
  live_music = request.body.live_music;
  valet_parking = request.body.valet_parking;
  karaoke = request.body.karaoke;
  free_wifi = request.body.free_wifi;
  available_for_functions = request.body.available_for_functions;
  live_sports_screening = request.body.live_sports_screening;
  full_bar_available = request.body.full_bar_available;
  open_terrace = request.body.open_terrace;
  pay_first = request.body.pay_first;
  cuisines = request.body.cuisines;
  restaurant_pay_upi = request.body.restaurant_pay_upi;
  restaurant_IFSC_code = request.body.restaurant_IFSC_code;
  restaurant_GST_No = request.body.restaurant_GST_No;
  restaurant_GST_Rate = request.body.restaurant_GST_Rate;
  restaurant_acc_holder_name = request.body.restaurant_acc_holder_name;
  restaurant_acc_number = request.body.restaurant_acc_number;
  cuisines = cuisines.toString();
  restaurant_type = restaurant_type.toString();
  var query_select_lastschemaid =
    "SELECT SUBSTRING_INDEX(restaurant_schema_name,'_',-1) AS lastschemaid FROM mili_global_schema.global_restaurants order by restaurant_schema_name desc LIMIT 1";
  pool.query(
    query_select_lastschemaid,
    [
      restaurant_name,
      restaurant_address,
      restaurant_sublocality,
      restaurant_locality,
      restaurant_landmark,
      restaurant_city,
      restaurant_State,
      restaurant_contact,
      restaurant_zip_code,
      restaurant_email_id,
      restaurant_start_time,
      restaurant_end_time,
      restaurant_cost_two,
      cuisines,
      restaurant_description,
      restaurant_is_pure_veg,
      restaurant_type,
      restaurant_pay_upi,
      restaurant_IFSC_code,
      restaurant_acc_holder_name,
      restaurant_acc_number,
      fssai_approved,
      home_delivery,
      take_away,
      alcohol_in,
      live_music,
      valet_parking,
      karaoke,
      free_wifi,
      available_for_functions,
      live_sports_screening,
      full_bar_available,
      open_terrace,
      pay_first
    ],
    function(err, result) {
      if (err) throw err;
      else {
        var lsid = result[0].lastschemaid;
        lsid++;
        var query_select =
          "call mili_global_schema.add_res(002 , " +
          "'mili_" +
          lsid +
          "', 1 , ?,   0.00000000 ,   0.00000000 , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?,   5 ,   ?,   'https' ,   ? ,   ?,   ?,   ?,   ?,   ?, '2018-12-25 10:25:03',   '2018-12-25 10:25:03',   '10',   '20',   ?,   ?,   ?,  ?,   ?,   ?,   ?,   ?,   ?,   ?,   ? ,   ?,   ?,   ?,   ?)";
        pool.query(
          query_select,
          [
            restaurant_name,
            restaurant_address,
            restaurant_sublocality,
            restaurant_locality,
            restaurant_landmark,
            restaurant_city,
            restaurant_State,
            restaurant_contact,
            restaurant_zip_code,
            restaurant_email_id,
            restaurant_start_time,
            restaurant_end_time,
            restaurant_cost_two,
            cuisines,
            restaurant_description,
            restaurant_is_pure_veg,
            restaurant_type,
            restaurant_pay_upi,
            restaurant_IFSC_code,
            restaurant_acc_holder_name,
            restaurant_acc_number,
            fssai_approved,
            home_delivery,
            take_away,
            alcohol_in,
            live_music,
            valet_parking,
            karaoke,
            free_wifi,
            available_for_functions,
            live_sports_screening,
            full_bar_available,
            open_terrace,
            pay_first,
            restaurant_GST_No,
            restaurant_GST_Rate
          ],
          function(err, result) {
            if (err) throw err;
            else {
              var query_select1 =
                "CALL mili_global_schema.create_res_schema('mili_" +
                lsid +
                "')";
              pool.query(query_select1, async function(err, result) {
                if (err) throw err;
                else {
                  await createTrigger("mili_" + lsid);
                  pool.query(
                    "UPDATE mili_global_schema.global_user_restaurant SET restaurant_id = (SELECT restaurant_id FROM mili_global_schema.global_restaurants where restaurant_email_id = ?), email_id_verfied = 1 where user_email = ?",
                    [restaurant_email_id, restaurant_email_id],
                    function(err, result) {
                      if (err) throw err;
                      else {
                        pool.query(
                          "SELECT restaurant_id FROM mili_global_schema.global_user_restaurant where user_email = ?",
                          [restaurant_email_id],
                          function(err, result) {
                            if (err) throw err;
                            else {
                              request.session.restaurantId =
                                result[0].restaurant_id;
                              res.redirect("/menu");
                            }
                          }
                        );
                      }
                    }
                  );
                }
              });
            }
          }
        );
      }
    }
  );
};

async function createTrigger(DESTINATION_SCHEMA_NAME) {
  pool.query(
    "use " +
      DESTINATION_SCHEMA_NAME +
      "; CREATE DEFINER=`mili_dba`@`%` TRIGGER `" +
      DESTINATION_SCHEMA_NAME +
      "_restaurant_food_menu_BEFORE_INSERT` BEFORE INSERT ON `restaurant_food_menu` FOR EACH ROW BEGIN " +
      "SELECT DATABASE() as database_name from dual into @schemaName; " +
      "IF NOT exists (SELECT food_name from mili_global_schema.global_food_items where food_name = new.food_name)  " +
      "Then " +
      "INSERT INTO mili_global_schema.global_food_items(food_name,food_description,is_veg) VALUES (new.food_name, new.food_description,new.is_veg); " +
      "SET new.food_id = LAST_INSERT_ID(); " +
      "else " +
      "SET new.food_id = (SELECT food_global_id from mili_global_schema.global_food_items where food_name = new.food_name); " +
      "End if; " +
      "END",
    function(err, result) {
      if (err) throw err;
      else {
        pool.query(
          "use " +
            DESTINATION_SCHEMA_NAME +
            "; CREATE DEFINER=`mili_dba`@`%` TRIGGER `" +
            DESTINATION_SCHEMA_NAME +
            "_restaurant_food_menu_AFTER_UPDATE` AFTER UPDATE ON `restaurant_food_menu` FOR EACH ROW BEGIN " +
            "SELECT DATABASE() as database_name from dual into @schemaName; " +
            "UPDATE mili_global_schema.global_restaurant_food_item set food_restaurant_item_price=new.food_price where restaurant_schema_name = @schemaName and global_food_id = new.food_id; " +
            "END",
          function(err, result) {
            if (err) throw err;
            else {
              pool.query(
                "use " +
                  DESTINATION_SCHEMA_NAME +
                  "; CREATE DEFINER=`mili_dba`@`%` TRIGGER `order_detail_AFTER_INSERT` AFTER INSERT ON `order_detail` FOR EACH ROW BEGIN " +
                  "SELECT DATABASE() as database_name from dual into @schemaName; " +
                  "IF NOT exists (SELECT order_id from mili_global_schema.global_order_detail where order_id = new.order_id )  " +
                  "Then " +
                  "INSERT INTO mili_global_schema.global_order_detail(order_id,user_email,total_order_cost,table_id, restaurant_schema_name,payment_status,order_type, payment_mode,order_status,order_item_count, offer_indicator,order_offer_id, transaction_no, last_sequence_no) VALUES (new.order_id,new.user_identifier,new.total_order_cost,new.table_id, @schemaName,new.payment_status,new.order_type, new.payment_mode,new.order_status,new.total_order_count, new.offer_indicator,new.order_offer_id, new.transaction_no, new.sequence_no); " +
                  "else " +
                  "UPDATE mili_global_schema.global_order_detail set total_order_cost = new.total_order_cost, payment_status = new.payment_status, payment_mode = new.payment_mode, order_status = new.order_status, order_item_count = new.total_order_count, last_sequence_no = new.sequence_no where order_id = new.order_id; " +
                  "End if; " +
                  "END",
                function(err, result) {
                  if (err) throw err;
                  else {
                    pool.query(
                      "use " +
                        DESTINATION_SCHEMA_NAME +
                        "; CREATE DEFINER=`mili_dba`@`%` TRIGGER `restaurant_food_menu_AFTER_INSERT` AFTER INSERT ON `restaurant_food_menu` FOR EACH ROW BEGIN " +
                        "SELECT DATABASE() as database_name from dual into @schemaName; " +
                        "INSERT INTO mili_global_schema.global_restaurant_food_item(global_food_id,restaurant_schema_name,food_restaurant_item_price) VALUES (new.food_id, @schemaName,new.food_price); " +
                        "END",
                      function(err, result) {
                        if (err) throw err;
                        else {
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
}

exports.getRestaurantMenu = function(request, response) {
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
      var getRestaurantMenu = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getRestaurantMenu
      );
      pool.query(getRestaurantMenu, function(err, result) {
        if (err) {
          throw err;
        } else {
          response.send(result);
        }
      });
    }
  });
};

exports.getRestaurantFood = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var restaurant_food_Id = request.query.restaurant_food_Id;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var getRestaurantFood = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getRestaurantFood
      );
      pool.query(getRestaurantFood, [restaurant_food_Id], function(
        err,
        result
      ) {
        if (err) {
          throw err;
        } else {
          response.send(result);
        }
      });
    }
  });
};

exports.getGlobalRestaurantMenu = function(request, response) {
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var getGlobalRestaurantMenu = JSON.parse(query).getGlobalRestaurantMenu;
  pool.query(getGlobalRestaurantMenu, function(err, result) {
    if (err) {
      throw err;
    } else {
      response.send(result);
    }
  });
};

exports.setRestaurantSchema = function(request, response) {
  var restaurant_schema_name = request.query.restaurantSchemaName;
  var responseJson = {};
  var query_select = "CALL mili_global_schema.create_res_schema(?)";
  pool.query(query_select, [restaurant_schema_name], function(err, result) {
    if (err) throw err;
    else {
    }
  });
};

exports.getRestaurantDetails = function(request, response) {
  var restaurantId = request.query.restaurantId;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = result[0].restaurant_schema_name;
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var getRestaurantFoodPrice = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getRestaurantFoodPrice
      );
      var getRestaurantOffer = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getRestaurantOffer
      );
      var getRestaurantUserReview = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getRestaurantUserReview
      );
      pool.query(
        getRestaurantFoodPrice +
          ";" +
          getRestaurantOffer +
          ";" +
          getRestaurantUserReview,
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

exports.getRestaurantToken = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var responseJson = {};
  var token;
  let query = fs.readFileSync("Database/query.json");
  var getToken = JSON.parse(query).getToken;
  pool.query(getToken, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var token = result[0].token;
      token++;
      var updateToken = JSON.parse(query).updateToken;
      pool.query(updateToken, [token, restaurantId], function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(token--);
        }
      });
    }
  });
};

exports.getRestaurantId = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  response.json(restaurantId);
};

exports.getRestaurantTokenForUi = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var responseJson = {};
  var token;
  let query = fs.readFileSync("Database/query.json");
  var getToken = JSON.parse(query).getToken;
  pool.query(getToken, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      response.json(result[0].token);
    }
  });
};

exports.updatetoken = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var token = request.query.token;
  let query = fs.readFileSync("Database/query.json");
  var updateTokenByRestaurantId = JSON.parse(query).updateTokenByRestaurantId;
  pool.query(updateTokenByRestaurantId, [token, restaurantId], function(
    error,
    result
  ) {
    if (!!error) {
      log.Error(error);
    } else {
      response.json(result);
    }
  });
};

exports.getToken = function(request, response) {
  var restaurantId = request.query.restaurantId;
  let query = fs.readFileSync("Database/query.json");
  var getTokenByRestaurantId = JSON.parse(query).getTokenByRestaurantId;
  pool.query(getTokenByRestaurantId, [restaurantId], function(error, result) {
    if (!!error) {
      log.Error(error);
    } else {
      response.json(result);
    }
  });
};

exports.getOrderCount = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  var nowDate = new Date();
  var date =
    nowDate.getFullYear() +
    "-" +
    (nowDate.getMonth() + 1) +
    "-" +
    nowDate.getDate();
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var getOrderCountByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getOrderCountByRestaurantId
      );
      var getOrderCountPlacedByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getOrderCountPlacedByRestaurantId
      );
      var getOrderCountRejectedByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getOrderCountRejectedByRestaurantId
      );
      var getOrderCountServedByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getOrderCountServedByRestaurantId
      );
      var TotalOrderCount =
        getOrderCountByRestaurantId +
        ";" +
        getOrderCountPlacedByRestaurantId +
        ";" +
        getOrderCountRejectedByRestaurantId +
        ";" +
        getOrderCountServedByRestaurantId;
      pool.query(TotalOrderCount, [date], function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(result);
        }
      });
    }
  });
};

exports.getTotalOrderCost = function(request, response) {
  var resSession = request.session;
  var restaurantId = resSession.restaurantId;
  var responseJson = {};
  let query = fs.readFileSync("Database/query.json");
  var restaurantSchemaNameQuery = JSON.parse(query).restaurantSchemaNameQuery;
  var nowDate = new Date();
  var date =
    nowDate.getFullYear() +
    "-" +
    (nowDate.getMonth() + 1) +
    "-" +
    nowDate.getDate();
  pool.query(restaurantSchemaNameQuery, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = getrestaurantSchemaNameAndQuery(result);
      var getTotalOrderCostByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getTotalOrderCostByRestaurantId
      );
      var getTotalOrderCostPaidByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getTotalOrderCostPaidByRestaurantId
      );
      var getTotalOrderCostNotPaidByRestaurantId = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getTotalOrderCostNotPaidByRestaurantId
      );
      var totalOrderCost =
        getTotalOrderCostByRestaurantId +
        ";" +
        getTotalOrderCostPaidByRestaurantId +
        ";" +
        getTotalOrderCostNotPaidByRestaurantId;
      pool.query(totalOrderCost, [date], function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(result);
        }
      });
    }
  });
};

exports.getTotalOrderPAID = function(request, response) {
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
      var getTotalOrderPAID = bindrestaurantSchemaNameAndQuery(
        restaurantSchemaName,
        JSON.parse(query).getTotalOrderPAID
      );
      pool.query(getTotalOrderPAID, function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(result[0].totalOrderPAID);
        }
      });
    }
  });
};
