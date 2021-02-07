import HomeScreen from '../src/screens/HomeScreen.js'

const router = () => {
    const main = document.getElementById("main-container");
    main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);