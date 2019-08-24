var foodNames = [];

$(document).ready(function() {
  ajaxRequestGetCategory();
  
  ajaxRequestUserDetail();

  ajaxRequestToGetGlobalFoodName();

  //getPagination('#table-id');

  $(".select-table-filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".menu_table_body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".menu_table_body").on("click", ".food_resturant_add", function() {
    var tr_class = $(this).data("options").name;
    var children = document.getElementsByClassName(tr_class)[0].children;
    var food_Id = tr_class;
    var food_Name = children[1].innerHTML;
    var food_Category = children[2].children[0].value;
    var food_Ingredents = children[3].innerHTML;
    var food_Price = children[4].children[0].value;
    var jsonData = {
      food_id: food_Id,
      food_name: food_Name,
      food_category: food_Category,
      food_ingredents: food_Ingredents,
      food_price: food_Price
    };
    ajaxRequestToUpdateAddedFood(jsonData);
  });

  $(".addnew").on("click", ".addNewFood", function() {
    $("#foodform").attr("action", "/addFoodInMenu");
  });

  $(".menu_table_body").on("click", ".food_resturant_update", function() {
    var tr_class = $(this).data("value");
    var food_Resturant_Id = tr_class;
    ajaxRequestGetRestFood(food_Resturant_Id);
  });

  $(".update-modal").on("click", "#cancel-mod", function() {
    $(".update-modal").fadeOut();
  });

  $(".menu_table_body").on("click", ".food_resturant_delete", function() {
    var tr_class = $(this).data("value");
    $(".confirm-modal").fadeIn();
    $("#confirm_remove").val(tr_class);
  });

  $(".confirm-modal").on("click", "#cancel_remove", function() {
    $(".confirm-modal").fadeOut();
  });

  $(".confirm-modal").on("click", "#confirm_remove", function() {
    var tr_class = $(this).val();
    console.log(tr_class);
    var food_Resturant_Id = tr_class;
    var food_Name;
    var food_Category;
    var food_Ingredents;
    var food_Price;
    var jsonData = {
      food_resturant_id: food_Resturant_Id,
      food_name: food_Name,
      food_category: food_Category,
      food_ingredents: food_Ingredents,
      food_price: food_Price
    };
    ajaxRequestToRemoveAddedFood(jsonData);
    $("." + tr_class).remove();
    $(".confirm-modal").fadeOut();
  });

  $(".menu_table_body").on("change", ".food_status", function() {
    var tr_class = $(this).data("value");
    var food_Resturant_Id = tr_class;
    var food_Status = $("#food_status-" + tr_class).val();
    var jsonData = {
      restaurant_food_Id: food_Resturant_Id,
      food_status: food_Status
    };
    ajaxRequestToChangFoodStatus(jsonData);
  });

  $(".menu_table_body").on("change", ".food_recommended", function() {
    var tr_class = $(this).data("value");
    var food_Resturant_Id = tr_class;
    var food_recommended = $("#food_recommended-" + tr_class).val();
    var jsonData = {
      restaurant_food_Id: food_Resturant_Id,
      food_recommended: food_recommended
    };
    ajaxRequestToChangFoodRecommended(jsonData);
  });
});

function ajaxRequestToChangFoodStatus(jsonData) {
  $.ajax({
    url: "/updateFoodStatus?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {},
    error: function(error) {}
  });
}
function ajaxRequestToChangFoodRecommended(jsonData) {
  $.ajax({
    url: "/updateFoodRecommended?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {},
    error: function(error) {}
  });
}

function ajaxRequestGetMenu() {
  $.ajax({
    url: "/getRestaurantMenu1?",
    success: function(result, state, xhr) {
      $.each(result, function(i, obj) {
        if (!findElement(obj)) {
          addRow(
            obj.restaurant_food_menu_id,
            obj.restaurant_food_img_url,
            obj.food_name,
            obj.menu_category,
            obj.food_quantity,
            obj.food_price,
            obj.is_available,
            obj.is_recommended,
            "menu_table_body"
          );
        } else {
          updateRow(
            obj.restaurant_food_menu_id,
            obj.restaurant_food_img_url,
            obj.food_name,
            obj.menu_category,
            obj.food_quantity,
            obj.food_price,
            obj.is_available,
            obj.is_recommended
          );
        }
      });
    }
  });
}

function ajaxRequestGetRestFood(restaurant_food_Id) {
  $.ajax({
    url: "/getRestaurantFood?restaurant_food_Id=" + restaurant_food_Id,
    success: function(result, state, xhr) {
      $("#foodform").attr("action", "/updateFoodInMenu");
      $.each(result, function(i, obj) {
        $("#restaurant_food_menu_id").val(obj.restaurant_food_menu_id);
        $("#food_name").val(obj.food_name);
        $("#food_price").val(obj.food_price);
        $("#menu_category").val(obj.menu_category);
        $("#food_quantity").val(obj.food_quantity);
        $("#up_is_veg").val(obj.is_veg);
        $("#up_is_customizable").val(obj.is_customizable);
        $("#ready_in").val(obj.ready_in);
        $("#food_description").val(obj.food_description);
      });
    }
  });
}

function ajaxRequestUserDetail(jsonData) {
  $.ajax({
    url: "/showUsers?restaurantId",
    success: function (result, state, xhr) {

      $.each(result, function (i, obj) {
        $('.user_name').text(obj.first_name);
        $('.user_name_input').val(obj.first_name);
        $('.last_user_name').text(obj.last_name);
        $('.last_user_name').val(obj.last_name);
        $('.user_email').text(obj.user_email);
        $('.user_email_input').val(obj.user_email);
        $('.user_contact').text(obj.user_contact);
        $('.user_contact_input').val(obj.user_contact);
        $('.user_company_name').text(obj.restaurant_name);
        $('.user_company_name_input').val(obj.restaurant_name);
        $('.user_position').text(obj.user_role);
      });
    }
  });
}

function ajaxRequestGetCategory() {
  $.ajax({
    url: "/getAllFoodName",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {}
  });
}

function ajaxRequestToChangeOrderStatus(order_Id, status) {
  $.ajax({
    url: "",
    data: "",
    success: function(result, state, xhr) {}
  });
}

function addRow(
  food_resturant_id,
  restaurant_food_img_url,
  food_name,
  food_category,
  food_ingredents,
  food_price,
  is_available,
  is_recommended,
  table_name
) {
  var food_Resturant_Id = food_resturant_id;
  var restaurant_food_img_url = restaurant_food_img_url;
  var food_Name = food_name;
  var food_Category = food_category;
  var food_Ingredents = food_ingredents;
  var food_Price = food_price;
  var food_availability = is_available;
  var food_recommended = is_recommended;
  var table_name = "menu_table_body";
  cloneRow(
    food_Resturant_Id,
    restaurant_food_img_url,
    food_Name,
    food_Category,
    food_Ingredents,
    food_Price,
    food_availability,
    food_recommended,
    table_name
  );
}

function cloneRow(
  food_Resturant_Id,
  restaurant_food_img_url,
  food_Name,
  food_Category,
  food_Ingredents,
  food_Price,
  food_availability,
  food_recommended,
  table_name
) {
  var clonedRow = $(".cloneTable tr:first").clone();
  clonedRow.attr("class", food_Resturant_Id);
  clonedRow.find(".food_img").val("");
  clonedRow.find(".food_img").attr("src", restaurant_food_img_url);
  clonedRow.find(".food_Name").val("");
  clonedRow.find(".food_Name").text(food_Name);
  clonedRow.find(".food_Category").val("");
  clonedRow.find(".food_Category").text(food_Category);
  clonedRow.find(".food_Quantity").val("");
  clonedRow.find(".food_Quantity").text(food_Ingredents);
  clonedRow.find(".food_Price").val("");
  clonedRow.find(".food_Price").text(food_Price);
  clonedRow.find(".food_status").val("");
  clonedRow.find(".food_status").attr("id", "food_status-" + food_Resturant_Id);
  clonedRow.find(".food_recommended").val("");
  clonedRow
    .find(".food_recommended")
    .attr("id", "food_recommended-" + food_Resturant_Id);
  clonedRow.find(".food_resturant_update").val("");
  clonedRow.find(".food_resturant_update").val(food_Resturant_Id);
  clonedRow.find(".food_resturant_delete").val("");
  clonedRow.find(".food_resturant_delete").val(food_Resturant_Id);
  $("." + table_name).append(clonedRow);
  $("#food_status-" + food_Resturant_Id).val(food_availability);
  clonedRow.find(".food_status").attr("data-value", food_Resturant_Id);
  $("#food_recommended-" + food_Resturant_Id).val(food_recommended);
  clonedRow.find(".food_recommended").attr("data-value", food_Resturant_Id);
}

function updateRow(
  food_resturant_id,
  food_name,
  food_category,
  food_ingredents,
  food_price
) {
  var id = food_resturant_id;
  var children = document.getElementsByClassName(id)[0].children;
  children[1].innerHTML = food_resturant_id;
  children[2].innerHTML = food_name;
  children[3].value = food_category;
  children[4].innerHTML = food_ingredents;
  children[5].value = food_price;
}

function findElement(result) {
  var id = result.food_Resturant_Id;
  return $("tr").hasClass(id);
}

function ajaxRequestToUpdateAddedFood(jsonData) {
  $.ajax({
    url: "/updateFoodInMenu?",
    type: "POST",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {},
    error: function(error) {}
  });
}

function ajaxRequestToRemoveAddedFood(jsonData) {
  $.ajax({
    url: "/deleteFoodFromMenu?",
    type: "GET",
    data: jsonData,
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {},
    error: function(error) {}
  });
}

function ajaxRequestToGetGlobalFoodName() {
  $.ajax({
    url: "/getGlobalFoodName",
    type: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(result, state, xhr) {
      $.each(result, function(i, obj) {
        foodNames.push(obj.food_name);
      });
    },
    error: function(error) {}
  });
}
