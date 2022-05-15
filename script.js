function check() {
    let login = document.getElementById("login");
    let name1 = document.getElementById("name1");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");


    document.getElementById('errorMessage').innerHTML = "";

    if(login.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш логин не заполнен";
    }

    if(name1.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваше имя не заполнено";
    }

    if(lastname.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваша фамилия не заполнена";
    }

    if(email.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш e-mail не заполнен";
    }

    if(phone.value == '') {
        document.getElementById('errorMessage').innerHTML += "Ваш телефон не заполнен";
    }
}