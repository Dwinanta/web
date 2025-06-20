
// Chart initialization
const ctx1 = document.getElementById('donutChart').getContext('2d');
new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Crypto', 'Saham US', 'Emas'],
    datasets: [{
      label: 'Alokasi Aset',
      data: [40, 35, 25],
      backgroundColor: ['#b36dff', '#0ff', '#88f'],
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  }
});

const ctx2 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Growth',
      data: [100, 120, 150, 200],
      borderColor: '#0ff',
      backgroundColor: 'transparent'
    }]
  },
  options: {
    scales: {
      x: {
        ticks: { color: 'white' }
      },
      y: {
        ticks: { color: 'white' }
      }
    },
    plugins: {
      legend: {
        labels: { color: 'white' }
      }
    }
  }
});

// WhatsApp form handling
function sendToWhatsApp() {
  const nama = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('message').value;

  const noWA = "6285732259281";
  const message = `Halo, saya ${nama} (%0AEmail: ${email}) ingin menghubungi Anda.%0A%0APesan:%0A${pesan}`;

  const url = `https://wa.me/${noWA}?text=${message}`;
  window.open(url, "_blank");
}

// Menu toggle functionality
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("active");
  overlay.style.display = menu.classList.contains("active") ? "block" : "none";
}

// Auto-close menu when clicking links
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
  });
});
