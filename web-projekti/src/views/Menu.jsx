import Navigation from "../components/Navigation";

const Menu = () => {

  return (
    <div className="row">
      <div className="banner"><h1>테이블</h1> <p>Teibeul</p>
      <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
  </div>
      <Navigation />
      <div className="column">
        <form>
          <label for="haku">
            Hae sivulta: </label>
          <input type="text" id="haku" name="haku" />
          <input type="submit" value="Hae" class="haku-btn" />
        </form>
        <h2>Ruoka 1</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
        <hr />
        <h2>Ruoka 2</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
        <hr />
        <h2>Ruoka 3</h2>
        <p>Hyvää ruokaa</p>
        <p>Allergeenit: J O TA I N</p>
      </div>
    </div>
  );
};

export default Menu;
