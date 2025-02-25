<template>
    <div class="nav-logos">
      <a href="https://caps.christuniversity.in" target="_blank"><img src="/CAPSonlylogo.png" alt="CAPS Logo" class="nav-logo capslogo" /> </a>
      <a href="https://christuniversity.in" target="_blank"><img src="../../../christ-uni.png" alt="Logo 2" class="nav-logo" /> </a>
    </div>
  </template>
  
  <style scoped>
  .nav-logos {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: auto; /* Push everything else to the right */
    order: -1; /* Ensure it comes first */
    padding-right: 7px; /* Add some space on the right */
    padding-left: 10px
  }

  .capslogo {
    height: 1.7em !important; /* adjust as needed */
    width: auto;
  }
  
  .nav-logo {
    height: 40px; /* adjust as needed */
    width: auto;
  }

  @media (max-width: 768px) {
    .nav-logos {
      padding-top: 10px;
    }
  }
  </style>