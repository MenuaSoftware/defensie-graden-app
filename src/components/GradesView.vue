<template>
  <div class="grades-view">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Alle Graden</h2>
          <div class="filter-container">
            <label for="component-filter">Component:</label>
            <select id="component-filter" v-model="selectedComponent">
              <option value="">All</option>
              <option value="Landcomponent">Landcomponent</option>
              <option value="Medische component">Medische component</option>
              <option value="Luchtcomponent">Luchtcomponent</option>
              <option value="Marinecomponent">Marinecomponent</option>
            </select>
            <label for="graad-filter">Graad:</label>
            <select id="graad-filter" v-model="selectedGraad">
              <option value="">All</option>
              <option value="Vrijwilligers">Vrijwilligers</option>
              <option value="Onderofficieren">Onderofficieren</option>
              <option value="Officieren">Officieren</option>
            </select>
          </div>
          <div class="divider">
            <h4>Vrijwilligers</h4>
          </div>
          <div class="grid">
            <div v-for="grade in filteredGrades('Vrijwilligers')" :key="grade.id" class="card">
              <div class="card-content">
                <div class="image-container">
                  <img :src="grade.image" alt="Grade Image" width="100" />
                </div>
                <div class="info-container">
                  <h3>{{ grade.fullname }}</h3>
                  <p>{{ grade.abbreviation }}</p>
                  <p style="color: #ec7a7a">"{{ grade.title }}"</p>
                  <p :class="getComponentClass(grade)">{{ grade.component }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="divider">
            <h4>Onderofficieren</h4>
          </div>
          <div class="grid">
            <div v-for="grade in filteredGrades('Onderofficieren')" :key="grade.id" class="card">
              <div class="card-content">
                <div class="image-container">
                  <img :src="grade.image" alt="Grade Image" width="100" />
                </div>
                <div class="info-container">
                  <h3>{{ grade.fullname }}</h3>
                  <p>{{ grade.abbreviation }}</p>
                  <p style="color: #ec7a7a">"{{ grade.title }}"</p>
                  <p :class="getComponentClass(grade)">{{ grade.component }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="divider">
            <h4>Officieren</h4>
          </div>
          <div class="grid">
            <div v-for="grade in filteredGrades('Officieren')" :key="grade.id" class="card">
              <div class="card-content">
                <div class="image-container">
                  <img :src="grade.image" alt="Grade Image" width="100" />
                </div>
                <div class="info-container">
                  <h3>{{ grade.fullname }}</h3>
                  <p>{{ grade.abbreviation }}</p>
                  <p style="color: #ec7a7a">"{{ grade.title }}"</p>
                  <p :class="getComponentClass(grade)">{{ grade.component }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="back-button">
            <router-link to="/" class="btn">Back to Home</router-link>
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
      selectedComponent: '',
      selectedGraad: '',
    };
  },
  computed: {
    filteredGrades() {
      console.log(this.gradesData.grades[0].fullname)
      return function(graad) {
        console.log(graad)
        let filteredGrades = this.gradesData['grades'];
        if (this.selectedComponent) {
          filteredGrades = filteredGrades.filter(grade => grade.component === this.selectedComponent);
        }
        if (this.selectedGraad) {
          filteredGrades = filteredGrades.filter(grade => grade.graad === this.selectedGraad);
        }
        if (graad) {
          filteredGrades = filteredGrades.filter(grade => grade.graad === graad);
        }
        return filteredGrades;
      };
    },
  },
  methods: {
    getComponentClass(grade) {
      return {
        'component-tag': true,
        'green': grade.component === 'Landcomponent',
        'red': grade.component === 'Medische component',
        'lightblue': grade.component === 'Luchtcomponent',
        'darkblue': grade.component === 'Marinecomponent',
      };
    },
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
  color: black;
}

.card p {
  color: lightgrey;
  margin-bottom: 5px;
}

.filter-container {
  margin-bottom: 20px;
}

.filter-container label {
  margin-right: 10px;
}

.divider {
  margin: 20px 0;
  text-align: center;
  padding-bottom: 10px;
}

.divider h4 {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.component-tag {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f2f2f2;
  border-radius: 20px;
  margin-bottom: 5px;
}

.green {
  background-color: #91ea91;
  color: black !important;
}

.red {
  background-color: #ec7a7a;
  color: black !important;
}

.lightblue {
  background-color: #b5cfe1;
  color: black !important;
}

.darkblue {
  background-color: #4c69d9;
  color: black !important;
}

.back-button {
  text-align: center;
  margin-top: 20px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4c69d9;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .button {
    display: block;
    width: 100%;
  }
}
</style>
