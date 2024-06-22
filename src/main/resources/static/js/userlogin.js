document.addEventListener("DOMContentLoaded", async function() {
    // 模拟从API获取用户数据
    async function fetchUserData() {
        try {
            const response = await fetch('/page/current-user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log(response);

            if (!response.ok) {
                // throw new Error('Network response was not ok');
                console.error('Connection network.')
            }

            return response;
        } catch (error) {
            throw error; // Re-throwing the error to propagate it further
        }
    }

    // 登录状态
    var response = await fetchUserData();
    // var response = await result.response;
    console.log(response);

    var isLoggedIn = false; // 更改此变量模拟登录/未登录状态
    var userName = "nickname"; // 模拟用户昵称

    // 获取要操作的 div 元素
    var userLoginContainer = document.getElementById('userLoginContainer');

    if (isLoggedIn) {
        // 构建要插入的 HTML 字符串
        var htmlString = '<a href="user.html" style="color: white;">' + userName + '</a>';
        // 将 HTML 字符串插入到 div 元素中
        userLoginContainer.innerHTML = htmlString;
    } else {
        // 构建要插入的 HTML 字符串
        var htmlString = '<a href="signin.html" style="color: white;">Sign In</a>';
        // 将 HTML 字符串插入到 div 元素中
        userLoginContainer.innerHTML = htmlString;
    }
});