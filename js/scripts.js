//Business Logic


//User Interface

jQuery(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const favoriteColor = $("#color").val();
    const dob = $("#born").val();
    const season = $("input:radio[name=season]:checked").val();
    const beverage = $("#faveDrink").val();

    $(".name").text(name);
    $(".color").text(favoriteColor);
    $(".born").text(dob);
    $(".season").text(season);
    $(".faveDrink").text(beverage);

  })
})