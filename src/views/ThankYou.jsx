import Navigation from '../components/Navigation';


const ThankYou = () => {

  return (

          <div className="row">
            <div className="banner">
              <h1>테이블</h1> <p>Teibeul</p>
              <p>Korealainen ravintola | Pannaan pöytä koreaksi</p>
            </div>
            <Navigation />
            <div className="column">
                <h2>Tilaus lähetetty.</h2>
                <p>Kiitos paljon tilauksesta
                    <br />
                    Mukavia herkutteluhetkiä!
                </p>

            </div>
          </div>

      )};


export default ThankYou;
