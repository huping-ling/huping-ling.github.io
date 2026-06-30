(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector(".sr-only").textContent = "Open navigation";
      menu.hidden = true;
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.querySelector(".sr-only").textContent = opening ? "Close navigation" : "Open navigation";
      menu.hidden = !opening;
      document.body.classList.toggle("menu-open", opening);
    });

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const filterGrid = document.querySelector("[data-filter-grid]");
  if (filterGrid) {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = filterGrid.querySelectorAll("[data-kind]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach((item) => {
          item.classList.toggle("is-active", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });
        cards.forEach((card) => {
          card.hidden = filter !== "all" && !card.dataset.kind.split(/\s+/).includes(filter);
        });
      });
    });
  }

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    const email = `${link.dataset.user}@${link.dataset.domain}`;
    link.href = `mailto:${email}`;
    link.textContent = email;
  });

  const params = new URLSearchParams(window.location.search);
  const formStatus = document.querySelector("[data-form-status]");
  if (formStatus && params.get("sent") === "true") {
    formStatus.textContent = "Thank you. Your message has been sent.";
    formStatus.hidden = false;
    formStatus.focus?.();
    window.history.replaceState({}, "", window.location.pathname);
  }

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    link.setAttribute("rel", [...rel].join(" "));
  });
})();
