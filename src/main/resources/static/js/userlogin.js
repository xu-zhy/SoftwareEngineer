// 模拟登录状态
var isLoggedIn = false; // 更改此变量模拟登录/未登录状态
var userName = "用户昵称"; // 模拟用户昵称

if (isLoggedIn) {
    document.write('<a href="user.html" style="color: white;">'+ userName + '</a>');
} else {
    document.write('<a href="signin.html" style="color: white;">Sign In</a>');
}