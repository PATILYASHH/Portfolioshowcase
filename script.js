document.addEventListener("DOMContentLoaded", function() {
  const portfolioButton = document.querySelector('.port');
  portfolioButton.addEventListener("click", function() {
    window.location.href = "portfolio.html";
  });

  const profileButton = document.querySelector('.prof');  // Change from '.port' to '.prof'
  profileButton.addEventListener("click", function() {
    window.location.href = "profile.html";
  });
});

import { SpeedInsights } from "@vercel/speed-insights/next"
  