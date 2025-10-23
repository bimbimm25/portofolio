document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menuList = document.getElementById("nav");
  const overlay = document.querySelector(".overlay");

  menuBtn.addEventListener("click", function () {
    menuList.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = menuList.classList.contains("active")
      ? "hidden"
      : "";
  });

  //close menu when click on menu item
  overlay.addEventListener("click", function () {
    menuList.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close menu when a menu item is clicked
  const navLinks =document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuList.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});


// close menu navbar

var typed = new Typed(".text", {
  strings: ["Frontend Development", "Editor", "Guitarist"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Filter Portofolio
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hapus kelas active dari semua tombol
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Tambah kelas active ke tombol yang diklik
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block";
        } else {
          const categories = item.getAttribute("data-category").split(" ");
          if (categories.includes(filterValue)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});

//script untuk form kontak
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari form
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Validasi sederhana
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    showNotification("Harap isi semua field yang diperlukan.", "error");
    return;
  }

  // Validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    showNotification("Format email tidak valid.", "error");
    return;
  }

  // Tampilkan loading state
  const submitBtn = document.querySelector(".submit-btn");
  const btnText = submitBtn.querySelector(".btn-text");
  const originalText = btnText.textContent;
  btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
  submitBtn.disabled = true;

  // Simulasi pengiriman data (dalam implementasi nyata, ini akan mengirim ke server)
  setTimeout(() => {
    // Reset form
    document.getElementById("contactForm").reset();

    // Tampilkan notifikasi sukses
    showNotification(
      "Pesan Anda telah berhasil dikirim! Saya akan membalasnya secepat mungkin.",
      "success"
    );

    // Reset tombol
    btnText.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
});

function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.style.display = "block";

  // Sembunyikan notifikasi setelah 5 detik
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
}

// Animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";

    setTimeout(() => {
      item.style.transition = "all 0.5s ease";
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    }, 300 + index * 100);
  });

  const formElements = document.querySelectorAll(".form-group");
  formElements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateX(20px)";

    setTimeout(() => {
      element.style.transition = "all 0.5s ease";
      element.style.opacity = "1";
      element.style.transform = "translateX(0)";
    }, 500 + index * 100);
  });
});
