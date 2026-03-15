/* ============================================
   W PLAY TV - JAVASCRIPT
   ============================================ */

// ============ DADOS DE FILMES E SÉRIES ============
// Usando imagens confiáveis do TMDB com fallback
const TMDB_BASE = 'https://image.tmdb.org/t/p/w500';
const TMDB_ORIG = 'https://image.tmdb.org/t/p/original';

const catalog = {
    lancamentos: [
        { title: 'Deadpool & Wolverine', year: '2024', poster: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg' },
        { title: 'Duna: Parte 2', year: '2024', poster: '/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg' },
        { title: 'Alien: Romulus', year: '2024', poster: '/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg' },
        { title: 'Coringa: Delírio a Dois', year: '2024', poster: '/muth4M9vS21t20Qn1uQYm99S66b.jpg' },
        { title: 'Gladiador 2', year: '2024', poster: '/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg' },
        { title: 'Venom: A Última Rodada', year: '2024', poster: '/aosm8NMQ3UyoBVpSxyimorCQykC.jpg' },
        { title: 'Moana 2', year: '2024', poster: '/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg' },
        { title: 'Wicked', year: '2024', poster: '/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg' },
        { title: 'Sonic 3', year: '2024', poster: '/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg' },
        { title: 'Kraven: O Caçador', year: '2024', poster: '/i47IUSsN126K11JUzqQIOi1Mg1M.jpg' },
    ],
    series: [
        { title: 'The Last of Us', year: '2023', poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
        { title: 'House of the Dragon', year: '2022', poster: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg' },
        { title: 'Severance', year: '2022', poster: '/lbrd5RC2WGjGLVzGmFY5UXJM2Uw.jpg' },
        { title: 'The Bear', year: '2022', poster: '/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg' },
        { title: 'Shogun', year: '2024', poster: '/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg' },
        { title: 'Fallout', year: '2024', poster: '/AnsSKR8B3PoRMpHFfHBiJBLFZAL.jpg' },
        { title: 'Bebê Rena', year: '2024', poster: '/AingKdnPKGQNiuOEoONMDMHMKMN.jpg' },
        { title: 'True Detective', year: '2024', poster: '/okMNXFBDlCVMsNXFCKXCwBTEPnP.jpg' },
        { title: 'Reacher', year: '2022', poster: '/xSzBumWBKjFJyFpfWNXRmFWFvFv.jpg' },
        { title: 'The Boys', year: '2019', poster: '/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg' },
    ],
    acao: [
        { title: 'John Wick 4', year: '2023', poster: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
        { title: 'Missão: Impossível 7', year: '2023', poster: '/NNxYkU70HPurnNCSiCjYAmacwm.jpg' },
        { title: 'Guardiões da Galáxia 3', year: '2023', poster: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg' },
        { title: 'Homem-Aranha: Aranhaverso', year: '2023', poster: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg' },
        { title: 'Fast X', year: '2023', poster: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg' },
        { title: 'Aquaman 2', year: '2023', poster: '/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg' },
        { title: 'Transformers: O Despertar', year: '2023', poster: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg' },
        { title: 'Indiana Jones 5', year: '2023', poster: '/Af4bXE63pVsb2FtbW8uYkyFnQH.jpg' },
        { title: 'Duna: Parte 2', year: '2024', poster: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
        { title: 'Deadpool & Wolverine', year: '2024', poster: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' },
    ],
    kids: [
        { title: 'Elementos', year: '2023', poster: '/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg' },
        { title: 'Wish: O Poder dos Desejos', year: '2023', poster: '/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg' },
        { title: 'Trolls 3', year: '2023', poster: '/bkpPTZUdq31UGDovmszsg2CchiI.jpg' },
        { title: 'Tartarugas Ninja: Caos Mutante', year: '2023', poster: '/ueO9MYIOHO7M1PiMUeS68lIHusb.jpg' },
        { title: 'Puss in Boots 2', year: '2022', poster: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg' },
        { title: 'Encanto', year: '2021', poster: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg' },
        { title: 'Moana 2', year: '2024', poster: '/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg' },
        { title: 'Sonic 3', year: '2024', poster: '/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg' },
    ]
};

// Hero backgrounds para rotação
const heroImages = [
    'https://image.tmdb.org/t/p/original/muth4M9vS21t20Qn1uQYm99S66b.jpg',
    'https://image.tmdb.org/t/p/original/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg',
    'https://image.tmdb.org/t/p/original/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1280&q=80',
];

// ============ RENDER CARDS COM FALLBACK INTELIGENTE ============
function renderCards(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Mostrar skeletons primeiro
    container.innerHTML = items.map(() =>
        `<div class="card-skeleton"></div>`
    ).join('');

    // Carregar cards reais com delay para efeito
    setTimeout(() => {
        container.innerHTML = items.map(item => {
            const posterUrl = `${TMDB_BASE}${item.poster}`;
            const safeTitle = item.title.replace(/'/g, "\\'");
            return `
                <div class="card" 
                     data-title="${item.title}"
                     data-year="${item.year}"
                     data-poster="${posterUrl}"
                     onclick="openWhatsApp('${safeTitle}')">
                    <div class="card-play"><i class="fas fa-play"></i></div>
                    <div class="card-info">
                        <div class="card-title">${item.title}</div>
                        <div class="card-year">${item.year}</div>
                    </div>
                </div>
            `;
        }).join('');

        // Carregar imagens via JS com fallback inteligente
        container.querySelectorAll('.card').forEach((card, index) => {
            const posterUrl = card.dataset.poster;
            const title = card.dataset.title || 'Filme';
            const img = new Image();
            img.onload = () => {
                card.style.backgroundImage = `url('${posterUrl}')`;
            };
            img.onerror = () => {
                // Se falhar, tenta URL alternativa do TMDB
                const fallbackUrl = `https://image.tmdb.org/t/p/w342${card.dataset.poster ? card.dataset.poster.replace(TMDB_BASE, '') : ''}`;
                const img2 = new Image();
                img2.onload = () => { card.style.backgroundImage = `url('${fallbackUrl}')`; };
                img2.onerror = () => {
                    // Se ainda falhar, procura um filme alternativo em alta
                    const alternativeItems = [...items];
                    if (alternativeItems.length > 1) {
                        const altItem = alternativeItems[(index + 2) % alternativeItems.length];
                        const altUrl = `${TMDB_BASE}${altItem.poster}`;
                        const img3 = new Image();
                        img3.onload = () => {
                            card.style.backgroundImage = `url('${altUrl}')`;
                            card.dataset.title = altItem.title;
                            card.querySelector('.card-title').textContent = altItem.title;
                        };
                        img3.onerror = () => {
                            card.style.backgroundImage = `url('https://placehold.co/150x225/1a1a1a/555555?text=${encodeURIComponent(title)}')`;
                        };
                        img3.src = altUrl;
                    } else {
                        card.style.backgroundImage = `url('https://placehold.co/150x225/1a1a1a/555555?text=${encodeURIComponent(title)}')`;
                    }
                };
                img2.src = fallbackUrl;
            };
            img.src = posterUrl;
        });

    }, 300);
}

function openWhatsApp(title) {
    const msg = encodeURIComponent(`Olá! Quero assistir "${title}" no W PLAY TV. Como assino?`);
    window.open(`https://wa.me/5511959607304?text=${msg}`, '_blank');
}

// ============ HEADER SCROLL ============
function initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ============ MOBILE MENU ============
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        const spans = toggle.querySelectorAll('span');
        if (menu.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        }
    });
}

window.closeMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('menuToggle');
    menu.classList.remove('open');
    toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
};

// ============ CATEGORIES FILTER ============
function initCategories() {
    const btns = document.querySelectorAll('.cat-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.cat;
            const target = document.getElementById(cat);
            if (target) {
                const offset = 140;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ============ FAQ ============
window.toggleFaq = function(btn) {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');

    // Fechar todos
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
    });

    // Abrir se estava fechado
    if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
    }
};

// ============ BACK TO TOP ============
function initBackTop() {
    const btn = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });
}

// ============ HERO ROTATION ============
function initHeroRotation() {
    const heroImg = document.getElementById('heroBg');
    if (!heroImg) return;
    let idx = 0;
    setInterval(() => {
        idx = (idx + 1) % heroImages.length;
        heroImg.style.opacity = '0';
        heroImg.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            heroImg.src = heroImages[idx];
            heroImg.style.opacity = '1';
        }, 1000);
    }, 7000);
}

// ============ INTERSECTION OBSERVER (lazy load rows) ============
function initLazyRows() {
    const rows = [
        { id: 'rowLancamentos', data: catalog.lancamentos },
        { id: 'rowSeries', data: catalog.series },
        { id: 'rowAcao', data: catalog.acao },
        { id: 'rowKids', data: catalog.kids },
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rowId = entry.target.id;
                const row = rows.find(r => r.id === rowId);
                if (row) {
                    renderCards(rowId, row.data);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { rootMargin: '100px' });

    rows.forEach(row => {
        const el = document.getElementById(row.id);
        if (el) {
            // Mostrar skeletons imediatamente
            el.innerHTML = row.data.map(() => `<div class="card-skeleton"></div>`).join('');
            observer.observe(el);
        }
    });
}

// ============ SMOOTH ANCHOR SCROLL ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ============ ACTIVE NAV ON SCROLL ============
function initActiveNav() {
    const sections = ['inicio', 'catalogo', 'planos', 'dispositivos', 'faq'];
    const navLinks = document.querySelectorAll('.nav-desktop a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 120) current = id;
            }
        });
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = '#fff';
            }
        });
    }, { passive: true });
}

// ============ TOGGLE MENSAL/ANUAL ============
function initPlansToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const planosMensal = document.getElementById('planosMensal');
    const planosAnual = document.getElementById('planosAnual');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (btn.dataset.period === 'mensal') {
                planosMensal.classList.remove('hidden');
                planosAnual.classList.add('hidden');
            } else {
                planosMensal.classList.add('hidden');
                planosAnual.classList.remove('hidden');
            }
        });
    });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initCategories();
    initBackTop();
    initHeroRotation();
    initLazyRows();
    initSmoothScroll();
    initActiveNav();
    initPlansToggle();
});
