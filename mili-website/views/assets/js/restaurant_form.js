var zip_regex = /^\d{5}(?:[-\s]\d{4})?$/;
var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
$(document).ready(function () {
    getRestaurantBasicDetails();
    $('#form_save').click(function () {
        console.log('in');        
        if ($('#restaurant_name').val().trim() == '') {
            showErrorToast('Please enter restaurant name');
            return false;
        }
        if ($('#restaurant_email_id').val().trim() == '') {
            showErrorToast('Please enter restaurant email id');
            return false;
        }
        if ($('#cuisines').val() == null) {
            console.log('cuisines');    
            showErrorToast('Please select cuisines');
            return false;
        }
        if ($('#restaurant_type').val() == null) {
            console.log('restaurant_type');    
            showErrorToast('Please select restaurant type');
            return false;
        }
        if ($('#restaurant_is_pure_veg').val().trim() == 'Restaurant is pure veg?') {
            showErrorToast('Please select restaurant veg/non-veg');
            return false;
        }
        if ($('#pay_first').val().trim() == 'Pay First') {
            showErrorToast('Please select restaurant pay first');
            return false;
        }
        if ($('#restaurant_description').val().trim() == '') {
            showErrorToast('Please enter restaurant description');
            return false;
        }
        if ($('#restaurant_cost_two').val().trim() == '') {
            showErrorToast('Please enter restaurant cost for two');
            return false;
        }
        if ($('#restaurant_address').val().trim() == '') {
            showErrorToast('Please enter restaurant address');
            return false;
        }
        if ($('#restaurant_sublocality').val().trim() == '') {
            showErrorToast('Please enter restaurant  sub locality');
            return false;
        }
        if ($('#restaurant_locality').val().trim() == '') {
            showErrorToast('Please enter restaurant locality');
            return false;
        }
        if ($('#restaurant_landmark').val().trim() == '') {
            showErrorToast('Please enter restaurant landmark');
            return false;
        }
        if ($('#sts').val().trim() == '') {
            showErrorToast('Please select restaurant state');
            return false;
        }
        if ($('#state').val().trim().trim() == '') {
            showErrorToast('Please select restaurant city');
            return false;
        }
        if ($('#restaurant_contact').val().trim() == '') {
            showErrorToast('Please enter restaurant contact');
            return false;
        }
        if ($('#restaurant_zip_code').val().trim() == '') {
            showErrorToast('Please enter restaurant zip code');
            return false;
        }
        if ($('#restaurant_acc_holder_name').val().trim() == '') {
            showErrorToast('Please enter restaurant account name');
            return false;
        }
        if ($('#restaurant_acc_number').val().trim() == '') {
            showErrorToast('Please enter restaurant account number');
            return false;
        }
        if ($('#restaurant_IFSC_code').val().trim() == '') {
            showErrorToast('Please enter restaurant IFSC code');
            return false;
        }
        if ($('#restaurant_GST_No').val().trim() == '') {
            showErrorToast('Please enter restaurant GST NO');
            return false;
        }
        if ($('#restaurant_GST_Rate').val().trim() == '') {
            showErrorToast('Please enter restaurant GST Rate');
            return false;
        }
        if ($('#restaurant_pay_upi').val().trim() == '') {
            showErrorToast('Please enter restaurant upi');
            return false;
        }
        $('#restaurant_form_submit').trigger('click');
    });
});

function getRestaurantBasicDetails() {
    $.ajax({
        url: "/getRestaurantBasicDetailsWebPortal?",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (result, state, xhr) {
            $('#restaurant_email_id').val(result[0].user_email);
            $('#restaurant_name').val(result[0].restaurant_name);
        },
        error: function (error) {

        }
    });
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
  
