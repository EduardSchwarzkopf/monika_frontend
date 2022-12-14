export default [
    {
        id: 1,
        account_id: 1,
        information: {
            amount: 4500.0,
            reference: "my super cool description",
            date: "2022-01-05T05:00:21.294000+00:00",
            subcategory_id: 1,
            subcategory: {
                id: 1,
                label: "Salary",
                is_income: true,
                parent_category_id: 1,
            },
        },
        offset_transactions_id: null,
    },
    {
        id: 2,
        account_id: 1,
        information: {
            amount: 50.0,
            reference: "my super cool description",
            date: "2022-01-06T05:00:21.294000+00:00",
            subcategory_id: 1,
            subcategory: {
                id: 1,
                label: "Salary",
                is_income: true,
                parent_category_id: 1,
            },
        },
        offset_transactions_id: null,
    },
    {
        id: 3,
        account_id: 1,
        information: {
            amount: -80.0,
            reference: "my super cool description",
            date: "2022-01-08T05:00:21.294000+00:00",
            subcategory_id: 1,
            subcategory: {
                id: 1,
                label: "Groceries",
                is_income: true,
                parent_category_id: 1,
            },
        },
        offset_transactions_id: null,
    },
    {
        id: 4,
        account_id: 1,
        information: {
            amount: -10.0,
            reference: "Schneemobilreinigungsrechnung",
            date: "2022-01-02T05:00:21.294000+00:00",
            subcategory_id: 1,
            subcategory: {
                id: 1,
                label: "Fuel",
                is_income: true,
                parent_category_id: 1,
            },
        },
        offset_transactions_id: 13,
    },
    {
        id: 13,
        account_id: 1,
        information: {
            amount: 20.0,
            reference: "my super cool description",
            date: "2022-01-12T05:00:21.294000+00:00",
            subcategory_id: 1,
            subcategory: {
                id: 1,
                label: "Salary",
                is_income: true,
                parent_category_id: 1,
            },
        },
        offset_transactions_id: 3,
    },
];
