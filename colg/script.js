    document.getElementById('searchBtn').addEventListener('click', () => {
      const skill = document.getElementById('searchInput').value.trim().toLowerCase();
      if (skill) {
        window.location.href = `display.html?skill=${encodeURIComponent(skill)}`;
      }
    });

    document.getElementById('searchInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
      }
    });