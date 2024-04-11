window.onload = () => {
    // 选项点击
    function Options(Class) {
        let Options_1 = document.getElementsByClassName(Class);
        for (let index = 0; index < Options_1.length; index++) {
            Options_1[index].addEventListener("click", () => {
                for (let j = 0; j < Options_1.length; j++) {
                    Options_1[j].classList.remove("active");
                }
                Options_1[index].classList.add("active");
            });
        }
    }
    Options("Options_1");
    Options("Options_2");
    Options("Options_3");
    Options("Options_4");
};
