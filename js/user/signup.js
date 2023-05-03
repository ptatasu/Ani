$(document).ready(() => {
    // Function to be used to check if email is valid, return boolean result(true or false)
    const isEmail = (email) => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    // Function to used to check if name is valid string, return boolean result(true or false)
    const isValidName = (name) => {
        var regex = new RegExp(/^[a-zA-Z .]+$/);
        return regex.test(name);
    };

    // Function to used to check if name is valid string, return boolean result(true or false)
    const isUserName = (name) => {
        var regex = new RegExp(/^[a-zA-Z]+[a-zA-Z0-9_\.]*$/);
        return regex.test(name);
    };

    // Function to used to check if name is valid string, return boolean result(true or false)
    const isMiddleInitial = (name) => {
        var regex = new RegExp(/^[A-Z]+/);
        return regex.test(name);
    };

    // Function to clear all the fields including the error messages and error borders
    const clearFields = () => {
        // Clear all the fields
        $('input').val(null);
        // Clear all the error borders
        $('.textbox').removeClass('border-danger').addClass('form-normal');
    };

    // Trigger this when user started to type in Firstname input and validate it
    $('#firstname').on('keyup', () => {
        let firstname = $('#firstname').val();
        if (firstname.length == 0) {
            $('#firstname').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#firstname').popover({ placement: 'top', content: 'Firstname is required.' }).popover('show');
        } else if (isValidName(firstname) == false) {
            $('#firstname').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#firstname').popover({ placement: 'top', content: 'Firstname is invalid.' }).popover('show');
        } else {
            $('#firstname').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

    $('#middle-initial').on('keyup', () => {
        let middleInitial = $('#middle-initial').val();
        if (middleInitial.length == 0) {
            $('#middle-initial').removeClass('border-danger').addClass('border-normal').popover('dispose');
        } else if (isMiddleInitial(middleInitial) == false) {
            $('#middle-initial').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#middle-initial').popover({ placement: 'top', content: 'Middle Initial must be Uppercase.' }).popover('show');
        } else {
            $('#middle-initial').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

    // Trigger this when user started to type in Lastname input and validate it
    $('#lastname').on('keyup', () => {
        let lastname = $('#lastname').val();
        if (lastname.length == 0) {
            $('#lastname').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#lastname').popover({ placement: 'top', content: 'Lastname is required.' }).popover('show');
        } else if (isValidName(lastname) == false) {
            $('#lastname').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#lastname').popover({ placement: 'top', content: 'Lastname is invalid.' }).popover('show');
        } else {
            $('#lastname').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

    // Trigger this when user started to type in email input and validate it
    $('#email').on('keyup', () => {
        let email = $('#email').val();
        if (email.length == 0) {
            $('#email').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#email').popover({ placement: 'top', content: 'Email is required.' }).popover('show');
        } else if (isEmail(email) == false) {
            $('#email').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#email').popover({ placement: 'top', content: 'Email is invalid.' }).popover('show');
        } else {
            $('#email').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

    // Trigger this when user started to type in Username input and validate it
    $('#username').on('keyup', () => {
        let username = $('#username').val();
        if (username.length == 0) {
            $('#username').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#username').popover({ placement: 'top', content: 'Username is required.' }).popover('show');
        } else if (isUserName(username) == false) {
            $('#username').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#username').popover({ placement: 'top', content: 'Username is invalid.' }).popover('show');
        } else {
            $('#username').removeClass('border-danger').addClass('border-normal').popover('dispose');
        }
    });

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

    // Trigger this when user started to type in password input and validate it
    $('#conf-password').on('keyup', function () {
        let password = $('#password').val();
        let confPassword = $('#conf-password').val();
        if (confPassword.length == 0) {
            $('#conf-password').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#conf-password').popover({ placement: 'top', content: 'Confirm Password is required.' }).popover('show');
        } else if (confPassword.length < 8 || confPassword.length > 30) {
            $('#conf-password').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#conf-password').popover({ placement: 'top', content: 'Confirm Password must be between 8 and 30 characters.' }).popover('show');
        } else if (password != confPassword) {
            $('#conf-password').removeClass('border-normal').addClass('border-danger').popover('dispose');
            $('#conf-password').popover({ placement: 'top', content: 'Confirm Password does not match.' }).popover('show');
        } else {
            $('#conf-password').removeClass('border-normal').addClass('border-normal').popover('dispose');
        }
    });

    // // Trigger this when user not accepts the terms
    // if ($('#terms').is(':checked')) {
    //     $('#terms').removeClass('border-normal').addClass('border-normal').popover('dispose');
    // } else {
    //     $('#terms').removeClass('border-normal').addClass('border-danger').popover('dispose');
    //     $('#terms').popover({ placement: 'top', content: 'You must agree to Terms and Conditions.' }).popover('show');
    // }

    $('.main-form').submit((e) => {
        e.preventDefault();
        const firstName = $('#firstname').val();
        const middleInitial = $('#middle-initial').val();
        const lastName = $('#lastname').val();
        const email = $('#email').val();
        const userName = $('#username').val();
        const password = $('#password').val();
        const confPassword = $('#conf-password').val();
        const terms = $('#terms').is(':checked');
        // console.log(firstName, middleInitial, lastName, email, userName, password, confPassword, terms);
        $.ajax({
            url: '../php/signup.inc.php',
            type: 'POST',
            data: { signup: true, firstName: firstName, middleInitial: middleInitial, lastName: lastName, email: email, userName: userName, password, confPassword: confPassword, terms: terms },
            // contentType: false,
            // processData: false,
            dataType: 'JSON',
            success: (res) => {
                if (res.status == 'success') {
                    console.log(res);
                    // clearFields();
                    window.location = '../user/signin.php';
                } else {
                    console.log(res);
                    // if there is an error in Firstname, display error message
                    if (res.firstNameErr.status == 'error') {
                        $('#firstname').removeClass('border-normal').addClass('border-danger');
                        $('#firstname').popover({ placement: 'top', content: res.firstNameErr.msg }).popover('show');
                    } else {
                        $('#firstname').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in Lastname, display error message
                    if (res.lastNameErr.status == 'error') {
                        $('#lastname').removeClass('border-normal').addClass('border-danger');
                        $('#lastname').popover({ placement: 'top', content: res.lastNameErr.msg }).popover('show');
                    } else {
                        $('#lastname').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in email, display error message
                    if (res.emailErr.status == 'error') {
                        $('#email').removeClass('border-normal').addClass('border-danger');
                        $('#email').popover({ placement: 'top', content: res.emailErr.msg }).popover('show');
                    } else {
                        $('#email').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in username, display error message
                    if (res.userNameErr.status == 'error') {
                        $('#username').removeClass('border-normal').addClass('border-danger');
                        $('#username').popover({ placement: 'top', content: res.userNameErr.msg }).popover('show');
                    } else {
                        $('#username').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in password, display error message
                    if (res.passwordErr.status == 'error') {
                        $('#password').removeClass('border-normal').addClass('border-danger');
                        $('#password').popover({ placement: 'top', content: res.passwordErr.msg }).popover('show');
                    } else {
                        $('#password').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if there is an error in confirm password, display error message
                    if (res.confPasswordErr.status == 'error') {
                        $('#conf-password').removeClass('border-normal').addClass('border-danger');
                        $('#conf-password').popover({ placement: 'top', content: res.confPasswordErr.msg }).popover('show');
                    } else {
                        $('#conf-password').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                    // if the user does not agree to the terms, display error message
                    if (res.terms.status == 'error') {
                        $('#terms').removeClass('border-normal').addClass('border-danger');
                        $('#terms').popover({ placement: 'top', content: res.terms.msg }).popover('show');
                    } else {
                        $('#terms').removeClass('border-danger').addClass('border-normal').popover('dispose');
                    }
                }
            },
        });
    });
});
