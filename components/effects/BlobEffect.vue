<template>
  <div class="blobs">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.blobs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  /* Allow interactions through the blobs */
}

.blob {
  position: absolute;
  border-radius: 50%;
  background: rgba(128, 0, 128, 0.6);
  filter: blur(80px);
  animation: moveBlobs 8s infinite alternate;
}

.blob:nth-child(1) {
  width: 100px;
  height: 300px;
  top: 30%;
  left: 30%;
}

.blob:nth-child(2) {
  width: 250px;
  height: 250px;
  top: 40%;
  left: 50%;
}

.blob:nth-child(3) {
  width: 500px;
  height: 220px;
  top: 50%;
  left: 20%;
}

.blob:nth-child(4) {
  width: 180px;
  height: 80px;
  top: 40%;
  left: 70%;
}

@keyframes moveBlobs {
  0% {
    transform: translate(0, 0) scale(1);
  }

  25% {
    transform: translate(50px, -30px) scale(1.2);
  }

  50% {
    transform: translate(-30px, 50px) scale(0.8);
  }

  75% {
    transform: translate(-50px, -50px) scale(1.1);
  }

  100% {
    transform: translate(30px, 30px) scale(0.9);
  }
}
</style>
