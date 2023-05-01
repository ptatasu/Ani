$(document).ready(() => {
    $('.main-form').on('submit', (e) => {
        e.preventDefault();
        const user = $('#email').val();
        const pass = $('#password').val();
        $.ajax({
            url: '../php/signin.inc.php',
            type: 'POST',
            data: { signin: true, user: user, pass: pass },
            dataType: 'JSON',
            success: function (res) {
                if (res.status == 'success') {
                    window.location = '../';
                } else {
                    console.log(res.msg);
                }
            },
        });
    });
});
