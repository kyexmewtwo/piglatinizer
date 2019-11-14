$( "document" ).ready(function() {
  $("button").click(function(){
    let word = $(".input").val();
    word = word.replace(/\s/g, '');
    let first = word[0]
    if (first == "a"){
      $(".output").html(word+"ay");
    } else if (first == "e"){
      $(".output").html(word+"ay");
    } else if (first == "i"){
      $(".output").html(word+"ay");
    } else if (first == "o"){
      $(".output").html(word+"ay");
    } else if (first == "u"){
      $(".output").html(word+"ay");
    }
    else{
      let final = word.substring(1,word.length)
      final = final + word[0] + "ay"
    $(".output").html(final);
    console.log(final);
    }
  });
});