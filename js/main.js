// 页头吸顶
let Header = document.getElementById("Header");
window.onscroll = () => {
    // 获得滚动条的滚动值
    let topValue = document.documentElement.scrollTop;
    // 如果滚动150元素向下移动
    if (topValue > 150) {
        Header.style.top = "-85px";
    } else {
        Header.style.top = "0px";
    }
};
window.onload = function () {
    let LoginBtn = document.getElementsByClassName("loginBtn");
    LoginBtn[0].onclick = () => {
        location.href = "./index.html";
    };
};
