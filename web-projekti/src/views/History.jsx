import Navigation from '../components/Navigation';

const History = () => {
  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1> <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <p>
          Tilaushistoria:
          <hr />
          1. Kimchi Ramen - 12.03.2024
          <hr />
          2. Bibimbap - 05.02.2024
          <hr />
          3. Tteokbokki - 20.01.2024
          <hr />
        </p>
      </div>
    </div>
  );
};

export default History;
