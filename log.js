
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn sự kiện submit mặc định của form
  

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (username === "quocanh" && password === "123456") {
      alert("Đăng nhập thành công!");
  
       window.location.href = "trangchinh.html";
    } 
    else if (username === "admin" && password === "123456") {
      alert("Đăng nhập quản trị viên thành công!");

       window.location.href = "admin.html";
    }
    else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  });