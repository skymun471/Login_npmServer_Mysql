document.querySelector('.ajaxsend').addEventListener('click', function(){
    var inputdata = document.forms[0].elements[0].value;
    sendAjax('http://localhost:3000/email/ajax',inputdata);
})
function sendAjax(url, data){
    var data = {'email':data};
    data = JSON.stringify(data);
    // console.log(data)

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', "application/json");
    // console.log(data)
    xhr.send(data);

    xhr.addEventListener('load', function(){
        var result = JSON.parse(xhr.responseText);
        var resultdiv = document.querySelector(".result")
        if(result.result !== "ok") resultdiv.innerHTML = "Your email is not found!"
        else resultdiv.innerHTML = "Hi "+result.name+" "
    });
}