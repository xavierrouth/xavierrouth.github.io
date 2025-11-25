(async () => {
    const navHost = document.getElementById('site-nav');
    if (!navHost) return;
    try {
        const res = await fetch('nav.html');
        navHost.innerHTML = await res.text();
        const current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
        navHost.querySelectorAll('a[href]').forEach(a => {
            if (a.getAttribute('href').toLowerCase() === current) {
                a.setAttribute('aria-current', 'page');
                a.style.fontWeight = '600';
            }
        });
    } catch (e) {
        navHost.textContent = 'Navigation failed to load.';
        console.error(e);
    }
})();
