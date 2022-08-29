import '../assets/css/normalize.css';

import { mostrarCard } from './controllers';

const card = document.querySelector('.tarjeta');

card.innerHTML = mostrarCard();