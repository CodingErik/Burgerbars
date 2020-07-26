// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // prevent the page from reloading
    event.preventDefault();

    // make a new object with the values 
    var newCat = {
      // this targets the stting input 
      name: $("#ca").val().trim(),
      // this targets the sleepy position 
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    // here we do a post request
    $.ajax("/api/cats", {
      // type POST 
      type: "POST",
      // we put the object data here 
      data: newCat
    }).then(
      function() {
        // we console log that is has been created
        console.log("created new burger");
        // reload the page to see the update
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
