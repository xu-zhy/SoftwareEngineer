function search() {
    var query = document.getElementById('search-input').value;
    var resultsContainer = document.getElementById('search-results');

    if (query.length > 0) {
        // 模拟向数据库请求数据
        var results = ["数据1", "数据2", "数据3", "数据4", "数据5"];

        // 清空之前的结果
        resultsContainer.innerHTML = '';

        // 显示新的结果
        results.forEach(function(result) {
            var a = document.createElement('a');
            a.href = 'general.html?param1=' + result;
            a.textContent = result;
            resultsContainer.appendChild(a);
        });

        // 显示结果框
        resultsContainer.style.display = 'block';
    } else {
        // 隐藏结果框
        resultsContainer.style.display = 'none';
    }
}

// 隐藏搜索结果框（点击其他地方时）
document.addEventListener('click', function(event) {
    var resultsContainer = document.getElementById('search-results');
    var searchInput = document.getElementById('search-input');
    if (!resultsContainer.contains(event.target) && !searchInput.contains(event.target)) {
        resultsContainer.style.display = 'none';
    }
});
