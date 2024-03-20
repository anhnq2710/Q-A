document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn sự kiện submit mặc định của form
  
    // Lấy giá trị từ input tên đăng ký và mật khẩu mới
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
  
    // Thực hiện các bước lưu thông tin đăng ký, ví dụ: gửi yêu cầu đăng ký đến máy chủ
  
    // Hiển thị thông báo đăng ký thành công và chuyển hướng người dùng đến trang đăng nhập
    alert("Đăng ký thành công!");
    window.location.href = "trangchinh.html";
  });