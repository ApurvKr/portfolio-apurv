import movieReviewImage from "../assets/movie-review.png"
import expenseTrackerImage from "../assets/expense-tracker.png"

const projects = [
  {
    title: "Movie Review Site",
    description:
      "A responsive movie discovery and review website built with React, integrating a movie API to search for films, explore movie details, and interact with a dynamic interface.",
    image: movieReviewImage,
    technologies: ["React", "JavaScript", "API", "CSS"],
    liveUrl: "https://reelroom-movie-review-blue.vercel.app/",
    githubUrl: "https://github.com/ApurvKr/movie-review-site",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive personal finance web application built with React for managing monthly budgets, tracking income and expenses, and organizing transactions through a dynamic interface.",
    image: expenseTrackerImage,
    technologies: ["React", "JavaScript", "API", "Tailwind CSS"],
    liveUrl: "https://expense-tracker-react-ebon-two.vercel.app/",
    githubUrl: "https://github.com/ApurvKr/expense-tracker-react",
  },
]

export default projects