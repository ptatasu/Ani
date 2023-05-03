$(document).ready(async () => {
    // Function to used to check if name is valid string, return boolean result(true or false)
    const isUserName = (name) => {
        var regex = new RegExp(/^[a-zA-Z]+[a-zA-Z0-9_\.]*$/);
        return regex.test(name);
    };

    // Function to be used to check if email is valid, return boolean result(true or false)
    const isEmail = (email) => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    // Trigger this when user started to type in password input and validate it
    $('#password').on('keyup', function () {
        let password = $('#password').val();
        if (password.length == 0) {
            $('#password').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#password').popover({ placement: 'top', content: 'Password is required.' }).popover('show');
        } else if (password.length < 8 || password.length > 30) {
            $('#password').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#password').popover({ placement: 'top', content: 'Password must be between 8 and 30 characters.' }).popover('show');
        } else {
            $('#password').removeClass('border-normal').addClass('border-normal').popover('dispose');
        }
    });

    // Trigger this when user started to type in email/username input and validate it
    $('#email').on('keyup', () => {
        let email = $('#email').val();
        if (email.length == 0) {
            $('#email').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#email').popover({ placement: 'top', content: 'Email/Username is required.' }).popover('show');
        } else if (isEmail(email) == false && isUserName(email) == false) {
            $('#email').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#email').popover({ placement: 'top', content: 'Email/Username is invalid.' }).popover('show');
        } else {
            $('#email').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

    $('.main-form').on('submit', (e) => {
        e.preventDefault();
        const user = $('#email').val();
        const pass = $('#password').val();
        $.ajax({
            url: '../php/signin.inc.php',
            type: 'POST',
            data: { signin: true, userName: user, password: pass },
            dataType: 'JSON',
            success: function (res) {
                if (res.status == 'success') {
                    window.location = '../';
                } else {
                    console.log(res);
                    // if there is an error in username/email, display error message
                    if (res.userNameErr.status == 'error') {
                        $('#email').removeClass('border-normal').addClass('border-danger');
                        $('#email').popover({ placement: 'top', content: res.userNameErr.msg }).popover('show');
                    } else {
                        $('#email').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in password, display error message
                    if (res.passwordErr.status == 'error') {
                        $('#password').removeClass('border-normal').addClass('border-danger');
                        $('#password').popover({ placement: 'top', content: res.passwordErr.msg }).popover('show');
                    } else {
                        $('#password').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in password, display error message
                    if (res.status == 'error') {
                        if (res.msg !== '') {
                            $('.error-container').html(res.msg).css('display', 'block');
                        } else {
                            $('.error-container').css('display', 'none');
                        }
                    } else {
                        $('.error-container').html('').css('display', 'none');
                    }
                }
            },
        });
    });
});
/**
 * custom funtion to decode jwt response
 */
const decodeJwtResponse = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );
    return JSON.parse(jsonPayload);
};

// let responsePayload;

window.handleCredentialResponse = (response) => {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const user = decodeJwtResponse(response.credential);
    $.ajax({
        url: '../php/signin.inc.php',
        type: 'POST',
        data: { google: true, first_name: user.given_name, pfp: user.picture },
        dataType: 'JSON',
        success: function (res) {
            // console.log(res);
            window.location = '../';
        },
    });
};
/** logout
 * google.ccounts.id.disableAutoSelect();
 * google.ccounts.id.promt();
 */
