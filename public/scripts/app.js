/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(() => {

  function convertTime(ms) {
    return Math.floor((Date.now() - ms) / (1000*60*60*24));
  }

  function createTweetElement(tweetData) {
    let newTweet = $("<article class='tweet'>").append($("<header>"));
    let time = convertTime(tweetData.created_at);

    let header = newTweet.children("header");
    header.append($("<img />", { src: tweetData.user.avatars.small, class: "avatar", alt: "avatar" }));
    header.append($("<div class='user-name'>").text(tweetData.user.name));
    header.append($("<div class='handle'>").text(tweetData.user.handle));
    // create content
    newTweet.append($("<div class='tweet-content'>").text(tweetData.content.text));
    // create footer
    newTweet.append($("<footer class='tweet-footer'>"));
    let footer = newTweet.children("footer");
    footer.append($("<p>").text(`${time} days ago`));
    footer.append($("<div class='icons'>"));
    // create icons
    let icons = footer.children("div");
    icons.append($("<i class='flag fa fa-flag-o'>"));
    icons.append($("<i class='retweet fa fa-retweet'>"));
    icons.append($("<i class='heart fa fa-heart-o'>"));

    return newTweet;
  }

  function renderTweets(array) {
    array.forEach((item) => {
      let tweet = createTweetElement(item);
      $("#tweets").append(tweet);
    });
  }

  function loadTweets() {
    $.ajax({
      url: 'tweets',
      method: 'GET',
      success: function (tweets) {
        renderTweets(tweets);
      }
    });
  }
  loadTweets();

  function submitTweet() {
    let $button = $("#submit-tweet");
    $button.on("click", (event) => {
      event.preventDefault();
      console.log($("#tweet-field").serialize());
    });
  }
  submitTweet();

});
