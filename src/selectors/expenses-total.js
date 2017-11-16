export default (expenses) => {
    return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};

// export const selectExpensesTotal = (expenses) => {
//     const total = 0;
//     return expenses.filter((expense) => {
//         const amount = numeral(expense(amount / 100).format('$0,0.00'));
//         return total+= amount;
//     })
// };
