import './Home.css'

function Home() {
  const learningPaths = [
    {
      title: 'Web Development',
      description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
      duration: '6 months',
      level: 'Beginner to Advanced'
    },
    {
      title: 'Data Science',
      description: 'Learn data analysis, machine learning, and statistical methods.',
      duration: '8 months',
      level: 'Intermediate'
    },
    {
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications.',
      duration: '5 months',
      level: 'Beginner to Intermediate'
    }
  ]

  return (
    <div className="home">
      <h1 className="section-title">Learning Paths</h1>
      <div className="learning-paths">
        {learningPaths.map((path, index) => (
          <div key={index} className="path-card">
            <h2>{path.title}</h2>
            <p>{path.description}</p>
            <div className="path-details">
              <span>Duration: {path.duration}</span>
              <span>Level: {path.level}</span>
            </div>
            <button className="button">Start Learning</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home 