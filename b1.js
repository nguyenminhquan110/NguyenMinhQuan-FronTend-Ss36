// Kiểm tra nếu tên đã được lưu trong localStorage
document.addEventListener('DOMContentLoaded', function () {
    const savedName = localStorage.getItem('name');
    const formContainer = document.getElementById('form-container');
    const greetingContainer = document.getElementById('greeting-container');
    const greetingMessage = document.getElementById('greeting-message');

    if (savedName) {
        formContainer.style.display = 'none';
        greetingContainer.style.display = 'block';
        greetingMessage.textContent = `👋 Chào bạn, ${savedName}!`;
    }

    // Xử lý khi bấm nút "Lưu"
    document.getElementById('save-button').addEventListener('click', function () {
        const nameInput = document.getElementById('name-input').value.trim();
        if (nameInput) {
            localStorage.setItem('name', nameInput);
            formContainer.style.display = 'none';
            greetingContainer.style.display = 'block';
            greetingMessage.textContent = `👋 Chào bạn, ${nameInput} là tôi!`;
        } else {
            alert('Vui lòng nhập tên!');
        }
    });

    // Xử lý khi bấm nút "Đổi tên"
    document.getElementById('change-name-button').addEventListener('click', function () {
        localStorage.removeItem('name');
        formContainer.style.display = 'block';
        greetingContainer.style.display = 'none';
    });
});