var baseURI = 'https://ywait.in:443';
var restaurant_id;
$(document).ready(function () {

   ajaxRequestUserDetail();

   getRestaurantId();

   $(".select-table-filter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".order_table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

   function getRestaurantId() {
      $.ajax({
         url: "/getRestaurantId",
         success: function (result, state, xhr) {
            restaurant_id = result;
         }
      });
   }

   //getPagination('#table-id');

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

   var socket = io.connect(baseURI);

   socket.on('broadcast', function (data) {
      if (data.restaurant_id == restaurant_id) {
         var jsonData = { orderId: data.order_id, sequence_no: data.sequence_no };
         ajaxRequestToGetFoodOrderById(jsonData);
      }
   });
   socket.on('broadcast_update_order_status_webportal', function (data) {
      console.log(data);
      
      var jsonData = { orderId: data.order_id, order_status: data.order_status };
      if (data.restaurant_id == restaurant_id) {
         var array = document.getElementsByClassName('order_Status-' + jsonData.orderId);
         for (var i = 0; i < array.length; i++) {
            array[i].innerHTML = jsonData.order_status;
         }
      }
   });
   socket.on('broadcast_update_food_order_status_webportal', function (data) {
      console.log(data);
      if (data.restaurant_id == restaurant_id) {
         var jsonData = { orderId: data.food_order_id, order_status: data.order_status };
         $('#food-select-option-' + jsonData.orderId).val(jsonData.order_status);
      }
   });

   $(".search_food").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".order_table_body tr").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });

   $('.order_table_body').on('change', '.order_Status', function () {
      var tr_class = $(this).data('value');
      var children = $('.' + tr_class);
      var order_Id = children.find('.order_Id').text();
      var table_No = children.find('.table_No').text();
      var comments = children.find('.comments').text();
      var order_Status = $('#food-select-option-' + tr_class).val();
      var jsonData = { order_id: tr_class, table_no: table_No, food_comments: comments, order_status: order_Status };
      ajaxRequestToChangeOrderStatus(jsonData);
   });
});

function ajaxRequest() {
   $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      success: function (result, state, xhr) {
         if (!findElement(result)) {
            addRow(result.order_id, result.table_no, result.food_name, result.food_is_Pure_Veg, result.food_comments, result.order_status);
         } else {
            updateRow(result.order_id, result.table_no, result.food_name, result.food_is_Pure_Veg, result.food_comments, result.order_status);
         }
      }
   });
}

function ajaxRequestToChangeOrderStatus(jsonData) {
   $.ajax({
      url: "/updateFoodOrderStatus?",
      type: "GET",
      data: jsonData,
      contentType: "application/json",
      dataType: "json",
      success: function (result, state, xhr) {
         showSuccessToast('Order status changed successfully!');

         if ($('#food-select-option-' + jsonData.order_id).val() == 'REJECTED') {
            $('#food-select-option-' + jsonData.order_id).addClass('order_Status_rejected');
            $('#food-select-option-' + jsonData.order_id).removeClass('order_Status_placed');
         } else {
            $('#food-select-option-' + jsonData.order_id).removeClass('order_Status_rejected');
            $('#food-select-option-' + jsonData.order_id).addClass('order_Status_placed');
         }
      },
      error: function (error) {
         showErrorToast('Something went wrong!');
      }
   });
}

function ajaxRequestToGetFoodOrderById(jsonData) {
   $.ajax({
      url: "/getFoodById?",
      type: "GET",
      data: jsonData,
      contentType: "application/json",
      dataType: "json",
      success: function (result, state, xhr) {
         $.each(result, function (i, obj) {
            addRow(obj.order_status, obj.token_no, obj.food_order_id, obj.order_id, obj.food_count, obj.table_id, obj.food_name, obj.is_veg, obj.food_customization_comments, obj.order_status);
         });
      },
      error: function (error) {
      }
   });
}

function addRow(order_status_main, token_no, food_order_id, order_id, food_count, table_no, food_name, food_category, food_comments, order_status) {
   var order_Status_main = order_status_main;
   var token_No = token_no;
   var food_order_id = food_order_id;
   var order_Id = order_id;
   var food_Count = food_count;
   var table_No = table_no;
   var food_Name = food_name;
   var food_Category = food_category;

   if (food_Category == 0) {
      food_Category = "Non-VEG";
   } else {
      food_Category = "VEG";
   }

   if (food_comments != undefined) {
      var comments = food_comments;
   } else {
      var comments = "----------";
   }

   cloneRow(order_Status_main, token_No, food_order_id, order_Id, food_Count, table_No, food_Name, food_Category, comments, order_status);
}

function cloneRow(order_Status_main, token_No, food_order_id, order_Id, food_Count, table_No, food_Name, food_Category, comments, order_Status) {
   var clonedRow = $('.cloneTable tr:first').clone();
   clonedRow.attr('class', food_order_id);
   clonedRow.find('.table_No').text();
   clonedRow.find('.table_No').text(table_No);
   clonedRow.find('.token_No').text();
   clonedRow.find('.token_No').text(token_No);
   clonedRow.find('.food_Name').text();
   clonedRow.find('.food_Name').text(food_Name);
   clonedRow.find('.food_Category').text();
   clonedRow.find('.food_Category').text(food_Category);
   clonedRow.find('.food_Count').text();
   clonedRow.find('.food_Count').text(food_Count);
   clonedRow.find('.comments').text();
   clonedRow.find('.comments').text(comments);
   clonedRow.find('.order_Status_main').text();
   clonedRow.find('.order_Status_main').text(order_Status_main);
   clonedRow.find('.food-select').val('');
   clonedRow.find('.food-select').attr('id', 'food-select-option-' + order_Id);
   $('.order_table_body').prepend(clonedRow);
   $('#food-select-option-' + order_Id).val(order_Status);
   clonedRow.find('.food-select').attr('data-value', order_Id);
}

function updateRow(order_id, table_no, food_name, food_category, food_comments, order_status) {
   var id = order_id;
   var children = document.getElementsByClassName(id)[0].children;
   children[1].innerHTML = order_id;
   children[2].innerHTML = table_no;
   children[3].innerHTML = food_name;
   children[4].innerHTML = food_category;
   children[5].innerHTML = food_comments;
   children[6].innerHTML = "<select class='food-select order_Status' id='food-select-option' value='" + order_Status + "' data-options='{' class':'" + order_Id + "'}' > <option class='opt-food'>Select Option</option> <option class='opt-food' value='#amit'>Agree</option> <option class='opt-food'>Disagree</option> <option class='opt-food'>In-Process</option> <option class='opt-food'>Served</option></select >"
}

function findElement(result) {
   var id = result.food_order_id;
   return $('tr').hasClass(id);
}

function deleteRow(result) {
   $('.' + result.order_id).remove();
}

function showSuccessToast(msg) {
   var x = document.getElementById("toast");
   $('#toast').css("background-color", '#40c05f');
   x.className = "show";
   $('#desc').text(msg);
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}

function showErrorToast(msg) {
   var x = document.getElementById("toast");
   $('#toast').css("background-color", '#c04040');
   x.className = "show";
   $('#desc').text(msg);
   setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}
