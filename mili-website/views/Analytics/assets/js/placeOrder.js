var order = [];
var tPrice, gstRate, gst_no;

$(document).ready(function() {
  ajaxRequestUserDetail();
  ajaxRequestGSTDetail();
  $("#food_name_search_filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".menu_table_body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  $.ajax({
    url: "/getAllFoodNameByRestaurantId",
    type: "GET",
    success: function(result, state, xhr) {
      $.each(result, function(index, jsonObject) {
        $.each(jsonObject, function(key, val) {
          $(".select-table-filter").append(
            '<option value="' + val + '">' + val + "</option>"
          );
        });
      });
    },
    error: function(error) {}
  });
  $(".menu_table_body").on("click", ".placeOrderCheck", function() {
    console.log("Check");
    if ($(this).prop("checked") == true) {
      var quantity = $("#food_Quantity_InCart-" + $(this).val()).val();
      if (quantity == "") {
        showErrorToast("Please add quantity");
        $(this).prop("checked", false);
      } else {
        addToDeleteArrayList($(this).val());
        var food_id = $(this).val();
        var food_name = $("#food_name-" + $(this).val()).text();
        var quantity = $("#food_Quantity_InCart-" + $(this).val()).val();
        var custom_food_price = $("#custom_food_price-" + $(this).val()).text();
        cloneRow(food_id, food_name, quantity, custom_food_price);
        totalPrice();
      }
    } else if ($(this).prop("checked") == false) {
      removeToDeleteArrayList($(this).val());
      $("#food_Quantity_InCart-" + $(this).val()).val("");
      $(".placeOrder-" + $(this).val()).remove();
      $("#custom_food_price-" + $(this).val()).text("");
      totalPrice();
    }
  });

  $(".menu_table_body").on("change", ".food_Quantity_InCart", function() {
    if ($(this).val() != "") {
      if ($("#checkbox_" + $(this).data("value")).prop("checked") == false) {
        $("#checkbox_" + $(this).data("value")).trigger("click");
      }
      $("#custom_food_price-" + $(this).data("value")).text(
        $("#food_price-" + $(this).data("value")).text().trim() * $(this).val()
      );
      $("#cart_food_price-" + $(this).data("value")).text(
        $("#custom_food_price-" + $(this).data("value")).text()
      );
      $("#cart_food_quantity-" + $(this).data("value")).text($(this).val());
      totalPrice();
    } else {
      $("#checkbox_" + $(this).data("value")).prop("checked", false);
      $(".placeOrder-" + $(this).data("value")).remove();
      totalPrice();
    }
  });

  $(".update").click(function() {
    $(".form").submit();
  });
});

function calculateAmount(val) {
  if (gst_no != null) {
    $("#gst_no").text("GST NO : " + gst_no);
  }

  $("#gst").text("GST : " + gstRate + "%");

  if (gstRate != null) {
    var price = val * 1;
    var tot_price = price + price * (gstRate / 100);
    return tot_price;
  } else {
    var price = val * 1;
    var tot_price = price + price * (5 / 100);
    return tot_price;
  }
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
  console.log("Show error");
  var x = document.getElementById("toast");
  $("#toast").css("background-color", "#c04040");
  x.className = "show";
  $("#desc").text(msg);
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 5000);
}

function totalPrice() {
  var array = document.getElementsByClassName("cart_food_price");
  var totalPrice = 0;
  for (var i = 0; i < array.length; i++) {
    totalPrice = totalPrice + parseInt(array[i].innerHTML);
  }

  $("#order_placed_total_price").text(totalPrice);

  totalPrice = calculateAmount(totalPrice);

  $("#order_placed_total_price_gst").text("Total Order Cost : " + totalPrice);

  tPrice = totalPrice;
}

function addToDeleteArrayList(id) {
  if (order.indexOf(id) === -1) {
    order.push(id);
  }
}

function cloneRow(food_id, food_name, food_quantity_InCart, food_Price) {
  var clonedRow = $(".cloneTable tr:first").clone();
  clonedRow.attr("class", "placeOrder-" + food_id);
  clonedRow.find(".food_name").text();
  clonedRow.find(".food_name").text(food_name);
  clonedRow.find(".food_quantity_InCart").text();
  clonedRow.find(".food_quantity_InCart").text(food_quantity_InCart);
  clonedRow
    .find(".food_quantity_InCart")
    .attr("id", "cart_food_quantity-" + food_id);
  clonedRow.find(".food_Price").text();
  clonedRow.find(".food_Price").text(food_Price);
  clonedRow.find(".food_Price").attr("id", "cart_food_price-" + food_id);
  clonedRow.find(".food_Price").addClass("cart_food_price");
  $(".menu_table_body_placeOrder").prepend(clonedRow);
}

function removeToDeleteArrayList(id) {
  var index = order.indexOf(id);
  if (index > -1) {
    order.splice(index, 1);
  }
}

function ajaxRequestUserDetail() {
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

function myPrint() {
  var printdata = document.getElementById(menu_table_body_placeOrder);
  newwin = window.open("");
  newwin.document.write(printdata.outerHTML);
  newwin.print();
  newwin.close();
}

function ajaxRequestGSTDetail() {
  $.ajax({
    url: "/getGSTDetails",
    success: function(result, state, xhr) {
      gstRate = result[0].restaurant_gst;
      gst_no = result[0].restaurant_gstno;
    }
  });
}

function ajaxRequest() {
  console.log("++++error++++++");
  var json = { order_cart_details: [] };
  if ($(".payment_mode").val() == "") {
    showErrorToast("Please select payment mode");
    return;
  }
  if ($(".payment_status").val() == "") {
    showErrorToast("Please select payment status");
    return;
  }
  if ($(".table_no").val() == "") {
    showErrorToast("Please fill table no");
    return;
  }
  if ($(".user_name").val() == "") {
    showErrorToast("Please fill user name");
    return;
  }

  $.each(order, function(index, value) {
    var children = $("." + value);
    var foodDescription = children.find(".food_description").text();
    var foodId = children.find(".food_id").text();
    var foodLikes = children.find(".food_likes").text();
    var isAvailable = children.find(".is_available").text();
    var isCustomizable = children.find(".is_customizable").text();
    var isRecommended = children.find(".is_recommended").text();
    var isVeg = children.find(".is_veg").text();
    var menuCategory = children.find(".menu_category").text();
    var quantity = children.find(".food_quantity").text();
    var readyIn = children.find(".ready_in").text();
    var foodImageUrl = children.find(".food_Url").text();
    var food_Name = children.find(".food_Name").text();
    var food_Price = children.find(".food_Price").text();
    var food_quantity_InCart = children.find(".food_Quantity_InCart").val();
    json["order_cart_details"].push({
      customizationComments: "",
      foodDescription: foodDescription,
      foodId: foodId,
      foodImageUrl: foodImageUrl,
      foodInCart: 1,
      foodLikes: foodLikes,
      foodName: food_Name,
      foodPrice: food_Price,
      foodPriority: 0,
      isAvailable: isAvailable,
      isCustomizable: isCustomizable,
      isRecommended: isRecommended,
      isVeg: isVeg,
      menuCategory: menuCategory,
      offerId: 0,
      orderStatus: "PLACED",
      quantity: quantity,
      quantityInCart: food_quantity_InCart,
      readyIn: readyIn,
      restaurantFoodId: value,
      restaurantId: restaurantId
    });
  });

  var children = $(".user_details");
  var payment_mode = children.find(".payment_mode").val();
  var payment_status = children.find(".payment_status").val();
  var table_no = children.find(".table_no").val();
  var user_identifier = children.find(".user_name").val();

  var jsonArray = {
    order_cart_details: JSON.stringify(json["order_cart_details"]),
    order_transaction_amount: tPrice,
    user_identifier: user_identifier,
    order_type: "TAKE AWAY",
    payment_mode: payment_mode,
    payment_status: payment_status,
    restaurant_id: restaurantId,
    order_status: "PLACED",
    table_no: table_no
  };

  if (order.length <= 0) {
    showErrorToast("Please add food in cart");
    return;
  } else {
    $.ajax({
      url: "/createNewOrder",
      type: "POST",
      data: JSON.stringify(jsonArray),
      contentType: "application/json",
      dataType: "json",
      success: function(result, state, xhr) {
        showSuccessToast("Order successfully placed");
        showSuccessToast("Token no - " + result.token_no);
        window.location.href = "/PlaceOrder";
      },
      error: function(error) {}
    });
  }
}
(function(document) {
  "use strict";

  var LightTableFilter = (function(Arr) {
    var _input;
    var _select;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(
        _input.getAttribute("data-table")
      );
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _onSelectEvent(e) {
      _select = e.target;
      var tables = document.getElementsByClassName(
        _select.getAttribute("data-table")
      );
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filterSelect);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(),
        val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
    }

    function _filterSelect(row) {
      var text_select = row.textContent.toLowerCase(),
        val_select = _select.options[_select.selectedIndex].value.toLowerCase();
      row.style.display =
        text_select.indexOf(val_select) === -1 ? "none" : "table-row";
    }

    return {
      init: function() {
        var inputs = document.getElementsByClassName("light-table-filter");
        var selects = document.getElementsByClassName("select-table-filter");
        Arr.forEach.call(inputs, function(input) {
          input.oninput = _onInputEvent;
        });
        Arr.forEach.call(selects, function(select) {
          select.onchange = _onSelectEvent;
        });
      }
    };
  })(Array.prototype);

  document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
      LightTableFilter.init();
    }
  });
})(document);
