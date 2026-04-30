// Vercel Web Analytics - Standalone initialization
(function() {
  // Initialize queue
  if (!window.va) {
    window.va = function() {
      (window.vaq = window.vaq || []).push(arguments);
    };
  }
  
  // Create and inject script
  const script = document.createElement('script');
  script.src = '/_vercel/insights/script.js';
  script.defer = true;
  script.dataset.sdkn = '@vercel/analytics';
  script.dataset.sdkv = '1.6.1';
  
  script.onerror = function() {
    console.log('[Vercel Web Analytics] Failed to load. Be sure to enable Web Analytics for your project. See https://vercel.com/docs/analytics/quickstart');
  };
  
  document.head.appendChild(script);
})();
