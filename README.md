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

    login ✔ - kirjautuu käyttäjälle

    logout X - kirjautuu ulos ja menee takaisin etusivulle

    signin ✔ - tekee käyttäjän

    delete X - poistaa käyttäjän (en tiiä tehäänkö tää)

    getme ✔ - returnaa userin jos on loginnattu

# api/restaurant/

    list ✔ - antaa ruokalistan

    review ✔ - get antaa listan - post laittaa arvostelun (pitää olla kirjautunut)

    order X - post tekee tilauksen


# ex: http://127.0.0.1:3000/api/restaurant/list for localhost