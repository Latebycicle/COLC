<template>
    <div class="nav-logos">
      <img src="../../../public/CAPSlogo.png" alt="CAPS Logo" class="nav-logo" />
      <img src="../../../christ-uni.png" alt="Logo 2" class="nav-logo" />
    </div>
  </template>
  
  <style scoped>
  .nav-logos {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: auto; /* Push everything else to the right */
    order: -1; /* Ensure it comes first */
  }
  
  .nav-logo {
    height: 40px; /* adjust as needed */
    width: auto;
  }
  </style>