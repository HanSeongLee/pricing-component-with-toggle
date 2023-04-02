import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    plan: Plan;
}

const PlanCard: React.FC<IProps> = ({ plan, className, ...props }) => {
    const {
        name, price, features, link
    } = plan;

    return (
        <article className={cn(styles.planCard, className)}>
            <h3 className={styles.name}>
                {name}
            </h3>
            <div className={styles.price}>
                <span className={styles.currency}>$&nbsp;</span>{price}
            </div>
            <ul className={styles.featureContainer}>
                {features.map((feature, index) => (
                    <li className={styles.featureItem}
                        key={index}
                    >
                        {feature}
                    </li>
                ))}
            </ul>

            <Button as={'a'}
                    href={link}
            >
                Learn More
            </Button>
        </article>
    );
};

export default PlanCard;
