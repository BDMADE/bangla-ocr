// hide buttons
$("#retry").hide()
$("#results").hide()

$(function() {

  // sanity check
  console.log("dom is ready!");

  // event handler for form submission
  $('#post-form').on('submit', function(event){
    $("#results").hide()
    value = $('input[name="image_url"]').val();
    $.ajax({
      type: "POST",
      url: "/v1/ocr",
      contentType: "application/json",
      dataType: "json",
      data : JSON.stringify({ "image_url" : value }),
      success: function(result) {        
        final_result = result["output"].replace(/\n/g, "<br />");
        $("#post-form").hide();
        $("#retry").show();
        $("#results").show();
        console.log(value);
        console.log(final_result);
        $("#results").html("<h3>Image</h3><img src="+value+" style='max-width: 400px;'>");
        $("#resultsData").html("<h3>Result</h3><div class='resultData'>"+final_result+"</div>");
      },
      error: function(error) {
        console.log(error);
      }
    });
  });

  // Start search over, clear all existing inputs & results
  $('#retry').on('click', function(){
    $("input").val('').show();
    $("#post-form").show()
    $("#retry").hide()
    $('#results').html('');
  });


});