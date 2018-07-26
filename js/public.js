~function () {
  let computed = function () {
    let desW = 375;
    let devW = document.documentElement.clientWidth;
    if (devW >= 375) {
      document.documentElement.style.fontSize = '100px';
      return;
    }
    document.documentElement.style.fontSize = devW / desW * 100 + 'px';
  };
  computed();
  window.addEventListener('resize', computed, false);
}();

