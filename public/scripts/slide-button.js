$(document).ready(() => {
  // hide forms on load
  $("section.new-tweet").hide();
  $("section.login").hide();
  $("section.register").hide();

  // composition form slider
  $("#nav-bar .compose").on("click", (event) => {
    // hide other forms
    $("section.login").slideUp();
    $("section.register").slideUp();
    // toggle composition form
    $("section.new-tweet").slideToggle();
    $("#tweet-field").focus();
  });

  // login form slider
  $("#nav-bar .login").on("click", (event) => {
    // hide other forms
    $("section.new-tweet").slideUp();
    $("section.register").slideUp();
    // toggle composition form
    $("section.login").slideToggle();
    $(".login .username").focus();
  });

  // registration form slider
  $("#nav-bar .register").on("click", (event) => {
    // hide other forms
    $("section.new-tweet").slideUp();
    $("section.login").slideUp();
    // toggle composition form
    $("section.register").slideToggle();
    $(".register .username").focus();
  });

});
