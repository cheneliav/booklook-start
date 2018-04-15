
var fetch = function () {
  var isbn = $('#isbn').val();
    $.ajax({
      method: "GET",
      // url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
      
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ isbn,
      success: function(data) {
        // debugger;
        console.log(data);
        console.log(data.items[0].volumeInfo.title);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

$('button').on('click', fetch);  