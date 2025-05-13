import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then(res => res.json())
      .then(data => {
        setFullData(data);
        setFilteredData(data);
      });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const result = fullData.filter(item =>
      item.title?.toLowerCase().includes(keyword)
    );
    setFilteredData(result);
    setCurrentPage(1);
  };

  const pageData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div>
      <h1>景點觀光資訊</h1>
      <input type="text" placeholder="輸入展覽名稱..." onChange={handleSearch} />

      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>地點</th>
            <th>票價</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((data, index) => (
            <tr key={index}>
              <td>{data.title || "無標題"}</td>
              <td>{data.showInfo?.[0]?.location || "無地點"}</td>
              <td>{data.showInfo?.[0]?.price || "免費"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>上一頁</button>
        <span>第 {currentPage} / 共 {totalPages} 頁</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>下一頁</button>
      </div>
    </div>
  );
}

export default App;
