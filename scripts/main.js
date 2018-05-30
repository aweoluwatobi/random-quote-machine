function randomQuote() {
    $.ajax({
        url:"https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#random-quote").html('<p id="random_quote">&quot;'+ 
            response.quoteText+'&quot;</p> <footer class="blockquote-footer">'+ response.quoteAuthor + '</footer>')
        }
    });
}

function tweetBtn(message) {
    window.open('https://twitter.com/intent/tweet?hashtags=InspirationalQuotes,randomQuoteMachine&url=https://codepen.io/awetob/full/OZedZa&text=' + 
    encodeURIComponent(message));   
}

const quote = $("#random-quote");
function tweetHandler() {
    tweetBtn((quote).text());
}

$(document).ready(function() {
    randomQuote();
    $("#get-quote").click(function() {
        randomQuote();
    });
    $('#send-tweet').click(tweetHandler);
});


