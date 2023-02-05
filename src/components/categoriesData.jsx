import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { FaPizzaSlice, FaHamburger, FaHeart } from 'react-icons/fa';

const data = [
  { title: 'American', icon: <FaHamburger />, link: '/cuisine/american' },
  { title: 'Italian', icon: <FaPizzaSlice />, link: '/cuisine/italian' },
  { title: 'Korean', icon: <GiNoodles />, link: '/cuisine/korean' },
  { title: 'Japanese', icon: <GiChopsticks />, link: '/cuisine/japanese' },
];

export default data;
