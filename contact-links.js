(() => {
  const PHONE = "355692408065";        // WhatsApp (pa +)
  const EMAIL = "adice1899@gmail.com"; // Email

  const enc = (s) => encodeURIComponent(s || "");

  function getProductInfo(productEl) {
    const titleEl = productEl.querySelector(".product-right h1, .product-right h2, .product-right h3");
    const title = titleEl ? titleEl.textContent.trim() : "Watch";

    // Merr Ref nga teksti
    const text = productEl.textContent.replace(/\s+/g, " ").trim();
    const refMatch =
      text.match(/Ref(?:erence)?\s*[:\-]?\s*([A-Za-z0-9\-]+)/i) ||
      text.match(/\bREF\.?\s*([A-Za-z0-9\-]+)/i);
    const ref = refMatch ? refMatch[1] : "";

    // Link i detajeve (nëse ke një link të produktit)
    const linkEl = productEl.querySelector('a.brand-btn[href], a.open-detail[href], a[href*=".html"]');
    const href = linkEl ? linkEl.getAttribute("href") : "";
    const link = href ? new URL(href, window.location.href).href : window.location.href;

    return { title, ref, link };
  }

  function applyLinks(scope = document) {
    scope.querySelectorAll("article.product").forEach((product) => {
      const waBtn = product.querySelector(".whatsapp-btn");
      const emailBtn = product.querySelector(".email-btn");
      if (!waBtn && !emailBtn) return;

      const { title, ref, link } = getProductInfo(product);

      const waMsg =
        Hello, I'm interested in this watch:%0A +
        Title: ${enc(title)}%0A +
        (ref ? Ref: ${enc(ref)}%0A : "") +
        Link: ${enc(link)};

      const emailSubject = Watch Request - ${title};
      const emailBody =
        Hello, I'm interested in this watch:\n +
        Title: ${title}\n +
        (ref ? Ref: ${ref}\n : "") +
        Link: ${link};

      if (waBtn) {
        waBtn.setAttribute("target", "_blank");
        waBtn.href = https://wa.me/${PHONE}?text=${waMsg};
      }

      if (emailBtn) {
        emailBtn.href =
          mailto:${EMAIL}?subject=${enc(emailSubject)}&body=${enc(emailBody)};
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLinks();

    // Nëse produktet shtohen dinamikisht (SellNow), i kap prapë
    const obs = new MutationObserver(() => applyLinks());
    obs.observe(document.body, { childList: true, subtree: true });
  });
})();

