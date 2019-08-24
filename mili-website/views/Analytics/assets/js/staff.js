$(document).ready(function () {
    ajaxRequestUserDetail();

    $(".select-table-filter").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".menu_table_body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $('.menu_table_body').on("click", '.staff_resturant_update', function () {
        var tr_class = $(this).data('value');
        var staff_Resturant_Id = tr_class;
        ajaxRequestGetStaff(staff_Resturant_Id);
    });

    $('.update-modal').on("click", '#cancel-mod', function () {
        $('.update-modal').fadeOut();
    });

    $('.menu_table_body').on("click", '.staff_resturant_delete', function () {
        var tr_class = $(this).data('value');
        $('.confirm-modal').fadeIn();
        $('#confirm_remove').val(tr_class);
    });

    $('.confirm-modal').on("click", '#cancel_remove', function () {
        $('.confirm-modal').fadeOut();
    });

    $('.confirm-modal').on("click", '#confirm_remove', function () {
        var tr_class = $(this).val();
        var staff_Resturant_Id = tr_class;
        var jsonData = { staffId: staff_Resturant_Id };
        ajaxRequestToRemoveAddedStaff(jsonData);
        $('.' + tr_class).remove();
        $('.confirm-modal').fadeOut();
    });

    $('.addnew').on("click", '.addNewFood', function () {
        $("#foodform").attr("action", "/addStaff");
    });
});

function ajaxRequestGetStaff(staff_Resturant_Id) {
    $.ajax({
        url: "/getStaffById?staffId=" + staff_Resturant_Id,
        success: function (result, state, xhr) {
            console.log(result);
            $("#foodform").attr("action", "/updateStaffById");
            $.each(result, function (i, obj) {
                $('#staff_id').val(obj.staff_id);
                $('#staff_first_name').val(obj.staff_first_name);
                $('#staff_last_name').val(obj.staff_last_name);
                $('#email_id').val(obj.email_id);
                $('#contact_no').val(obj.contact_no);
                $('#staff_role').val(obj.staff_role);
                $('#staff_salary').val(obj.staff_salary);
                $('#staff_state').val(obj.staff_state);
                $('#staff_pincode').val(obj.staff_pincode);
                $('#gender').val(obj.gender);
            });
        }
    });
}
function ajaxRequestToRemoveAddedStaff(jsonData) {
    $.ajax({
        url: "/deleteStaffById",
        type: "GET",
        data: jsonData,
        contentType: "application/json",
        dataType: "json",
        success: function (result, state, xhr) {

        },
        error: function (error) {

        }
    });
}

function ajaxRequestUserDetail() {
    $.ajax({
        url: "/showUsers?restaurantId",
        success: function (result, state, xhr) {
            $.each(result, function (i, obj) {
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