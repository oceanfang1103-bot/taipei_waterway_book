# 第三章 研究方法與空間圖資重現

> **「透過 GIS 空間分析工具，將歷史圖資與現代淹水潛勢點重疊，讓隱沒的水脈紋理重新浮現。」**

---

### 3.1 資料來源與空間圖資重構

本研究採集台北市核心四個研究行政區（大安、松山、信義、文山），進行空間幾何校正與向量化處理：

1. **淹水潛勢點位圖層（24小時降雨 650mm）**  
   採集經濟部水利署與台北市政府之淹水潛勢面資料，透過幾何校正與「面轉中心點（Centroid）」技術，提取出 **3,022 筆的積淹水潛勢點位**。
2. **歷史古水道向量圖層**  
   依據日治時期《臺灣堡圖》與 1939 年《瑠公圳水利組合區域圖》等歷史圖資，重新繪製並復原已暗渠化之古水路廊道，並依幹線（5m）、支線（2m）及小給水路（1m）還原實際渠道幅寬。

---

### 3.2 歷史水脈與現代都市圖層對照

#### 歷史水圳路徑與渠道實體幅寬還原
![歷史水圳路徑圖](../images/Map_canal_distribution_AS.png)
*圖 3-1 台北市區（大安、文山、信義、松山）歷史水圳路徑與渠道實體幅寬還原圖*

#### 過去與現代古水路圖層滑動對比 (Story Map Interactive)
*請左右拖拉下方中間的滑桿，即可對比 1939 年瑠公水利組合區域圖與現代台北市地圖之空間疊合狀況：*

<!-- 隱藏區塊：強制 Sphinx 複製圖檔至打包目錄 -->
<div style="display: none !important;">

![1939](../images/liugong_1939.jpg)
![modern](../images/taipei_modern.jpg)

</div>

<!-- 原生高穩定度對比滑桿容器 -->
<div id="compare-slider-container" style="position: relative; width: 100%; max-width: 1000px; height: 600px; margin: 20px auto; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); user-select: none;">
  <!-- 底圖：現代台北市地圖 -->
  <img src="../_images/taipei_modern.jpg" alt="現代台北市地圖" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" />
  
  <!-- 頂層切片：1939 古圖 -->
  <div id="compare-overlay" style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden; border-right: 3px solid #ffffff; box-shadow: 2px 0 6px rgba(0,0,0,0.3); z-index: 2;">
    <img src="../_images/liugong_1939.jpg" alt="1939 年瑠公水利組合區域圖" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; max-width: none;" id="overlay-img" />
  </div>

  <!-- 滑動控制桿 -->
  <input type="range" min="0" max="100" value="50" id="compare-range-input" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 10; cursor: ew-resize; margin: 0;" />
  
  <!-- 中央軸線與指引標頭 -->
  <div id="compare-handle-line" style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: #ffffff; z-index: 3; pointer-events: none; transform: translateX(-50%); box-shadow: 0 0 8px rgba(0,0,0,0.4);">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 36px; height: 36px; background: #ffffff; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #333; font-size: 14px;">◄►</div>
  </div>

  <!-- 圖層標籤 -->
  <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 13px; z-index: 4; pointer-events: none;">1939 年瑠公水利組合區域圖</div>
  <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 13px; z-index: 4; pointer-events: none;">現代台北市地圖</div>
</div>

<!-- 自動對齊與滑動控制腳本 -->
<script>
(function() {
  function initSlider() {
    const container = document.getElementById('compare-slider-container');
    const input = document.getElementById('compare-range-input');
    const overlay = document.getElementById('compare-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const handleLine = document.getElementById('compare-handle-line');

    if (!container || !input || !overlay || !overlayImg || !handleLine) return;

    function syncWidth() {
      overlayImg.style.width = container.offsetWidth + 'px';
    }

    function updatePos() {
      const val = input.value;
      overlay.style.width = val + '%';
      handleLine.style.left = val + '%';
    }

    input.addEventListener('input', updatePos);
    window.addEventListener('resize', syncWidth);
    
    syncWidth();
    updatePos();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initSlider();
  } else {
    document.addEventListener('DOMContentLoaded', initSlider);
  }
})();
</script>
---

### 3.3 空間分析工具與模組設計
#### 1. 微尺度距離劃分與標準化密度計算
計算每筆淹水點至最近古水道的最短幾何距離，並依都市街廓尺度劃分為 5 個等級（Class 1 至 Class 5）。為消除不同級距寬度造成的統計盲點，計算各等級之「單位寬密度（點數 / 級距寬度）」。

#### 2. 平地限制性蒙地卡羅隨機抽樣 (Plain-Constrained Monte Carlo Simulation)
剔除不意積水且遠離古水路的山坡地（坡度 >30%），僅於平原低窪區進行電腦 1,000 次完全隨機拋點（每輪撒落 3,022 點），算出隨機期望中位數距離，與實測中位數（125.72m）進行空間顯著性檢定（求算 $p$-Value）。

#### 3. 疊加分析 (Overlay Analysis)
將古水道 15m、30m、50m 的地理風險緩衝區進行屬性合併，計算緩衝區廊道內外所涵蓋的淹水點比例與空間密度差異。