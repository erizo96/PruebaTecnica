let data ={"credentiales":[{"user":"guess123465","pass":"pruebatecnica"},{"user":"edwinpiamba","pass":"prueba"},{"user":"userlogin","pass":"contrasegura"},{"user":"administrador","pass":"root21"},{"user":"123","pass":"123"}]};

function login(){
    var userForm = document.getElementById('user').value;
    var passForm = document.getElementById('pass').value;
    console.log(userForm);
    for(value in data.credentiales){
        var user = data.credentiales[value].user;
        var pass = data.credentiales[value].pass;
        if(user==userForm && pass==passForm){
            alert("Login correcto");
            document.getElementById('w1').style.display="none";
            const rand=()=>Math.random(0).toString(36).substr(2);
            const token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
            window.location='welcome.html?token='+token(40);
            //console.log(token(40));
            break;

        }else{
            document.getElementById('w1').style.display="block";
        }
    }
}

function addUser(){
    $("#yourFormId").on("submit",function(event){event.preventDefault()})
    var userForm = document.getElementById('user').value;
    var passForm = document.getElementById('pass').value;
    data['credentiales'].push({"user":""+userForm+"","pass":""+passForm+""});
    console.log(data);
    document.getElementById('pass').value="";
    document.getElementById('w2').style.display="block";
}
