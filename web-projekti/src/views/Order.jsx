import Navigation from "../components/Navigation";

const Order = () => {
  return (
<div className="row">
      <div className="banner">
        <h1>테이블</h1>
        <p>Teibeul</p>
        <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
      </div>
      <Navigation />
      <div className="column">
       <p>Tänne ruuat uudestaan I guess? Ja linkit siihen, et voi lisätä ne koriin</p>

       <h2>Ruoka 1</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
        <button class="hakuBtn">Lisää koriin</button>
        <hr />
        <h2>Ruoka 2</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
        <button class="hakuBtn">Lisää koriin</button>
        <hr />
        <h2>Ruoka 3</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
       <button class="hakuBtn">Lisää koriin</button>
      </div>
    </div>

  )}

export default Order;
