function randomQuote() {
    $.ajax({
        url:"http://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#random-quote").html('<p class="mb-0" id="random_quote">&quot;' +
            response.quoteText + '&quot;</p> <footer class="blockquote-footer author"> '+response.quoteAuthor + '</footer>')
        }
    });
}

function tweet(message) {
    window.open('https://twitter.com/intent/tweet?hastags=freecodecamp&text=' + encodeURIComponent(message));   
}

var msg = $("#random-quote");
function tweetHandler() {
    tweet($(msg).text());
}

$(document).ready(function() {
    randomQuote();
    $("#get-quote").on("click", function() {
        randomQuote();
    });
    $('#send-tweet').on('click', tweetHandler);
});

