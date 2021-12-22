import React from "react";
import { Link, useMatch } from "react-router-dom";

interface Props{
    children: string,
    to: string
}
const CustomLink = ({children, to, ...props}: Props)=>{
    const match = useMatch(to);
    return(
        <Link to={to} 
        {...props}
        style={{color: match? 'red': 'white'}}
        >
            {children}
        </Link>
    )
}

export {CustomLink}