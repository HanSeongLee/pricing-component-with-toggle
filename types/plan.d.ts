type Plan = {
    name: string;
    price: {
        monthly: number;
        annually: number;
    } | number;
    features: string[];
    link: string;
};
