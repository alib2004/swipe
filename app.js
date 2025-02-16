let opennav = document.querySelector(".open-nav");
let mobilemenu = document.querySelector(".mobile-menu");
let nav = document.querySelector(".nav");
opennav.addEventListener("click", () => {
  mobilemenu.classList.toggle("hidden");
});
window.addEventListener("scroll", () => {
  window.scrollY > 5
    ? nav.classList.add("bg-indigo-500") &
      opennav.classList.add("text-gray-100") &
      opennav.classList.add("dark:hover:bg-gray-400")
    : nav.classList.remove("bg-indigo-500") &
      opennav.classList.remove("text-gray-100");
});
document.addEventListener("alpine:init", () => {
  Alpine.store("accordion", {
    tab: 0,
  });

  Alpine.data("accordion", (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab =
        this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? "rotate-180" : "";
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx
        ? `max-height: ${this.$refs.tab.scrollHeight}px`
        : "";
    },
  }));
});
const html = document.querySelector("html");
const isLightOrAuto =
  localStorage.getItem("hs_theme") === "light" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    !window.matchMedia("(prefers-color-scheme: dark)").matches);
const isDarkOrAuto =
  localStorage.getItem("hs_theme") === "dark" ||
  (localStorage.getItem("hs_theme") === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isLightOrAuto && html.classList.contains("dark"))
  html.classList.remove("dark");
else if (isDarkOrAuto && html.classList.contains("light"))
  html.classList.remove("light");
else if (isDarkOrAuto && !html.classList.contains("dark"))
  html.classList.add("dark");
else if (isLightOrAuto && !html.classList.contains("light"))
  html.classList.add("light");
