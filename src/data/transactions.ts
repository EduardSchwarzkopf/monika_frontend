export default [
  {
    id: 2,
    account_id: 1,
    information: {
      amount: 10.0,
      reference: "my super cool description",
      date: "2022-01-02T05:00:21.294000+00:00",
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
      amount: 10.0,
      reference: "my super cool description",
      date: "2022-01-02T05:00:21.294000+00:00",
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
    id: 13,
    account_id: 3,
    information: {
      amount: 20.0,
      reference: "my super cool description",
      date: "2022-01-02T05:00:21.294000+00:00",
      subcategory_id: 1,
      subcategory: {
        id: 1,
        label: "Salary",
        is_income: true,
        parent_category_id: 1,
      },
    },
    offset_transactions_id: 12,
  },
];
