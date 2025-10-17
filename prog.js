const menuSelect = document.getElementById('menu-select');

menuSelect.addEventListener('change', () => {
  const selectedPage = menuSelect.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
});
