// ၁။ Sidebar မီနူး ဖွင့်/ပိတ် လုပ်ဆောင်ချက်
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
    });
}

// ၂။ Search Bar ဖွင့်/ပိတ် လုပ်ဆောင်ချက်
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const closeSearch = document.getElementById('closeSearch');

if(searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchContainer.classList.add('active');
    });
}
if(closeSearch) {
    closeSearch.addEventListener('click', () => {
        searchContainer.classList.remove('active');
    });
}

// ၃။ Dark Mode ပြောင်းလဲခြင်း လုပ်ဆောင်ချက်
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Icon ပြောင်းလဲရန်
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ၄။ အရင်သိမ်းထားတဲ့ Theme ကို ပြန်ခေါ်ခြင်း
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}
