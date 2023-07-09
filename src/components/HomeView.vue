<template>
  <div class="home-view">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="left-k">
            <div class="logo">
              <!-- Company Logo -->
              <img src="../assets/logo.png" alt="Defensie Logo" width="100" />
            </div>
            <div class="title">
              <!-- Title -->
              <h2>De Graden</h2>
            </div>
            <p class="light-grey-text">Versterk je kennis, verdedig je carrière!</p>
            <div class="buttons">
              <!-- Buttons -->
              <button class="btn btn-start" @click="start">Start</button>
              <button class="btn btn-graden" @click="showGrades" >De graden</button>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="right-k">
            <img src="../assets/background.png" alt="Picture" width="700" class="picture" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push('/learning');
    },
        showGrades() {
      this.$router.push('/grades');
    },
  },
};
</script>

<style>
.home-view {
  position: relative;
  height: 100vh;
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

.left-k {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: #FFFFFF; /* Change the background color for the left column */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.logo {
  margin-bottom: 20px;
}

.title {
  text-align: center;
  margin-bottom: 10px;
}

.light-grey-text {
  color: lightgrey;
  font-size: 20px;
  margin-bottom: 3rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  margin-bottom: 10px;
  border-radius: 6px;
  width: 300px; /* Adjust the width as needed */
  background: #F5F8FF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add soft shadow effect */
}

.btn:hover {
  background: #d5d8e0;
}

.right-k {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: #F3F5F9; /* Change the background color for the right column */
  overflow-x: hidden; /* Enable horizontal scrolling */
  overflow-y: hidden;
}

@media (max-width: 768px) {
  .col-4 {
    width: 100%;
  }

  .col-8 {
    display: none;
  }

  .left-k {
    position: relative;
    width: 100%;
    align-items: center;
  }
}
</style>
