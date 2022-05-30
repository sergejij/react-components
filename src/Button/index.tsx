import React, {FC} from 'react';
import {IButton} from "./Button.typings";

const Button: FC<IButton> = ({ children }) => {
    return (
        <button>{children}</button>
    );
}

export default Button;