import { Link } from "react-router-dom";
import css from './Navigation.module.css'

 export default function Navigation() {
   return(<nav className={css.nav}>
     <Link to="/" className={css.link} >Home</Link>
     <Link to="/movies" className={css.link}>Movies</Link>
    </nav>)
}
