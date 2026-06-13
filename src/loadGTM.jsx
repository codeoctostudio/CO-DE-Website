let gtmLoaded = false;

const loadGTM = () => {
  if (gtmLoaded) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.src =
    "https://www.googletagmanager.com/gtm.js?id=GTM-TBW6BF8M&l=dataLayer";
  script.async = true;

  document.head.appendChild(script);

  gtmLoaded = true;
};

export default loadGTM;
