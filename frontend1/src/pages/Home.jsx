import './Home.css';
import Hero from './Hero.jsx';
import WhatIsThis from './WhatIsThis.jsx'; // import the new component
import QnA from './QnA.jsx';

function Home() {
  return (
    <div className="home">
      <Hero />
      <WhatIsThis />
      <QnA/>
    </div>
  );
}

export default Home;
