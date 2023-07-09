<template>
  <div class="grades-view">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>All Grades</h2>
          <div class="grid">
            <div v-for="grade in gradesData.grades" :key="grade.id" class="card">
              <div class="card-content">
                <div class="image-container">
                  <img :src="grade.image" alt="Grade Image" width="100" />
                </div>
                <div class="info-container">
                  <h3>{{ grade.fullname }}</h3>
                  <p>{{ grade.abbreviation }}</p>
                  <p>{{ grade.title }}</p>
                  <p>{{ grade.component }}</p> <!-- New line to display the component -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gradesData from '../grades.json';

export default {
  data() {
    return {
      gradesData: gradesData,
    };
  },
};
</script>

<style>
.grades-view {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.card {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.image-container {
  margin-bottom: 10px;
}

.card img {
  display: block;
  margin: 0 auto;
}

.card h3 {
  margin-bottom: 5px;
}

.card p {
  color: lightgrey;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
