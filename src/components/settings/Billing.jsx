

import React from "react";

function BillingNew() {
  const billingHistory = [
    {
      id: "780-Dec 2022",
      date: "Dec 23, 2022",
      amount: "USD $12.00",
      plan: "Basic plan",
      users: "15 Users",
      paid: true,
    },
    {
      id: "345-Nov 2022",
      date: "Nov 12, 2022",
      amount: "USD $22.00",
      plan: "Basic plan",
      users: "56 Users",
      paid: true,
    },
    {
      id: "213-Oct 2022",
      date: "Oct 09, 2022",
      amount: "USD $80.00",
      plan: "Basic plan",
      users: "90 Users",
      paid: true,
    },
    {
      id: "324-Aug 2022",
      date: "Aug 03, 2022",
      amount: "USD $12.00",
      plan: "Basic plan",
      users: "22 Users",
      paid: true,
    },
    {
      id: "123-July 2022",
      date: "July 13, 2022",
      amount: "USD $67.00",
      plan: "Basic plan",
      users: "23 Users",
      paid: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-inter p-4 sm:p-8 ml-60">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Plans and billing</h1>
          <p className="text-gray-600 text-2xl">Manage your plan and billing details</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Basic Plan Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  Basic plan
                </h2>
                <p className="text-gray-500 text-sm">
                  Our most popular plan for small teams.
                </p>
                <div className="flex -space-x-2 overflow-hidden mt-4">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/profile2.png" alt="Avatar 1" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/profile4.png" alt="Avatar 2" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/Profile7.png" alt="Avatar 3" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="./assets/Profile6.png" alt="Avatar 4" />
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  $20{" "}
                  <span className="text-lg font-normal text-gray-600">per month</span>
                </div>
                <button className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors mt-12 text-2xl">
                  Upgrade plan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Payment method</h2>
            <p className="text-gray-500 text-sm mb-4">Change how you pay for your plan.</p>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-6 bg-blue-700 text-white flex items-center justify-center text-xs font-bold rounded mr-3">
                  VISA
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">Visa ending in 6789</p>
                  <p className="text-gray-500 text-sm">Expiry 01/2023</p>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Billing History Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-1.5">Billing history</h2>
              <p className="text-gray-500 text-sm">
                Download your previous plan receipts and usage details.
              </p>
            </div>
            <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition-colors">
              Download all
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billing</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Billing Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
                  <th className="relative px-4 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {billingHistory.map((bill) => (
                  <tr key={bill.id}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={bill.paid}
                          readOnly
                          className="form-checkbox h-4 w-4 text-purple-600 rounded-md border-gray-300 mr-2"
                        />
                        <div className="w-5 h-5 bg-red-500 text-white flex items-center justify-center text-xs rounded mr-2">PDF</div>
                        Billing #{bill.id}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{bill.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{bill.amount}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{bill.plan}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{bill.users}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-purple-600 hover:text-purple-900">Download all</button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingNew;
