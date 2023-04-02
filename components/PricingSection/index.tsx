import React, { useState } from 'react';
import styles from './style.module.scss';
import ToggleButton from 'components/ToggleButton';
import cn from 'classnames';
import PlanCardContainer from 'containers/PlanCardContainer';

const PricingSection: React.FC = () => {
    const [monthly, setMonthly] = useState<boolean>(false);

    const onMonthlyToggle = () => {
        setMonthly(!monthly);
    };

    return (
        <section className={cn(styles.pricingSection)}>
            <h2 className={styles.title}>
                Our Pricing
            </h2>
            <ToggleButton className={styles.monthlyToggleButton}
                          on={monthly}
                          onClick={onMonthlyToggle}
                          labels={{
                              off: 'Annually',
                              on: 'Monthly',
                          }}
                          title={'Monthly Toggle Button'}
            />
            <PlanCardContainer className={styles.planCardContainer}
                               monthly={monthly}
            />
        </section>
    );
};

export default PricingSection;
