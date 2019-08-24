var baseURI = "https://ywait.in:443";
var restaurant_id;
$(".search_customer").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".customer_table_body tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});
$(window).on("resize", function() {
  if (screen.width < 768) {
    $(".panel-def").removeClass("is-3");
    $(".search-filter-panel-def").removeClass("col-xs-3");
    $(".panel-def").addClass("col-xs-6");
    $(".search-filter-panel-def").addClass("col-xs-6");
  } else {
    $(".panel-def").removeClass("col-xs-6");
    $(".search-filter-panel-def").removeClass("col-xs-6");
    $(".panel-def").addClass("is-3");
    $(".search-filter-panel-def").addClass("col-xs-3");
  }
});
$(document).ready(function() {
  if (screen.width < 768) {
    $(".panel-def").removeClass("is-3");
    $(".search-filter-panel-def").removeClass("col-xs-3");
    $(".panel-def").addClass("col-xs-6");
    $(".search-filter-panel-def").addClass("col-xs-6");
  } else {
    $(".panel-def").removeClass("col-xs-6");
    $(".search-filter-panel-def").removeClass("col-xs-6");
    $(".panel-def").addClass("is-3");
    $(".search-filter-panel-def").addClass("col-xs-3");
  }
  ajaxRequestUserDetail();

  getRestaurantId();

  function getRestaurantId() {
    $.ajax({
      url: "/getRestaurantId",
      success: function(result, state, xhr) {
        restaurant_id = result;
      }
    });
  }

  function ajaxRequestUserDetail(jsonData) {
    $.ajax({
      url: "/showUsers?restaurantId",
      success: function(result, state, xhr) {
        $.each(result, function(i, obj) {
          $(".user_name").text(obj.first_name);
          $(".user_name_input").val(obj.first_name);
          $(".last_user_name").text(obj.last_name);
          $(".last_user_name").val(obj.last_name);
          $(".user_email").text(obj.user_email);
          $(".user_email_input").val(obj.user_email);
          $(".user_contact").text(obj.user_contact);
          $(".user_contact_input").val(obj.user_contact);
          $(".user_company_name").text(obj.restaurant_name);
          $(".user_company_name_input").val(obj.restaurant_name);
          $(".user_position").text(obj.user_role);
        });
      }
    });
  }

  var socket = io.connect(baseURI);
  socket.on("broadcast", function(data) {
    var jsonData = {
      orderId: data.order_id
    };
    if (data.restaurant_id == restaurant_id) {
      ajaxRequestToGetOrderById(jsonData);
    }
  });

  socket.on("payment_status_broadcast", function(data) {
    if (data.restaurant_id == restaurant_id) {
      $("#order-Pay-Status-" + data.order_id).val(data.payment_status);
    }
  });

  $(".order").on("change", ".order_Status", function() {
    var tr_class = $(this).data("value");
    var children = $("." + tr_class);
    var order_Status = $("#order-Status-" + tr_class).val();
    var sequence_no = $("#sequence-no-" + tr_class).text();
    var jsonData = {
      order_id: tr_class,
      order_status: order_Status,
      sequence_no: sequence_no
    };
    ajaxRequestToChangeOrderStatus(jsonData);
  });

  $(".order").on("change", ".order_Pay_Status", function() {
    var tr_class = $(this).data("value");
    var children = $("." + tr_class);
    var order_pay_Status = $("#order-Pay-Status-" + tr_class).val();
    var sequence_no = $("#sequence-no-" + tr_class).text();
    var jsonData = {
      order_id: tr_class,
      order_pay_Status: order_pay_Status,
      sequence_no: sequence_no
    };
    ajaxRequestToChangeOrderPayStatus(jsonData);
  });

  $(".order").on("click", ".order_id_button", function() {
    var tr_class = $(this).text();
    var sequence_no = $("#sequence-no-" + tr_class).text();
    var jsonData = {
      orderID: tr_class
    };
    ajaxRequestToGETFood(jsonData);
  });

  $(".order").on("change", ".order_Status_OrderFood", function() {
    var tr_class = $(this).data("value");
    var children = $("." + tr_class);
    var order_Id = tr_class;
    var table_No = "";
    var comments = "";
    var order_Status = $("#food-select-option-" + tr_class).val();
    var jsonData = {
      order_id: order_Id,
      table_no: table_No,
      food_comments: comments,
      order_status: order_Status
    };
    $("#notification").fadeIn(2000);
    $("#notification").fadeOut(5000);
    ajaxRequestToChangeOrderStatusOrderFood(jsonData);
  });

  getToken();
  getOrderCount();
  getTotalOrderCost();
  getTotalOrderPAID();
});

function resetToken() {
  var jsonData = { token: "0" };
  $.ajax({
    url: "/resetRestaurantToken?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      getToken();
      showSuccessToast("Token reset successfully!  ");
    },
    error: function(error) {
      showErrorToast("Something went wrong!");
    }
  });
}

function getToken() {
  $.ajax({
    url: "/getRestaurantTokenForUi?",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      //$("#token").text(result);
      setRancyAttr([{ id: "token", class: "", text: result }]);
    },
    error: function(error) {
      showErrorToast("Something went wrong!");
    }
  });
}

function getOrderCount() {
  $.ajax({
    url: "/getOrderCount?",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      var Order = result[0];
      // $("#order_count").text(Order[0].orderCount);
      // Order = result[1];
      // $("#order_count_placed").text(Order[0].orderCountPlaced);
      // Order = result[2];
      // $("#order_count_rejected").text(Order[0].orderCountRejectd);
      // Order = result[3];
      // $("#order_count_served").text(Order[0].orderCountServed);

      var orderCount = Order[0].orderCount;
      Order = result[1];
      var orderCountPlaced = Order[0].orderCountPlaced;
      Order = result[2];
      var orderCountRejectd = Order[0].orderCountRejectd;
      Order = result[3];
      var orderCountServed = Order[0].orderCountServed;

      setRancyAttr([
        { id: "order_count", class: "", text: orderCount },
        {
          id: "order_count_placed",
          class: "",
          text: orderCountPlaced
        },
        {
          id: "order_count_rejected",
          class: "",
          text: orderCountRejectd
        }
      ]);
    },
    error: function(error) {
      showErrorToast("Something went wrong!");
    }
  });
}

function getTotalOrderCost() {
  $.ajax({
    url: "/getTotalOrderCost?",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      var OrderCost = result[0];
      $("#account_cost").text(OrderCost[0].totalOrderCost);
      var OrderCost = result[1];
      $("#account_cost_paid").text(OrderCost[0].totalOrderCostPaid);
      var OrderCost = result[2];
      $("#account_cost_not_paid").text(OrderCost[0].totalOrderCostNotPaid);
    },
    error: function(error) {
      showErrorToast("Something went wrong!");
    }
  });
}

function getTotalOrderPAID() {
  $.ajax({
    url: "/getTotalOrderPAID?",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      $("#totalOrderPAID").text(result);
    },
    error: function(error) {
      showErrorToast("Something went wrong!");
    }
  });
}

function ajaxRequestToGetOrderById(jsonData) {
  $.ajax({
    url: "/getOrderById?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      $.each(result, function(i, obj) {
        addRow(
          obj.order_id,
          obj.user_identifier,
          obj.table_id,
          obj.token_no,
          obj.total_order_cost,
          obj.order_status,
          obj.payment_status,
          obj.sequence_no
        );
      });
      getToken();
      getOrderCount();
      getTotalOrderCost();
      getTotalOrderPAID();
      showSuccessToast("New order placed!  ");
    },
    error: function(error) {
      showErrorToast("Something went wrong!  ");
    }
  });
}

function ajaxRequestToChangeOrderStatusOrderFood(jsonData) {
  $.ajax({
    url: "/updateFoodOrderStatus?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      showSuccessToast("Order status updated successfully!  ");
      getToken();
      getOrderCount();
      getTotalOrderCost();
      getTotalOrderPAID();
      if ($("#food-select-option-" + jsonData.order_id).val() == "REJECTED") {
        $("#food-select-option-" + jsonData.order_id).addClass(
          "order_Status_rejected"
        );
        $("#food-select-option-" + jsonData.order_id).removeClass(
          "order_Status_placed"
        );
      } else {
        $("#food-select-option-" + jsonData.order_id).removeClass(
          "order_Status_rejected"
        );
        $("#food-select-option-" + jsonData.order_id).addClass(
          "order_Status_placed"
        );
      }
    },
    error: function(error) {
      showErrorToast("Something went wrong!  ");
    }
  });
}

function ajaxRequestToGETFood(jsonData) {
  $.ajax({
    url: "/getFoodByorderId?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      //$("#card-test").css("display", "block");
      $(".order_table_body tr").remove();
      if ($(".food_order_visible").is(":visible")) {
        $(".food_order_visible").remove();
      }
      $.each(result, function(i, obj) {
        addRowOrderFood(
          obj.food_order_id,
          obj.food_count,
          obj.food_name,
          obj.food_price,
          obj.food_customization_comments,
          obj.order_status,
          obj.is_veg,
          jsonData.orderID
        );
      });
      $(
        '<tr class="food_order_visible"><th></th><th style="text-align: center;">Dish</th><!-- <th>Type</th> --><th style="text-align: center;">Quantity</th><th style="text-align: center;">Price</th><th style="text-align: center;">Comments</th><th style="text-align: center;">Status</th></tr>'
      ).insertAfter("tr." + jsonData.orderID);
      var clonedRow = $(".cloneClose").clone();
      $(".order_table_body").append(clonedRow);
    },
    error: function(error) {}
  });
}

function ajaxRequestToChangeOrderStatus(jsonData) {
  $.ajax({
    url: "/updateOrderStatus?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      showSuccessToast("Order status updated successfully!  ");
      getToken();
      getOrderCount();
      getTotalOrderCost();
      getTotalOrderPAID();

      if ($("#order-Status-" + jsonData.order_id).val() == "REJECTED") {
        $("#order-Status-" + jsonData.order_id).addClass(
          "order_Status_rejected"
        );
        $("#order-Status-" + jsonData.order_id).removeClass(
          "order_Status_placed"
        );
      } else {
        $("#order-Status-" + jsonData.order_id).removeClass(
          "order_Status_rejected"
        );
        $("#order-Status-" + jsonData.order_id).addClass("order_Status_placed");
      }
    },
    error: function(error) {
      showErrorToast("Something went wrong!  ");
    }
  });
}

function ajaxRequestToChangeOrderPayStatus(jsonData) {
  $.ajax({
    url: "/updateOrderPayStatus?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      showSuccessToast("Payment status updated successfully!  ");
      getToken();
      getOrderCount();
      getTotalOrderCost();
      getTotalOrderPAID();

      if ($("#order-Pay-Status-" + jsonData.order_id).val() == "NOT PAID") {
        $("#order-Pay-Status-" + jsonData.order_id).addClass(
          "order_Status_not_paid"
        );
        $("#order-Pay-Status-" + jsonData.order_id).removeClass(
          "order_Status_paid"
        );
      } else {
        $("#order-Pay-Status-" + jsonData.order_id).removeClass(
          "order_Status_not_paid"
        );
        $("#order-Pay-Status-" + jsonData.order_id).addClass(
          "order_Status_paid"
        );
      }
    },
    error: function(error) {
      showErrorToast("Something went wrong!  ");
    }
  });
}

function addRow(
  transaction_id,
  user_name,
  table_no,
  token_no,
  total_order_cost,
  order_status,
  order_pay_status,
  sequence_no
) {
  var transaction_Id = transaction_id;
  var user_Name = user_name;
  var table_No = table_no;
  var token_No = token_no;
  var total_Order_Cost = total_order_cost;
  var order_Status = order_status;
  var order_Pay_Status = order_pay_status;
  var sequence_No = sequence_no;
  cloneRow(
    transaction_Id,
    user_Name,
    table_No,
    token_No,
    total_Order_Cost,
    order_Status,
    order_Pay_Status,
    sequence_No
  );
}

function cloneRow(
  transaction_Id,
  user_Name,
  table_No,
  token_No,
  total_Order_Cost,
  order_Status,
  order_Pay_Status,
  sequence_No
) {
  var clonedRow = $(".cloneTable tr:first").clone();
  clonedRow.attr("class", transaction_Id);
  clonedRow.find(".order_id").text("");
  clonedRow.find(".order_id").val("");
  clonedRow.find(".order_id").text(transaction_Id);
  clonedRow.find(".order_id").val(transaction_Id);
  clonedRow.find(".order_id").attr("id", "order-id-" + transaction_Id);
  clonedRow.find(".sequence_no").text("");
  clonedRow.find(".sequence_no").text(sequence_No);
  clonedRow.find(".sequence_no").attr("id", "sequence-no-" + sequence_No);
  clonedRow.find(".user_Name").text("");
  clonedRow.find(".user_Name").text(user_Name);
  clonedRow.find(".table_No").text("");
  clonedRow.find(".table_No").text(table_No);
  clonedRow.find(".token_No").text("");
  clonedRow.find(".token_No").text(token_No);
  clonedRow.find(".total_Order_Cost").text("");
  clonedRow.find(".total_Order_Cost").text(total_Order_Cost);
  clonedRow.find(".order_Status").val("");
  clonedRow.find(".order_Status").attr("id", "order-Status-" + transaction_Id);
  clonedRow.find(".order_Pay_Status").val("");
  clonedRow
    .find(".order_Pay_Status")
    .attr("id", "order-Pay-Status-" + transaction_Id);
  $(".order").prepend(clonedRow);
  $("#order-Status-" + transaction_Id).val(order_Status);
  clonedRow.find(".order_Status").attr("data-value", transaction_Id);
  $("#order-Pay-Status-" + transaction_Id).val(order_Pay_Status);
  clonedRow.find(".order_Pay_Status").attr("data-value", transaction_Id);
}

function updateRow(
  transaction_id,
  user_name,
  table_no,
  total_order_cost,
  order_status,
  order_pay_status
) {
  var id = transaction_id;
  var children = document.getElementsByClassName(id)[0].children;
  children[1].innerHTML = user_name;
  children[2].innerHTML = table_no;
  children[3].innerHTML = total_order_cost;
  children[4].innerHTML = order_status;
  children[5].innerHTML = order_pay_status;
  $(".table").tablesorter();
}

function findElement(result) {
  var id = result.order_id;
  return $("tr").hasClass(id);
}

function deleteRow(result) {
  $("." + result.order_id).remove();
}

function addRowOrderFood(
  order_id,
  food_count,
  food_name,
  food_price,
  food_comments,
  order_status,
  is_veg,
  appendAt
) {
  var order_Id = order_id;
  var food_count = food_count;
  var food_Name = food_name;
  var food_price = food_price;
  var src = "assets/images/non-veg.png";
  if (food_comments != undefined) {
    var comments = food_comments;
  } else {
    var comments = "----------";
  }
  if (is_veg == 1) {
    src = "assets/images/veg.png";
  }
  cloneRowOrderFood(
    order_Id,
    food_count,
    food_Name,
    food_price,
    comments,
    order_status,
    src,
    appendAt
  );
}

function cloneRowOrderFood(
  order_Id,
  food_count,
  food_Name,
  food_price,
  comments,
  order_Status,
  src,
  appendAt
) {
  var clonedRow = $(".cloneTableOrderFood tr:first").clone();
  clonedRow.attr("class", order_Id);
  clonedRow.attr("class", "food_order_visible");
  clonedRow.find(".food_count").text();
  clonedRow.find(".food_count").text(food_count);
  clonedRow.find(".food_Name").text();
  clonedRow.find(".food_Name").text(food_Name);
  clonedRow.find(".food_Type").text();
  clonedRow
    .find(".food_Type")
    .append(
      "<img src='" + src + "' style='max-width: 22px;max-height: 26px;'>"
    );
  clonedRow.find(".food_price").text();
  clonedRow.find(".food_price").text(food_price * food_count);
  clonedRow.find(".comments").text();
  clonedRow.find(".comments").text(comments);
  clonedRow.find(".food-select").val("");
  clonedRow.find(".food-select").attr("id", "food-select-option-" + order_Id);
  //$('.order_table_body').prepend(clonedRow);
  $(clonedRow).insertAfter("tr." + appendAt);
  $("#food-select-option-" + order_Id).val(order_Status);
  if ($("#food-select-option-" + order_Id).val() == "REJECTED") {
    $("#food-select-option-" + order_Id).addClass("order_Status_rejected");
  }
  clonedRow.find(".food-select").attr("data-value", order_Id);
}

function showSuccessToast(msg) {
  var x = document.getElementById("toast");
  $("#toast").css("background-color", "#40c05f");
  x.className = "show";
  $("#desc").text(msg);
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 5000);
}

function showErrorToast(msg) {
  var x = document.getElementById("toast");
  $("#toast").css("background-color", "#c04040");
  x.className = "show";
  $("#desc").text(msg);
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 5000);
}

function card_test() {
  $("#card-test").css("display", "block");
}
function close_model() {
  $("#card-test").css("display", "none");
}

function setRancyAttr(code) {
  var jsonData = code;
  $.each(jsonData, function(index, jsonObject) {
    if (jsonObject.class) {
      $.each(jsonObject, function(key, val) {
        if (val) {
          $("." + jsonObject.class).attr(key, val);
        }
      });
    }
    if (jsonObject.id) {
      $.each(jsonObject, function(key, val) {
        if (key == "text") {
          if (val) {
            $("#" + jsonObject.id).text(val);
          } else {
            if (val == 0) {
              $("#" + jsonObject.id).text(val);
            }
          }
        }
      });
    }
  });
}
