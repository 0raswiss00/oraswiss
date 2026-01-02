(() => {
  const PHONE = "355692408065";        // WhatsApp number
  const EMAIL = "adice1899@gmail.com"; // Email address

  const enc = (x) => encodeURIComponent(x || "");

  function applyLinks(scope = document) {
    scope.querySelectorAll("article.product").forEach((product) => {
      const waBtn = product.querySelector(".whatsapp-btn");
      const emailBtn = product.querySelector(".email-btn");
      if (!waBtn && !emailBtn) return;

      // Merr titullin (nëse ekziston)
      const titleEl = product.querySelector(
        ".product-right h2, .product-right h1, .product-right h3"
      );
      const title = titleEl ? titleEl.innerText.trim() : "Watch";

      // Gjej REF nga teksti i produktit
      const text = product.innerText.replace(/\s+/g, " ").trim();
      const refMatch =
        text.match(/Ref(?:erence)?\s*[:\-]?\s*([A-Za-z0-9\-]+)/i) ||
        text.match(/REF\.?\s*([A-Za-z0-9\-]+)/i);
      const ref = refMatch ? refMatch[1] : "";

      // Link i produktit (nëse ke butonin/linqet e detajeve)
      const productLinkEl = product.querySelector("a.brand-btn, a.open-detail");
      const href = productLinkEl ? productLinkEl.getAttribute("href") : "";
      const link = href
        ? href.startsWith("http")
          ? href
          : new URL(href, window.location.href).href
        : window.location.href;

      const msg =
        Hello, I'm interested in this watch:%0A +
        Title: ${title}%0A +
        (ref ? Ref: ${ref}%0A : "") +
        Link: ${link};

      if (waBtn) {
        waBtn.setAttribute("target", "_blank");
        waBtn.href = https://wa.me/${PHONE}?text=${msg};
      }

      if (emailBtn) {
        emailBtn.href =
          mailto:${EMAIL} +
          ?subject=${enc("Watch Request - " + title)} +
          `&body=${enc(
            `Hello, I'm interested in this watch:\nTitle: ${title}\n${
              ref ? "Ref: " + ref + "\n" : ""
            }Link: ${link}`
          )}`;
      }
    });
  }

  // Kur faqja ngarkohet
  document.addEventListener("DOMContentLoaded", () => {
    applyLinks();

    // Nëse ti shton produkte “dinamikisht” (me innerHTML), kjo i kap prapë
    const obs = new MutationObserver(() => applyLinks());
    obs.observe(document.body, { childList: true, subtree: true });
  });
})();

