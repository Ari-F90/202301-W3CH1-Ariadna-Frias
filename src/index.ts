import { Cards } from './components/cards/cards';
import { characters } from './mocks/characters';

import './style.css';

const cards = new Cards('#root');

cards.render('afterbegin');
