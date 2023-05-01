$(document).ready(async () => {
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
