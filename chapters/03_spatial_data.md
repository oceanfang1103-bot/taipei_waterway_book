# Chapter 3 — Methods and Reconstruction of Spatial Data

> **“By overlaying historical maps and present-day flood-susceptibility locations in a GIS, the concealed pattern of the former water network can be made visible again.”**

---

### 3.1 Data Sources and Spatial Reconstruction

The study focuses on four districts in central and southern Taipei—Da’an, Songshan, Xinyi, and Wenshan—and applies geometric correction and vectorization to the source data.

1. **Mapped flood-area polygons and derived centroids (650 mm of rainfall in 24 hours)**  
   Polygon data were obtained from Taiwan’s Water Resources Agency and the Taipei City Government. The polygons represent areas mapped as flood-prone under the specified rainfall scenario or areas previously recorded as inundated. Following geometric correction, the geometric centroid of each polygon was calculated, producing **3,022 flood-area centroid points** for point-based analysis. These centroids are analytical representations of mapped areas; they are not 3,022 independently observed flood incidents.
2. **Historic-waterway vector layer**  
   Culverted historic waterway corridors were redrawn and reconstructed from historical sources, including the *Taiwan Fortress Map* (臺灣堡圖) from the Japanese colonial period and the 1939 *Map of the Liugong Irrigation Association District* (瑠公圳水利組合區域圖). Channel widths were represented as 5 m for main canals, 2 m for branches, and 1 m for minor distribution channels.

---

### 3.2 Comparing Historic Waterways with the Modern City

#### Reconstructed routes and physical widths of historic irrigation canals

![Map of reconstructed historic irrigation canals](../images/Map_canal_distribution_AS.png)

*Figure 3-1. Reconstructed routes and physical channel widths of historic irrigation canals in Da’an, Wenshan, Xinyi, and Songshan districts, Taipei.*

#### Interactive comparison of historic and modern maps

*Drag the slider to compare the 1939 Liugong Irrigation Association map with a map of present-day Taipei.*

<div style="display: none !important;">

![1939 map](../images/liugong_1939.jpg)
![Modern map](../images/taipei_modern.jpg)

</div>

<div id="compare-slider-container" style="position: relative; width: 100%; max-width: 1000px; height: 600px; margin: 20px auto; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); user-select: none;">
  <img src="../_images/taipei_modern.jpg" alt="Map of present-day Taipei" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" />
  <div id="compare-overlay" style="position: absolute; top: 0; left: 0; width: 50%; height: 100%; overflow: hidden; border-right: 3px solid #ffffff; box-shadow: 2px 0 6px rgba(0,0,0,0.3); z-index: 2;">
    <img src="../_images/liugong_1939.jpg" alt="1939 map of the Liugong Irrigation Association district" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; max-width: none;" id="overlay-img" />
  </div>
  <input type="range" min="0" max="100" value="50" id="compare-range-input" aria-label="Compare the 1939 and present-day maps" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; z-index: 10; cursor: ew-resize; margin: 0;" />
  <div id="compare-handle-line" style="position: absolute; top: 0; left: 50%; width: 4px; height: 100%; background: #ffffff; z-index: 3; pointer-events: none; transform: translateX(-50%); box-shadow: 0 0 8px rgba(0,0,0,0.4);">
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 36px; height: 36px; background: #ffffff; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #333; font-size: 14px;">◄►</div>
  </div>
  <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 13px; z-index: 4; pointer-events: none;">1939 Liugong irrigation map</div>
  <div style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 13px; z-index: 4; pointer-events: none;">Present-day Taipei</div>
</div>

<script>
(function() {
  function initSlider() {
    const container = document.getElementById('compare-slider-container');
    const input = document.getElementById('compare-range-input');
    const overlay = document.getElementById('compare-overlay');
    const overlayImg = document.getElementById('overlay-img');
    const handleLine = document.getElementById('compare-handle-line');
    if (!container || !input || !overlay || !overlayImg || !handleLine) return;
    function syncWidth() { overlayImg.style.width = container.offsetWidth + 'px'; }
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
  if (document.readyState === 'complete' || document.readyState === 'interactive') initSlider();
  else document.addEventListener('DOMContentLoaded', initSlider);
})();
</script>

---

### 3.3 Spatial Analysis

#### 1. Micro-scale distance bands and standardized density

The shortest geometric distance from each flood-area centroid to the nearest historic waterway was calculated and divided into five classes reflecting the scale of Taipei’s streets and urban blocks. To account for unequal distance-band widths, the analysis reports a **band-width-normalized point count**: the number of centroids divided by the width of each distance band. This exploratory measure adjusts for unequal radial widths but is not an areal density. A conventional spatial-density comparison would divide the count in each non-overlapping band by that band’s land area (for example, centroids per km²).

#### 2. Plain-constrained Monte Carlo simulation

Hillslopes with gradients greater than 30% were excluded because they are less susceptible to standing water and generally farther from the historic canals. Within the remaining low-lying plain, 3,022 points were placed at random in each of 1,000 simulations. The resulting expected median distances were compared with the observed median distance of 125.72 m to estimate a spatial significance value.

#### 3. Overlay analysis

Risk buffers of 15 m, 30 m, and 50 m around the historic waterways were dissolved and overlaid with the flood-area centroids. The analysis then compared the number and proportion of points inside and outside the buffered corridors.
