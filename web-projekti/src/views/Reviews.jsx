import Navigation from "../components/Navigation";

const Reviews = () => {
  return (
    <div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>

      <Navigation />

      <div className="column">
        <h2>Arvostelu 1</h2>
        <p>Arvostelu</p>
        <hr />
        <h2>Arvostelu 2</h2>
        <p>Arvostelu</p>
        <hr />
        <h2>Arvostelu 3</h2>
        <p>Arvostelu</p>
      </div>
    </div>
  )
}

export default Reviews;
