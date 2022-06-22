import { Link, NavLink } from "react-router-dom";
import classes from './Landing.module.scss';

const Landing = () => {
    return (
        <div>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li><NavLink activeClassName={classes.active} to="/semester1">Semester1</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/semester2">Semester2</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Landing;