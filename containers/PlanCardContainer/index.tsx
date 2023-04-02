import React, { HTMLAttributes } from 'react';
import PlanCard from 'components/PlanCard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    monthly: boolean;
}

const PlanCardContainer: React.FC<IProps> = ({ monthly, ...props }) => {
    const plans: Plan[] = [
        {
            name: 'Basic',
            price: {
                monthly: 19.99,
                annually: 199.99,
            },
            features: [
                '500 GB Storage',
                '2 Users Allowed',
                'Send up to 3 GB',
            ],
            link: '#basic',
        },
        {
            name: 'Professional',
            price: {
                monthly: 24.99,
                annually: 249.99,
            },
            features: [
                '1 TB Storage',
                '5 Users Allowed',
                'Send up to 10 GB',
            ],
            link: '#professional',
        },
        {
            name: 'Master',
            price: {
                monthly: 39.99,
                annually: 399.99,
            },
            features: [
                '2 TB Storage',
                '10 Users Allowed',
                'Send up to 20 GB',
            ],
            link: '#master',
        },
    ];

    return (
        <div {...props}>
            {plans.map((plan, index) => (
                <PlanCard key={index}
                          plan={{
                              ...plan,
                              price: typeof plan.price === 'number' ?
                                  plan.price : plan.price[monthly ? 'monthly' : 'annually'],
                          }}
                />
            ))}
        </div>
    );
};

export default PlanCardContainer;
