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

