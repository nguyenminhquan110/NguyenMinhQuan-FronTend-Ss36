// Danh sách món ăn với đường dẫn ảnh
const foods = [
    { id: 1, name: "Phở bò Hà Nội", likes: 0, image: "https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg" },
    { id: 2, name: "Cơm tấm Sài Gòn", likes: 0, image: "https://sakos.vn/wp-content/uploads/2024/09/bia.jpg" },
    { id: 3, name: "Bún bò Huế", likes: 0, image: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/15/bun-bo-hue-6-0935.jpeg" },
];

// Khởi tạo dữ liệu từ localStorage
document.addEventListener("DOMContentLoaded", function () {
    const foodListElement = document.getElementById("food-list");

    // Lấy dữ liệu lượt thích từ localStorage
    const savedLikes = JSON.parse(localStorage.getItem("foodLikes")) || {};

    // Cập nhật lượt thích từ localStorage
    foods.forEach(food => {
        if (savedLikes[food.id] !== undefined) {
            food.likes = savedLikes[food.id];
        }
    });

    // Hiển thị danh sách món ăn
    foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.className = "food-item";

        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}" class="food-image">
            <h2>${food.name}</h2>
            <p>Lượt thích: <span id="likes-${food.id}">${food.likes}</span></p>
            <button onclick="likeFood(${food.id})">Thích +1</button>
        `;

        foodListElement.appendChild(foodItem);
    });
});

// Hàm xử lý khi bấm nút "Thích +1"
function likeFood(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (food) {
        food.likes += 1;

        // Cập nhật giao diện
        document.getElementById(`likes-${food.id}`).textContent = food.likes;

        // Lưu dữ liệu vào localStorage
        const savedLikes = JSON.parse(localStorage.getItem("foodLikes")) || {};
        savedLikes[food.id] = food.likes;
        localStorage.setItem("foodLikes", JSON.stringify(savedLikes));
    }
}