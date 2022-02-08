/*
* Only JS
*/

document
.getElementById("id-btn-send")
.addEventListener("click", function (e) {
    
    e.preventDefault();

    var clientName = document.getElementById("id-client-name").value;
    var clientLastName = document.getElementById("id-client-last-name").value;
    var clientAddress = document.getElementById("id-client-address").value;
    var clientEmail = document.getElementById("id-client-email").value;
    var clientPhone = document.getElementById("id-client-phone").value;
    var clientDetails = document.getElementById("id-client-details").value;
    
    var body = 
    { 
        "name" : clientName,
        "last_name" : clientLastName,
        "address" : clientAddress,
        "email" : clientEmail,
        "phone" : clientPhone,
        "details" : clientDetails,
    };

    var bodyStringify = JSON.stringify(body);

    console.log("Body " + bodyStringify);

    post(bodyStringify);
});

var post = function (url,body){
    var httpCall = new XMLHttpRequest();

    httpCall.onreadystatechange = function () {

        if (this.readyState != 4) return;
    
        if (this.status < 400 ) {
            var data = JSON.parse(" No Error responseText " + this.responseText);
            console.log(data)
        }else{
            window.location.replace("error.html");
        }
    };

    httpCall.open("POST", url, true);
    httpCall.setRequestHeader('Content-Type', 'application/json');
    httpCall.send(body);
}
