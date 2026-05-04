# 1. installaa dependencyt
```bash
npm install
```

# 2. starttaa api
```bash
npm start
```

# api doc

# ✔ = valmis
# X = ei valmis

# api/user/

    login ✔ - post kirjautuu käyttäjälle

    logout X - post kirjautuu ulos ja menee takaisin etusivulle

    signin ✔ - post tekee käyttäjän

    delete X - delete poistaa käyttäjän (en tiiä tehäänkö tää) + (pitää olla kirjautunut)

    address X - get ottaa databasesta userin addressin - update lisää

    getme ✔ - get returnaa userin jos on kirjautunut

# api/restaurant/

    list ✔ - get antaa ruokalistan

    review ✔ - get antaa listan - post laittaa arvostelun (pitää olla kirjautunut)

    order X - post tekee tilauksen (pitääkö olla kirjautunut?)


# ex: http://127.0.0.1:3000/api/restaurant/list for localhost

