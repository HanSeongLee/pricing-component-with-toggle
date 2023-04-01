import React, { ElementType } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps<T extends ElementType = 'button' | 'a'> {
    as?: T;
    variant?: 'primary';
    className?: string;
    href?: string;
}

const Button: React.FC<IProps> = ({ as='button', variant, className, ...props }) => {
    return (
        React.createElement(as, {
            className: cn(styles.button, {
                [styles.primary]: variant === 'primary',
            }),
            ...props,
        })
    );
};

Button.defaultProps = {
    as: 'button',
    variant: 'primary',
};

export default Button;
