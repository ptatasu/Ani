$(document).ready(() => {
    $('.main-form').submit((e) => {
        e.preventDefault();
        const firstName = $('#firstname').val();
        const middleInitial = $('#middle-initial').val();
        const lastName = $('#lastname').val();
        const email = $('#email').val();
        const userName = $('#username').val();
        const password = $('#password').val();
        const confPassword = $('#conf-password').val();
        // console.log(firstName, middleInitial, lastName, email, userName, password, confPassword);
        $.ajax({
            url: '../php/signup.inc.php',
            type: 'POST',
            data: { signup: true, firstName: firstName, middleInitial: middleInitial, lastName: lastName, email: email, userName: userName, password, confPassword: confPassword },
            // contentType: false,
            // processData: false,
            dataType: 'JSON',
            success: function (res) {
                // if (res.status == 'success') {
                console.log(res);
                // window.location = '../';
                // } else {
                // console.log(res.msg);
                // }
            },
        });
    });
});
