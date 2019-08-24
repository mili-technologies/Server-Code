$( document ).ready(function() {
    // Handler for .ready() called.
    $('.table').DataTable();
    $(".car").not("#1").hide();
  });

  $(".r").click(function(){
      $(".car").show();
      $(".car").not("#" + $(this).attr("name")).hide();
});