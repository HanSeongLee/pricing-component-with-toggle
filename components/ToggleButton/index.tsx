import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
    labels: {
        off: string;
        on: string;
    };
}

const ToggleButton: React.FC<IProps> = ({ on, labels, className, ...props }) => {
    return (
        <div className={cn(styles.toggleButton, {
            [styles.on]: on,
        }, className)}>
            <span className={styles.label}>
                {labels.off}
            </span>
            <button className={styles.button}
                    {...props}
            />
            <span className={styles.label}>
                {labels.on}
            </span>
        </div>
    );
};

export default ToggleButton;
