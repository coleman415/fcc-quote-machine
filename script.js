/** refreshQuote does an ajax call of a Trump Quotes API
also callsback updateTweet to send the quote to twitter */
function refreshQuote() {
    console.warn('Call refreshQuote.');
    $.ajax({
        url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
        success: (a) => {
            console.warn('API success');
            $('#quote').hide().html(a.message).fadeIn(2000);
            console.warn('update tweet by calling back updateTweet');
            updateTweet();
        },
        cache: false,
    });
}

/** Callback function for setting the quote to be tweeted */
function updateTweet() {
    const quoteText = $('#quote').text();
    const titleText = $('#title').text();
    console.warn('Quote text: ', quoteText);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + quoteText + ' -- ' + titleText);
    console.warn('Link was updated to: ', $('#tweet').attr('href'));
}

/** on document ready, call refreshQuote and set button to refreshQuote
on click */
$(document).ready(() => {
    refreshQuote();
    $('#getMessage').click(refreshQuote);
});
