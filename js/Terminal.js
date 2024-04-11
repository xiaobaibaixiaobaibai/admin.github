// 终端控制模块
let OpenTerminalBtn = document.getElementById("OpenTerminalBtn"); //获取打开按钮
let TerminalBox = document.getElementById("Terminal"); //获取盒子
// 1.控制终端的展开和收起
let OpenStatus = 0;
OpenTerminalBtn.onclick = function () {
    if (OpenStatus) {
        TerminalBox.classList.remove("active");
        OpenStatus = 0;
    } else {
        TerminalBox.classList.add("active");
        OpenStatus = 1;
    }
};

// 2.控制飘窗
let MoveWindowBtn = document.getElementById("MoveWindowBtn"); //获取开启按钮
let MoveWindowBox = document.getElementById("MoveWindow"); //获取飘窗盒子
MoveWindowBtn.addEventListener("click", () => {
    if (MoveWindowBox.style.display == "block") {
        MoveWindowBtn.innerText = "开启";
        MoveWindowBox.style.display = "none";
    } else {
        MoveWindowBtn.innerText = "关闭";
        MoveWindowBox.style.display = "block";
    }
});

// 3.控制时间
let TimeWindowBtn = document.getElementById("TimeWindowBtn"); //获取开启按钮
let TimeWindowBox = document.getElementById("TimeNow"); //获取时间盒子
TimeWindowBtn.addEventListener("click", () => {
    if (TimeWindowBox.style.display == "block") {
        TimeWindowBtn.innerText = "开启";
        TimeWindowBox.style.display = "none";
    } else {
        TimeWindowBtn.innerText = "关闭";
        TimeWindowBox.style.display = "block";
    }
});

// 飘窗
var ggRoll = {
    //创建对象直接量
    roll: document.getElementById("MoveWindow"), //获取id属性为roll的对象
    speed: 10, //飘动速度，即为定时器函数多长时间执行一次
    statusX: 1, //规定每执行一次函数，left属性值变化的幅度
    statusY: 1, //规定每执行一次函数，top属性值变化的幅度
    x: 100, //规定初始状态下left属性的值
    y: 300, //规定初始状态下top属性的值
    //差值用来测算left属性值的极限
    winW:
        document.documentElement.clientWidth -
        document.getElementById("MoveWindow").offsetWidth,
    //差值用来测算top属性值的极限
    winH:
        document.documentElement.clientHeight -
        document.getElementById("MoveWindow").offsetHeight,
    //声明函数
    Go: function () {
        //设置div的left属性值
        this.roll.style.left = this.x + "px";
        //设置div的top属性值
        this.roll.style.top = this.y + "px";
        //如果statusX=1则每次减少1px,否则减少1px
        this.x = this.x + (this.statusX ? -1 : 1);
        //如果left属性值小于0，也就是div要超出左边界了，就将statusX设置为0
        if (this.x < 0) {
            this.statusX = 0;
        }
        //如果top属性值大于winW，也就是div要超出右边界了，就将statusX设置为1
        if (this.x > this.winW) {
            this.statusX = 1;
        }

        this.y = this.y + (this.statusY ? -1 : 1);
        if (this.y < 0) {
            this.statusY = 0;
        }
        if (this.y > this.winH) {
            this.statusY = 1;
        }
    },
};

var interval = setInterval("ggRoll.Go()", ggRoll.speed);
// ggRoll.roll.οnmοuseοver = function () {
//     clearInterval(interval);
// }; //onmouseover属性：鼠标移动到元素上时触发
// ggRoll.roll.οnmοuseοut = function () {
//     interval = setInterval("ggRoll.Go()", ggRoll.speed);
// }; //onmouseout属性:鼠标离开元素时触发

// 当前时间
let TimeNow = document.getElementById("TimeNow");

function getNowTime() {
    let now = new Date();
    let year = now.getFullYear(); //获取完整的年份
    let month = now.getMonth() + 1; //获取当前月份
    let today = now.getDate(); //获取当前日
    let hour = now.getHours(); //获取当前小时数
    let minute = now.getMinutes(); //获取当前分钟数
    let second = now.getSeconds(); //获取当前秒数
    let nowTime = "";
    nowTime =
        year +
        "-" +
        fillZero(month) +
        "-" +
        fillZero(today) +
        " " +
        fillZero(hour) +
        ":" +
        fillZero(minute) +
        ":" +
        fillZero(second);
    return nowTime;
}

function fillZero(str) {
    var realNum;
    if (str < 10) {
        realNum = "0" + str;
    } else {
        realNum = str;
    }
    return realNum;
}

setInterval(() => {
    TimeNow.innerText = getNowTime();
}, 1000);
// console.log(getNowTime());
