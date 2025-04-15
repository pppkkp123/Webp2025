var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

let fullData = [];   
let filteredData = [];  
let rowsPerPage = 10;         // 每頁顯示幾筆
let currentPage = 1;          // 當前頁面

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    fullData = JSON.parse(this.responseText);
    filteredData = fullData;
    renderTable(currentPage);
    renderPagination();
  }
};

function renderTable(page) {
  var tbody = document.querySelector("#csie tbody");
  tbody.innerHTML = ""; // 清空內容

  let start = (page - 1) * rowsPerPage;
  let end = Math.min(start + rowsPerPage, filteredData.length);
  let pageData = filteredData.slice(start, end);

  pageData.forEach(function (data) {
    var row = tbody.insertRow();
    row.insertCell(0).innerHTML = data.title || "無標題";
    row.insertCell(1).innerHTML = data.showInfo[0]?.location || "無地點";
    row.insertCell(2).innerHTML = data.showInfo[0]?.price || "免費";
  });
}

function renderPagination() {
  let totalPages = Math.ceil(fullData.length / rowsPerPage);
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  
  let pageInfo = document.getElementById("page-info");
  pageInfo.textContent = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;

  // ← 上一頁
  let prevBtn = document.createElement("button");
  prevBtn.textContent = "<-";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = function () {
    if (currentPage > 1) {
      currentPage--;
      renderTable(currentPage);
      renderPagination();
    }
  };
  pagination.appendChild(prevBtn);

  let page = document.createElement("button");
  page.textContent = "currentPage";
  
  // → 下一頁
  let nextBtn = document.createElement("button");
  nextBtn.textContent = "->";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = function () {
    if (currentPage < totalPages) {
      currentPage++;
      renderTable(currentPage);
      renderPagination();
    }
  };
  pagination.appendChild(nextBtn);
}
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  filteredData = fullData.filter(item =>
    item.title.toLowerCase().includes(keyword)
  );
  currentPage = 1;
  renderTable(currentPage);
  renderPagination();
});