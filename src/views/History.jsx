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
          Tilaushistoria: </p>
          <hr />
          <p>{new Date().toLocaleString('fi-FI')}
            <br />Kimchi Ramen</p>
          <hr />
          <p>{new Date().toLocaleString('fi-FI')}
            <br />Bibimbap</p>
          <hr />
          <p>{new Date().toLocaleString('fi-FI')}
            <br />Tteokbokki</p>
          <hr />

      </div>
    </div>
  );
};

export default History;
