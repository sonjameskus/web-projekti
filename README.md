Korealaisravintolan verkkosivut (Teibeul)

Verkkosivujen on tarkoitus toimia alustana asiakkaiden nettitilauksille sekä palautteelle. 
Omat käyttäjät luodaan palautteen sekä asiakkaan tietojen tallentamista varten (osoite, lempiruoat, tilaushistoria).

Tehdäkseen käyttäjätunnukset, asiakkaan täytyy navigoida omille sivuille ja rekisteröityä. 
Sen jälkeen, tilaamista varten, kuuluu siirtyä tilausnäkymään.
Asiakas voi valita ennen ilmoitetuista osoitteistaan joihin haluaa tilauksen kuljetettavan. 
Jos asiakkaalla ei ole entuudestaan ilmoitettuja osoitteita tai käyttäjätiliä, hänen kuuluu sellainen antaa. 
Myös asiakkaan muut tiedot voidaan ottaa suoraan käyttäjätiedoista nopeuttamaan transaktiota.
Asiakas valitsee haluamansa ostokset listasta, ja siirtyy ostosnäkymään, missä hän varmistaa tilauksen, ennen kuin tilaustiedot tallennetaan tilaushistoriaan. 
Tilauksen voi tällöin tarkistaa oman profiilin tilaushistoriasta.

Jos asiakas haluaa jättää arvostelun, kuuluu hänen olla kirjautunut sisään. 
Arvostelun voi jättää Arvostelut-näkymästä, jossa myös näkyy muiden käyttäjien jättämät arvostelut. 
Arvostelujen selaamiseen ei tarvitse käyttäjätunnuksia.

Dependencyt: React, react-router, Express, mysql2, CORS, dot.env, jsonwebtoken, bcrypt, Vite
Testaamiseen: Jest, Supertest

VITE_API_URL=https://web-projekti-production.up.railway.app/api


# 1. installaa dependencyt
```bash
npm install
```

# 2. lue .env_example ja editoi tiedosto

# 3. starttaa api
```bash
npm start
```

# api doc

# api/user/

    login - post kirjautuu käyttäjälle

    logout - post kirjautuu ulos ja menee takaisin etusivulle

    signin - post tekee käyttäjän

    delete - delete poistaa käyttäjän (en tiiä tehäänkö tää) + (pitää olla kirjautunut)

    address - get ottaa databasesta userin addressin - update lisää

    getme - get returnaa userin jos on kirjautunut

# api/restaurant/

    list - get antaa ruokalistan - post lisää ruoan - update updatee ruoan - delete poistaa ruoan (post, update, delete tarvii sisäänkirjautumisen adminilla)

    review - get antaa listan - post laittaa arvostelun (pitää olla kirjautunut)

    order - get ottaa databaset - post tekee tilauksen 


# esim: http://127.0.0.1:3000/api/restaurant/list localhostilla

