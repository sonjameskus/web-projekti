# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

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
