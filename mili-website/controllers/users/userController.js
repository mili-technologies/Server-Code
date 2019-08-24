//Insert new food in menu
var pool = require("../../Database/config");
var index = require("../../index.js");

exports.addNewUser = function(request, response) {
  var user_id = request.body.user_id;
  // var user_name = request.query.user_name;
  var first_name = request.body.first_name;
  var last_name = request.body.last_name;
  var user_email = request.body.user_email;
  var user_contact = request.body.user_contact;
  var user_role = request.body.user_role;
  var restaurant_entity = 1;
  var restaurant_name = request.body.restaurant_name;
  var restaurant_state = request.body.restaurant_state;
  var email_id_verfied = 200;
  var restaurant_city = request.body.restaurant_city;
  var restaurant_password = request.body.restaurant_password;
  var restaurant_uid = request.body.uid;
  var sess = request.session;
  var uid = sess.uid;

  if (uid != restaurant_uid) {
    response.send({
      code: 400,
      success: "0",
      data: "wrong security code"
    });
  } else {
    email_id_verfied = 0;

    var sql_query_1 =
      "INSERT INTO mili_global_schema.global_user_restaurant (first_name,last_name,user_email,user_contact,restaurant_entity,restaurant_state,restaurant_city,restaurant_name,password, email_id_verfied) VALUES (?,?,?,?,?,?,?,?,?,?)";
    index.bcryptDef.genSalt(index.saltRoundsDef, function(err, salt) {
      index.bcryptDef.hash(restaurant_password, salt, function(err, hash) {
        pool.query(
          sql_query_1,
          [
            first_name,
            last_name,
            user_email,
            user_contact,
            restaurant_entity,
            restaurant_state,
            restaurant_city,
            restaurant_name,
            hash,
            email_id_verfied
          ],
          function(err, result) {
            if (err) {
              response.send({ some: "json" });
              throw err;
            } else {
              // Create the transporter with the required configuration for Gmail
              // change the user and pass !
              var transporter = index.nodemailerDef.createTransport({
                host: "smtp.zoho.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                  user: "support@ywait.in",
                  pass: "Time@123"
                }
              });

              // setup e-mail data
              var mailOptions = {
                from: "support@ywait.in", // sender address (who sends)
                to: user_email, // list of receivers (who receives)
                subject: "Welcome to YWait family",
                text: "Hello, ", // plaintext body
                html:
                  "<html><body><b>You have successfully registered to YWait.</b><br> Please <a href='https://ywait.in/login'>login</a> to your YWait account.</body></html>"
              };

              // send mail with defined transport object
              transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  response.send("success");
                }
              });
              response.send("success");
            }
          }
        );
      });
    });
  }
};

exports.showUsers = function(request, response) {
  var resSession = request.session;
  var rest_id = resSession.restaurantId;
  var sql_query_1 =
    "SELECT restaurant_email_id FROM mili_global_schema.global_restaurants where restaurant_id = ?;";
  pool.query(sql_query_1, [rest_id], function(err, result) {
    if (err) {
      throw err;
    } else {
      var user_email = result[0].restaurant_email_id;
      var sql_query_2 =
        "SELECT * FROM mili_global_schema.global_user_restaurant where user_email = ?;";
      pool.query(sql_query_2, [user_email], function(err, result) {
        if (err) {
          throw err;
        } else {
          response.send(result);
        }
      });
    }
  });
};

exports.getGSTDetails = function(request, response) {
  var resSession = request.session;
  var rest_id = resSession.restaurantId;
  var sql_query_1 =
    "SELECT * FROM mili_global_schema.global_restaurants where restaurant_id = ?;";
  pool.query(sql_query_1, [rest_id], function(err, result) {
    if (err) {
      throw err;
    } else {
      response.send(result);
    }
  });
};

exports.getUserStatus = function(request, response) {
  var userEmailId = request.query.userEmailId;
  var responseJson = {};
  var query_select =
    "SELECT email_id_verfied FROM mili_global_schema.global_user_restaurant where user_email=?";
  pool.query(query_select, userEmailId, function(err, result) {
    if (err) throw err;
    else {
      if (result[0] != undefined)
        response.send({ state: result[0].email_id_verfied });
      else response.send({ state: 0 });
    }
  });
};

exports.updateUserStatus = function(request, response) {
  var status = request.query.status;
  var responseJson = {};
  var userEmailId = request.query.userEmailId;
  var status = request.query.status;
  var query_select =
    "UPDATE mili_global_schema.global_user_restaurant SET email_id_verfied = ? where user_email=?";

  pool.query(query_select, [status, userEmailId], function(err, result) {
    if (err) throw err;
    else {
    }
  });
};

exports.getRestaurantDetails = function(request, response) {
  var restaurantId = request.query.restaurantId;
  var responseJson = {};
  var restaurant_schema_name;
  var query_select =
    "select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?";
  pool.query(query_select, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var restaurantSchemaName = result[0].restaurant_schema_name;
      var sql_query_1 =
        "select * from " + restaurantSchemaName + ".food_price_list";
      var sql_query_2 =
        "select * from " + restaurantSchemaName + ".restaurant_offer";
      var sql_query_3 =
        "select * from " + restaurantSchemaName + ".user_review";

      pool.query(sql_query_1 + ";" + sql_query_2 + ";" + sql_query_3, function(
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

exports.getRestaurantToken = function(request, response) {
  var restaurantId = request.query.restaurantId;
  var responseJson = {};
  var token;
  var query_select =
    "select token from mili_global_schema.global_restaurants where restaurant_id = ?";
  pool.query(query_select, restaurantId, function(err, result) {
    if (err) {
      throw err;
    } else {
      var token = result[0].token;
      token++;
      var sql_query_1 =
        "UPDATE mili_global_schema.global_restaurants SET token = ? WHERE restaurant_id = ?";

      pool.query(sql_query_1, [token, restaurantId], function(err, result) {
        if (err) {
          throw err;
        } else {
          response.json(token--);
        }
      });
    }
  });
};
