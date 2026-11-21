window.addEventListener("load", function() {
    window.scrollTo(0, 0);
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(function() {
            loader.classList.add("loader-hidden");
            setTimeout(function() {
                loader.style.display = "none";
            }, 300);
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const aiSupportBtn = document.getElementById("aiSupportBtn");
    const aiSupportModal = document.getElementById("aiSupportModal");
    const aiSupportClose = document.getElementById("aiSupportClose");
    const aiSupportSend = document.getElementById("aiSupportSend");
    const aiSupportInput = document.getElementById("aiSupportInput");
    const aiSupportMessages = document.getElementById("aiSupportMessages");

    if (!aiSupportBtn || !aiSupportModal) {
        return;
    }

    aiSupportBtn.addEventListener("click", function() {
        aiSupportModal.classList.remove("hidden");
        setTimeout(function() {
            aiSupportInput.focus();
        }, 100);
    });

    aiSupportClose.addEventListener("click", function() {
        aiSupportModal.classList.add("hidden");
    });

    aiSupportModal.addEventListener("click", function(event) {
        if (event.target === aiSupportModal) {
            aiSupportModal.classList.add("hidden");
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    aiSupportSend.addEventListener("click", handleSend);
    aiSupportInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            handleSend();
        }
    });

    function handleSend() {
        const text = aiSupportInput.value.trim();
        if (!text) {
            return;
        }

        addMessage(text, "user");
        aiSupportInput.value = "";
        setTimeout(function() {
            addMessage(getAiReply(text), "bot");
        }, 450);
    }

    function addMessage(text, sender) {
        const message = document.createElement("div");
        message.className = `ai-support-message ${sender}`;
        message.innerHTML = `<span>${text}</span>`;
        aiSupportMessages.appendChild(message);
        aiSupportMessages.scrollTop = aiSupportMessages.scrollHeight;
    }

    function getAiReply(query) {
        const lower = query.toLowerCase();
        if (/(hi|hello|assalam|salam|hey|good)/.test(lower)) {
            return "Hi! Main IKON ki AI support hoon. Aap apna sawal likh dein.";
        }
        if (/(what is|who is|about|company|ikons|ikon|lab|laboratories|work|services)/.test(lower)) {
            return "IKON Laboratories Pakistan mein pharmaceutical marketing aur distribution ka trusted naam hai. Hum manufacturers ko district-wise distribution partners se connect karte hain.";
        }
        if (/(distributor|partner|franchise|join|become)/.test(lower)) {
            return "IKON ke distributor banne ke liye WhatsApp par message karein: +92 333 0341980. Hum aapki madad karenge aur procedure batayenge.";
        }
        if (/(price|cost|rate|how much|charges|pricing)/.test(lower)) {
            return "Hamaare products aur rates ke liye catalogue page dekhen ya hume WhatsApp par contact karein. Hum aapko latest price aur availability bata sakte hain.";
        }
        if (/(product|medicine|drug|tablet|syrup|solution|portfolio)/.test(lower)) {
            return "IKON ke pharmaceutical products ke liye catalogue page dekhen. Hum quality medicines aur healthcare solutions supply karte hain.";
        }
        if (/(contact|phone|call|whatsapp|message|support)/.test(lower)) {
            return "Aap hume WhatsApp par contact kar sakte hain: https://wa.me/923330341980. Yeh sabse tez tareeqa hai hum se seedha baat karne ka.";
        }
        if (/(location|city|district|pakistan|area|where)/.test(lower)) {
            return "IKON Pakistan mein pharmaceutical distribution aur marketing services provide karta hai. Hamari distribution network country-wide hai.";
        }
        if (/(website|site|menu|navigation|home|about|contact|catalogue|divisions)/.test(lower)) {
            return "Is website par aap Home, About, Divisions, Catalogue aur Contact pages dekh sakte hain. Jo bhi information chahiye ho, woh in pages par mil jayegi.";
        }
        return "Aapka sawal achha hai. Agar aap website ya kaam se related koi specific sawal puchain, to main aapki madad karne ki koshish karunga. Ya phir WhatsApp par message karein: +92 333 0341980.";
    }

    const icons = {
        "whatsapp-logo": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.25-1.38A9.94 9.94 0 1 0 12.04 2Zm5.78 14.1c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.13.12-1.82-.11-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.15-.2-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36h.55c.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.75 1.24 1.61 2.01 1.11.99 2.05 1.29 2.34 1.44.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.38-.24.65-.14.26.1 1.69.8 1.98.94.29.15.48.22.55.34.07.12.07.7-.17 1.38Z"/></svg>',
        "facebook-logo": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z"/></svg>',
        "instagram-logo": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="#fff" stroke="none"/></svg>',
        "support-logo": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8v2a6 6 0 0 0 6 6h1v-7H7.5A4.5 4.5 0 0 1 12 6.5 4.5 4.5 0 0 1 16.5 11H13v7h3.5A4.5 4.5 0 0 0 21 13.5V10a8 8 0 0 0-9-8Z"/></svg>'
    };

    Object.keys(icons).forEach(function(className) {
        document.querySelectorAll('.' + className).forEach(function(icon) {
            if (!icon.querySelector('svg')) icon.innerHTML = icons[className];
        });
    });
});

/* ===========================
   CAROUSEL FUNCTIONALITY
=========================== */

let currentSlide = 0;
let autoPlayInterval;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const wrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    if (!track || !wrapper || items.length === 0) return;

    // normalize index
    const len = items.length;
    currentSlide = ((currentSlide % len) + len) % len;

    // compute dynamic widths and gap
    const first = items[0];
    const second = items[1] || first;
    const itemWidth = first.offsetWidth;
    const gap = Math.max(0, second.offsetLeft - first.offsetLeft - itemWidth);
    const slideWidth = itemWidth + gap;

    // center calculation so active slide is centered in wrapper
    const offset = -(currentSlide * slideWidth) + (wrapper.clientWidth / 2 - itemWidth / 2);
    const rounded = Math.round(offset);
    track.style.transform = `translateX(${rounded}px)`;
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
    resetAutoPlay();
}

function previousSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
    resetAutoPlay();
}

function autoPlay() {
    nextSlide();
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(autoPlay, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    updateCarousel();
    autoPlayInterval = setInterval(autoPlay, 1500);
    
    window.addEventListener('resize', updateCarousel);
});

