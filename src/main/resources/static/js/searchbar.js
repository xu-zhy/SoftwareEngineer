// 志勇的搜索景点关键词代码
function searchScenicSpot() {
    var keyword = document.getElementById('search-input').value.trim();

    return fetch('/scenicSpot/search?keyword=' + encodeURIComponent(keyword))
        .then(response => response.json())
        .then(scenicSpots => {
            // console.log('source: ', scenicSpots);
            return scenicSpots;
        })
        .catch(error => {
            console.error('Error searching scenicSpots:', error);
            alert('Error searching scenicSpots');
            return [];
        });
}


async function search() {
    var resultsContainer = document.getElementById('search-results');

    // 向数据库请求数据
    // var results = ["数据1", "数据2", "数据3", "数据4", "数据5"];
    var results = await searchScenicSpot();
    console.log(results);

    if (results.length > 0) {
        // 清空之前的结果
        resultsContainer.innerHTML = '';

        // 显示新的结果
        results.forEach(function(result) {
            var a = document.createElement('a');
            // console.log('result: ', result.sceneName);
            a.href = 'general.html?param1=' + result.sceneName;
            a.textContent = result.sceneName;
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
