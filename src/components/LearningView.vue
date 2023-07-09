<template>
  <div class="learning-view">
    <div class="card">
      <div v-if="!completed">
        <div class="grade-container" v-if="currentGrade">
          <img :src="currentGrade.image" :alt="currentGrade.title" width="200" class="rounded-image" />
          <div class="question-info">
            <p>Vraag {{ askedGrades.length + 1 }} van de {{ grades.length }}</p>
          </div>
          <input ref="userInput" v-model="userInput" type="text" placeholder="Voer het cijfer in" @keyup.enter="checkAnswer" />
          <button class="btn" @click="checkAnswer">Volgende</button>
        </div>
      </div>
      <div v-else>
        <h2>{{ getScoreMessage() }}</h2>
        <h3>Foutieve Antwoorden:</h3>
        <ul>
          <li v-for="grade in incorrectAnswers" :key="grade.id">
            <div class="grade-container">
              <img :src="grade.image" :alt="grade.title" width="100" class="rounded-image" />
              <div>
                {{ grade.fullname }}
                <span class="user-answer">Jouw antwoord: {{ grade.userAnswer }}</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="button-container">
          <button class="btn" @click="restart">Speel opnieuw</button>
          <button class="btn" @click="home">Home</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gradesData from '@/grades.json';

export default {
  data() {
    return {
      grades: [],
      currentGrade: null,
      userInput: '',
      score: 0,
      incorrectAnswers: [],
      completed: false,
      askedGrades: [],
      maxLength: 10, // Default value
    };
  },
  created() {
    this.grades = gradesData.grades;
  },
  mounted() {
    this.selectRandomGrade();
  },
  watch: {
    maxLength() {
      this.restart();
    },
  },
  methods: {
    selectRandomGrade() {
      const remainingGrades = this.grades.filter(
        (grade) => !this.askedGrades.includes(grade)
      );
      const availableGrades = remainingGrades.slice(0, this.maxLength);
      if (availableGrades.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableGrades.length);
        this.currentGrade = availableGrades[randomIndex];
      } else {
        this.completed = true;
      }
    },
    checkAnswer() {
      const userAnswer = this.userInput.trim(); // Trim the user's input

      if (userAnswer.toLowerCase() === this.currentGrade.fullname.toLowerCase()) {
        this.score++;
      } else {
        this.incorrectAnswers.push({
          ...this.currentGrade,
          userAnswer: this.userInput,
        });
      }
      this.askedGrades.push(this.currentGrade);
      this.selectRandomGrade();
      this.userInput = '';
    },
    restart() {
      this.currentGrade = null;
      this.userInput = '';
      this.score = 0;
      this.incorrectAnswers = [];
      this.completed = false;
      this.askedGrades = [];
      this.selectRandomGrade();
    },
    getScoreMessage() {
      const totalGrades = this.grades.length;
      const incorrectCount = this.incorrectAnswers.length;
      return `Je hebt ${incorrectCount} fout van de ${totalGrades} cijfers.`;
    },
    home() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.learning-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #F3F5F9;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #F5F8FF;
  border-radius: 30px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border: none;
}

.grade-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.btn {
  margin-bottom: 10px;
  border-radius: 6px;
  width: 200px;
  background: #d6e2ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: #d5d8e0;
}

.user-answer {
  font-weight: bold;
}

.question-info {
  margin-bottom: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

input[type="text"] {
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

.rounded-image {
  border-radius: 5%;
}

.p {
  margin-top: unset;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
  }

  .btn {
    width: 100%;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

</style>
