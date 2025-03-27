// Đặt màu nền từ localStorage nếu có
document.addEventListener("DOMContentLoaded", function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    // Thêm sự kiện cho các nút
    const buttons = document.querySelectorAll(".color-button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const color = button.getAttribute("data-color");
            document.body.style.backgroundColor = color;

            // Lưu màu vào localStorage
            localStorage.setItem("backgroundColor", color);
        });
    });
});