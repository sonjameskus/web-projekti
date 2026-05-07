import Navigation from '../components/Navigation';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
        <p>
          <br /> Pistetään pöytä Koreaksi :D
          <br />
          <br />
          Teksti
          öööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööööö
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          <br /> Puh.: 020202
          <br /> Osoite: Esimerkkitie 1 A, Tuolnoinjoki
        </p>

        <div>
          <MapContainer
            center={[60.2248, 25.0774]}
            zoom={13}
            style={{height: '300px', width: '100%'}}
          >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[60.2248, 25.0774]}>
              <Popup>
                Tervetuloa syömään! Sijaitsemme osoitteessa Esimerkkitie 1 A
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default About;
