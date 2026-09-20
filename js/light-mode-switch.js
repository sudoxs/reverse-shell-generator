var themeSelector = $("#theme-selector");
window.addEventListener("load", function () {
  if (themeSelector) {
    initTheme();
    themeSelector.on('change', function() {
      resetTheme(this.value);
    });
  }
});

/**
 * initTheme: reads the stored theme and applies it.
 */
function initTheme() {
  var currentTheme = localStorage.getItem("currentTheme");

  if (currentTheme == null) {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", currentTheme);
    $("#theme-selector").val(currentTheme).change();
  }
}

/**
 * resetTheme: applies the selected theme (dark or light).
 */
function resetTheme(currentTheme) {
  if (currentTheme !== "dark") {
    document.body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("currentTheme", currentTheme);
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("currentTheme");
  }
}
