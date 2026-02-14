function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterGallery(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Pastikan tombol yang diklik menjadi aktif
  event.target.classList.add('active');

  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.style.display = 'none';
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    }
  });
}