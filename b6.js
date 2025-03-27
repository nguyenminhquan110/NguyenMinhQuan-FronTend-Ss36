document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars");
    const selectedRating = document.getElementById("selected-rating");

    // Xử lý khi người dùng chọn sao
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = this.getAttribute("data-value");
            highlightStars(rating);
            selectedRating.textContent = `Bạn đã đánh giá ${rating} sao.`;

            // Lưu đánh giá vào localStorage
            localStorage.setItem("rating", rating);
        });
    });

    // Hàm làm nổi bật các sao
    function highlightStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute("data-value") <= rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }

    // Hiển thị đánh giá đã lưu từ localStorage
    const savedRating = localStorage.getItem("rating");
    if (savedRating) {
        highlightStars(savedRating);
        selectedRating.textContent = `Bạn đã đánh giá ${savedRating} sao.`;
    }
});
