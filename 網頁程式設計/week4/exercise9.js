function login() {
    var ol = document.getElementById("oL");
    if (ol.innerHTML.length == 0) {
        ol.innerHTML = "<li>" + "帳號: " + get_account() + " 密碼: " + get_password();
    }
}

function get_account() {
    var account = document.querySelector("input[name='帳號']").value;
    return account;
}

function get_password() {
    var password = document.querySelector("input[name='密碼']").value;
    return password;
}