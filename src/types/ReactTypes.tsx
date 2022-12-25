export type ChildrenProp = {
    children?: React.ReactNode;
};

export type TransactionType = {
    id: number;
    label: string;
    description: string;
    balance: number;
    information: {
        reference: string;
        amount: number;
        date: Date;
        category: {
            id: number;
            label: string;
        };
    };
};
