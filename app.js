// Hide containers

$('#story').hide();
$('#input-form').hide();

// Store user name, apply it to text, hide welcome-form and show input-form

let userName;
$('#name-button').click(function() {
    let name = $('#input-name').val();

    if (name == null || name == "") {
        userName = "stranger";
    } else {
        userName = name;
    }

    $('.user-name').text(userName);

    $('#welcome-form').hide();
    $('#input-form').slideDown();

});

// Store user answers in variables, apply them to text, hide input-form and reveal story container

$('#submit').click(function(){
    $('.place').text($('#input-place').val());
    $('.animal').text($('#input-animal').val().toLowerCase());
    $('.famous-person').text($('#input-famous-person').val());
    $('.magical-object').text($('#input-magical-object').val().toLowerCase());
    $('.food').text($('#input-food').val().toLowerCase());
    $('.drink').text($('#input-drink').val().toLowerCase());

    $('#input-form').hide();
    $('#story').slideDown(1500);
});

