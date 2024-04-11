var imag =  ["../static/img/空洞骑士.jpg", "../static/img/女孩打游戏.png"]

// 定义用于设置注册界面样式的函数 setRegistered
function setRegistered() {
    var body = document.getElementById("body")
    body.style.background = "url("+imag[1]+")" + "no-repeat"
    body.style.backgroundSize = "cover"
    var goLogin = document.getElementById("go-login")
    goLogin.style.textAlign = "end"
    goLogin.style.marginRight = "0"
    goLogin.style.marginLeft = "215px"
    var box = document.getElementById("box")
    box.style.height = "365px"
    var top = document.getElementById("top")
    top.style.color = "rgba(223, 229, 255, 0.9)"
    document.getElementById("login-box").hidden = true
    document.getElementById("register-box").hidden = false
}

// 定义用于设置登录界面样式的函数 setLogin
function setLogin() {
    var body = document.getElementById("body")
    body.style.background = "url("+imag[0]+")" + "no-repeat"
    body.style.backgroundSize = "cover"
    document.getElementById("login-box").hidden = false
    document.getElementById("register-box").hidden = true
}

// 点击登录
function ToLogin(){
    let usernameReg = /^[a-zA-Z0-9_-]{4,16}$/;
    let pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    let Login_Username = document.querySelector("#Login_Username");
    let Login_Password = document.querySelector("#Login_Password");
    if(Login_Username==null||Login_Password==null){
          alert("清输入完整信息");
    }
    if(usernameReg.test(Login_Username.value)&&pwdReg.test(Login_Password.value)){
         console.log("登录成功");
         location.href = "./index.html";
    }
    
}
// ToLogin()