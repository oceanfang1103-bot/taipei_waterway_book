(function () {
  function addLanguageSwitcher() {
    var path = window.location.pathname;
    var marker = "/taipei_waterway_book/";
    var markerIndex = path.indexOf(marker);
    if (markerIndex === -1) return;

    var prefix = path.slice(0, markerIndex + marker.length);
    var relative = path.slice(markerIndex + marker.length);
    var isChinese = relative === "zh" || relative.indexOf("zh/") === 0;
    var counterpart;

    if (isChinese) {
      counterpart = relative.replace(/^zh\/?/, "");
      if (!counterpart) counterpart = "index.html";
    } else {
      counterpart = "zh/" + (relative || "index.html");
    }

    var link = document.createElement("a");
    link.className = "language-switcher";
    link.href = prefix + counterpart;
    link.textContent = isChinese ? "English" : "中文";
    link.setAttribute("aria-label", isChinese ? "Switch to English" : "切換至中文版");
    document.body.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addLanguageSwitcher);
  } else {
    addLanguageSwitcher();
  }
})();
