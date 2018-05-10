function randomQuote() {
    $.ajax({
        url:"http://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#random-quote").html('<p class="mb-0" id="random_quote">' +
            response.quoteText + '</p> <footer class="blockquote-footer author"> '+response.quoteAuthor + '</footer>')
        }
    });
}
$(document).ready(function() {
    randomQuote();
    $("#get-quote").on("click", function() {
        randomQuote();
    });
});
