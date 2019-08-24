var pool = require('../../Database/config')
var fs = require('fs');
var index = require('../../index.js');

function bindrestaurantSchemaNameAndQuery(restaurantSchemaName, query) {
    var arr = query.split("restaurantSchemaName");
    return arr[0] + restaurantSchemaName + arr[1];
}

function getrestaurantSchemaNameAndQuery(result) {
    return result[0].restaurant_schema_name;
}

exports.getStaff = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var responseJson = {};
    var restaurant_schema_name;
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'SELECT * FROM ' + restaurantSchemaName + '.staff_restaurant';
            pool.query(sql_query_1, function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
}

exports.getStaffById = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var staffId = request.query.staffId;
    var responseJson = {};
    var restaurant_schema_name;
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'SELECT * FROM ' + restaurantSchemaName + '.staff_restaurant where staff_id = ?';
            pool.query(sql_query_1, [staffId], function (err, result) {
                if (err) { throw err; }
                else {
                    response.send(result);
                }
            });
        }
    });
}

exports.deleteStaffById = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var staffId = request.query.staffId;
    var responseJson = {};
    var restaurant_schema_name;
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'DELETE FROM ' + restaurantSchemaName + '.staff_restaurant where staff_id = ?';
            pool.query(sql_query_1, [staffId], function (err, result) {
                if (err) { throw err; }
                else {
                    response.redirect('/staff');
                }
            });
        }
    });
}

exports.updateStaffById = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var staffId = request.body.staff_id;
    var staff_first_name = request.body.staff_first_name;
    var staff_last_name = request.body.staff_last_name;
    var staff_role = request.body.staff_role;
    var email_id = request.body.email_id;
    var contact_no = request.body.contact_no;
    var gender = request.body.gender;
    var staff_salary = request.body.staff_salary;
    var staff_state = request.body.staff_state;
    var staff_pincode = request.body.staff_pincode;
    var responseJson = {};
    var restaurant_schema_name;
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'UPDATE ' + restaurantSchemaName + '.staff_restaurant SET staff_first_name = ?, staff_last_name = ?, staff_role = ?, email_id = ?, contact_no = ?, gender = ?, staff_salary = ?, staff_state = ?, staff_pincode = ? WHERE staff_id = ?';
            pool.query(sql_query_1, [staff_first_name, staff_last_name, staff_role, email_id, contact_no, gender, staff_salary, staff_state, staff_pincode, staffId], function (err, result) {
                if (err) { throw err; }
                else {
                    response.redirect('/staff');
                }
            });
        }
    });
}

exports.addStaff = function (request, response) {
    var resSession = request.session;
    var restaurantId = resSession.restaurantId;
    var staffId = request.body.staff_id;
    var staff_first_name = request.body.staff_first_name;
    var staff_last_name = request.body.staff_last_name;
    var staff_role = request.body.staff_role;
    var email_id = request.body.email_id;
    var contact_no = request.body.contact_no;
    var gender = request.body.gender;
    var staff_salary = request.body.staff_salary;
    var staff_state = request.body.staff_state;
    var staff_pincode = request.body.staff_pincode;
    var responseJson = {};
    var restaurant_schema_name;
    var query_select = 'select restaurant_schema_name from mili_global_schema.global_restaurants where restaurant_id = ?';
    pool.query(query_select, restaurantId, function (err, result) {
        if (err) { throw err; }
        else {
            var restaurantSchemaName = result[0].restaurant_schema_name;
            var sql_query_1 = 'INSERT INTO ' + restaurantSchemaName + '.staff_restaurant(staff_first_name,staff_last_name,staff_role,email_id,contact_no,gender,staff_salary,staff_state,staff_pincode) VALUES(?,?,?,?,?,?,?,?,?) ';
            
            pool.query(sql_query_1, [staff_first_name, staff_last_name, staff_role, email_id, contact_no, gender, staff_salary, staff_state, staff_pincode], function (err, result) {
                if (err) { throw err; }
                else {
                    var transporter = index.nodemailerDef.createTransport({
                        host: 'smtp.zoho.com',
                        port: 465,
                        secure: true, // use SSL
                        auth: {
                            user: 'support@ywait.in',
                            pass: 'Time@123'
                        }
                    });

                    var uid = index.randomDef();

                    // setup e-mail data
                    var mailOptions = {
                        from: 'support@ywait.in', // sender address (who sends)
                        to: email_id, // list of receivers (who receives)
                        subject: 'Password attachment',
                        text: 'Hello world ', // plaintext body
                        html: '<b>Password to your accout</b><br> Password To your email address is : ' + uid // html body
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {

                        } else {
                            uid = "Mili@" + uid;
                            index.bcryptDef.hash(uid, index.saltRoundsDef, function (err, hash) {
                                pool.query('INSERT INTO mili_global_schema.global_user_restaurant(user_email,first_name,last_name,restaurant_entity,email_id_verfied,restaurant_id,user_contact,restaurant_name,restaurant_state,restaurant_city,password) VALUES(?,?,?,?,?,?,?,?,?,?,?)', [email_id, staff_first_name, staff_last_name, 1, 1, restaurantId, contact_no, staff_first_name, staff_state, staff_state, hash], function (err, result) {
                                    if (err) { throw err; }
                                    else {
                                        response.redirect('/staff');
                                    }
                                });
                            });

                        }
                    });
                }
            });
        }
    });
}