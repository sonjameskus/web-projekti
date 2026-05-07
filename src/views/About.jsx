import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <p>Teksti tänne:DDD</p>
      </div>
    </div>
  );
};

export default About;
