document.addEventListener("DOMContentLoaded", function () {
    const modeIcon = document.getElementById("mode-icon");
    const body = document.body;

    // Kiểm tra trạng thái từ localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
        body.classList.add("dark-mode");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png"; // Icon mặt trăng
    }

    // Xử lý khi bấm vào icon
    modeIcon.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Cập nhật icon và lưu trạng thái
        if (body.classList.contains("dark-mode")) {
            modeIcon.src = "https://img.icons8.com/ios-filled/50/moon-symbol.png"; // Icon mặt trăng
            localStorage.setItem("theme", "dark");
        } else {
            modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png"; // Icon mặt trời
            localStorage.setItem("theme", "light");
        }
    });
});