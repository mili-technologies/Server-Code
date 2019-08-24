$(document).ready(function(){
    
   $('.modal-close').click(function(){
        $('.wrong_login').hide();
    });
    });
    
    $(document).ready(function(){
    $('.inner-model').click(function(){
        $('.wrong_login').hide();
    });
});

    function checkEmail() {

        var email = document.getElementById('login_email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
    }

    function getPagination(table) {

        var lastPage = 1;
  
        $('#maxRows').on('change', function (evt) {
           //$('.paginationprev').html('');						// reset pagination 
  
  
           lastPage = 1;
           $('.pagination').find("li").slice(1, -1).remove();
           var trnum = 0;									// reset tr counter 
           var maxRows = parseInt($(this).val());			// get Max Rows from select option
  
           if (maxRows == 5000) {
  
              $('.pagination').hide();
           } else {
  
              $('.pagination').show();
           }
  
           var totalRows = $(table + ' tbody tr').length;		// numbers of rows 
           $(table + ' tr:gt(0)').each(function () {			// each TR in  table and not the header
              trnum++;									// Start Counter 
              if (trnum > maxRows) {						// if tr number gt maxRows
  
                 $(this).hide();							// fade it out 
              } if (trnum <= maxRows) { $(this).show(); }// else fade in Important in case if it ..
           });											//  was fade out to fade it in 
           if (totalRows > maxRows) {						// if tr total rows gt max rows option
              var pagenum = Math.ceil(totalRows / maxRows);	// ceil total(rows/maxrows) to get ..  
              //	numbers of pages 
              for (var i = 1; i <= pagenum;) {			// for each page append pagination li 
                 $('.pagination #prev').before('<li data-page="' + i + '">\
                                        <span>'+ i++ + '<span class="sr-only">(current)</span></span>\
                                      </li>').show();
              }											// end for i 
           } 												// end if row count > max rows
           $('.pagination [data-page="1"]').addClass('active'); // add active class to the first li 
           $('.pagination li').on('click', function (evt) {		// on click each page
              evt.stopImmediatePropagation();
              evt.preventDefault();
              var pageNum = $(this).attr('data-page');	// get it's number
  
              var maxRows = parseInt($('#maxRows').val());			// get Max Rows from select option
  
              if (pageNum == "prev") {
                 if (lastPage == 1) { return; }
                 pageNum = --lastPage;
              }
              if (pageNum == "next") {
                 if (lastPage == ($('.pagination li').length - 2)) { return; }
                 pageNum = ++lastPage;
              }
  
              lastPage = pageNum;
              var trIndex = 0;							// reset tr counter
              $('.pagination li').removeClass('active');	// remove active class from all li 
              $('.pagination [data-page="' + lastPage + '"]').addClass('active');// add active class to the clicked 
              // $(this).addClass('active');					// add active class to the clicked 
              $(table + ' tr:gt(0)').each(function () {		// each tr in table not the header
                 trIndex++;								// tr index counter 
                 // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
                 if (trIndex > (maxRows * pageNum) || trIndex <= ((maxRows * pageNum) - maxRows)) {
                    $(this).hide();
                 } else { $(this).show(); } 				//else fade in 
              }); 										// end of for each tr in table
           });	
           
           
           // end of on click pagination list
  
        }).val(10).change();
  
        // end of on select change 
        var compare = {                           // Declare compare object
           name: function (a, b) {                  // Add a method called name
              a = a.replace(/^the /i, '');          // Remove The from start of parameter
              b = b.replace(/^the /i, '');          // Remove The from start of parameter
  
              if (a < b) {                          // If value a is less than value b
                 return -1;                          // Return -1
              } else {                              // Otherwise
                 return a > b ? 1 : 0;               // If a is greater than b return 1 OR
              }                                     // if they are the same return 0
           },
           duration: function (a, b) {              // Add a method called duration
              a = a.split(':');                     // Split the time at the colon
              b = b.split(':');                     // Split the time at the colon
  
              a = Number(a[0]) * 60 + Number(a[1]); // Convert the time to seconds
              b = Number(b[0]) * 60 + Number(b[1]); // Convert the time to seconds
  
              return a - b;                         // Return a minus b
           },
           date: function (a, b) {                  // Add a method called date
              a = new Date(a);                      // New Date object to hold the date
              b = new Date(b);                      // New Date object to hold the date
  
              return a - b;                         // Return a minus b
           }
        };
  
        $('.order_table,.order,.menu_table_body').each(function () {
           var $table = $(this);                     // This sortable table
           var $tbody = $table.find('tbody');        // Store table body
           var $controls = $table.find('th');        // Store table headers
           var rows = $tbody.find('tr').toArray();   // Store array containing rows
  
           $controls.on('click', function () {        // When user clicks on a header
              var $header = $(this);                  // Get the header
              var order = $header.data('sort');       // Get value of data-sort attribute
              var column;                             // Declare variable called column
  
              // If selected item has ascending or descending class, reverse contents
              if ($header.is('.ascending') || $header.is('.descending')) {
                 $header.toggleClass('ascending descending');    // Toggle to other class
                 $tbody.append(rows.reverse());                // Reverse the array
              } else {                                        // Otherwise perform a sort                            
                 $header.addClass('ascending');                // Add class to header
                 // Remove asc or desc from all other headers
                 $header.siblings().removeClass('ascending descending');
                 if (compare.hasOwnProperty(order)) {  // If compare object has method
                    column = $controls.index(this);         // Search for columnâ€™s index no
  
                    rows.sort(function (a, b) {               // Call sort() on rows array
                       a = $(a).find('td').eq(column).text(); // Get text of column in row a
                       b = $(b).find('td').eq(column).text(); // Get text of column in row b
                       return compare[order](a, b);           // Call compare method
                    });
  
                    $tbody.append(rows);
                 }
              }
           });
        });
  
  
        // END OF PAGINATION 
     }
  