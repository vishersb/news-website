import React from 'react';
import { Link } from 'react-router-dom';
export type styles = { listItem: string, list: string };
interface Props {
    classes: styles;
}

const Header = ({classes}:Props)=>{
    return <div>
        <ul className={classes.list}>
        <li className={classes.listItem}>
                <Link to="/mobile">Mobile</Link>
            </li>
            <li className={classes.listItem}>
                <Link to="/pc">PC</Link>
            </li>
            <li className={classes.listItem}>
                <Link to="/it">IT</Link>
            </li>
            <li className={classes.listItem}>
                <Link to="/news">NEWS</Link>
            </li>
        </ul>
    </div>
};

export {Header}