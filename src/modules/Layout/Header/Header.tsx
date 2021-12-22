import React from 'react';
// import { Link } from 'react-router-dom';
import { CustomLink } from '../../../components/CustomLink';
export type styles = { listItem: string, list: string };
interface Props {
    classes: styles;
}

const Header = ({classes}:Props)=>{
    return <div>
        <ul className={classes.list}>
        <li className={classes.listItem}>
                <CustomLink to="/mobile">Mobile</CustomLink>
            </li>
            <li className={classes.listItem}>
                <CustomLink to="/pc">PC</CustomLink>
            </li>
            <li className={classes.listItem}>
                <CustomLink to="/it">IT</CustomLink>
            </li>
            <li className={classes.listItem}>
                <CustomLink to="/news">NEWS</CustomLink>
            </li>
        </ul>
    </div>
};

export {Header}