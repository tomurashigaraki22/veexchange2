import React from "react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-08-01",
      description: "Payment to ABC Store",
      amount: "-$50.00",
      status: "Completed",
      type: "Purchase", // New type field
    },
    {
      id: 2,
      date: "2024-08-03",
      description: "Refund from XYZ Corp",
      amount: "+$25.00",
      status: "Completed",
      type: "Refund", // New type field
    },
    {
      id: 3,
      date: "2024-08-05",
      description: "Payment to DEF Services",
      amount: "-$75.00",
      status: "Pending",
      type: "Bills Payment", // New type field
    },
    {
      id: 4,
      date: "2024-08-07",
      description: "Salary Credit",
      amount: "+$1,500.00",
      status: "Completed",
      type: "Income", // New type field
    },
    {
      id: 5,
      date: "2024-08-10",
      description: "Transfer to Savings",
      amount: "-$200.00",
      status: "Completed",
      type: "Money Transfer", // New type field
    },
  ];

  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Type</th> {/* New header */}
            <th className="py-3 px-6 text-right">Amount</th>
            <th className="py-3 px-6 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {transaction.date}
              </td>
              <td className="py-3 px-6 text-left">{transaction.description}</td>
              <td className="py-3 px-6 text-left">{transaction.type}</td>{" "}
              {/* New column */}
              <td
                className={`py-3 px-6 text-right ${
                  transaction.amount.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {transaction.amount}
              </td>
              <td
                className={`py-3 px-6 text-center ${
                  transaction.status === "Completed"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
