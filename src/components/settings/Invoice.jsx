

import React from "react";
import { FaPlus } from "react-icons/fa6";


function PaymentNew() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter flex items-center justify-center p-6 ml-60">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-black text-gray-900 mb-4" >Account/Invoice</h2>
        <h2 className="font-semibold mb-3 text-2xl text-gray-600" >Payment Details</h2>
        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center p-6">
            <h3 className="text-lg font-semibold text-gray-800">Payment</h3>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </div>
          <div className="p-6 pt-0 border-t border-gray-200">
            <h4 className="text-2xl font-semibold text-gray-700 mb-4">
              Payment method
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* VISA */}
              <div className="flex items-center justify-between p-4 rounded-lg border-2 border-purple-600 bg-purple-50">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    readOnly
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mr-2"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-gray-700 font-medium text-sm">347809</span>
                    <span className="text-sm text-gray-500">Visa Edit</span>
                  </div>
                </div>
                <div className="w-12 h-8 bg-blue-700 text-white flex items-center justify-center text-xs font-bold rounded">
                  VISA
                </div>
              </div>

              {/* PayPal */}
              <div className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-300 hover:border-gray-400">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={false}
                    readOnly
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 mr-2"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-gray-700 font-medium text-sm">347809</span>
                    <span className="text-sm text-gray-500">Paypal Edit</span>
                  </div>
                </div>
                <img
                  className="h-8 w-12"
                  src="./assets/paypal.png"
                  alt="PayPal"
                />
              </div>

              {/* New Users */}
              <div className="flex flex-col items-center justify-center p-3 rounded-lg border-2 border-gray-300 hover:border-gray-400">
                <FaPlus className="w-10 h-10 text-white bg-purple-700 mb-2" />
                <span className="text-purple-700 font-sans text-2xl">New users</span>
              </div>
            </div>

            {/* Cardholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="cardholderName"
                  className="block text-2xl font-medium text-gray-700 mb-1"
                >
                  Card holder name
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  className="text-sm w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="John Walden"
                  readOnly
                />
              </div>
            </div>

            {/* Billing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="billingAddress"
                  className="block text-2xl font-medium text-gray-700 mb-1"
                >
                  Billing address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="billingAddress"
                    className=" text-sm w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Germany"
                    readOnly
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Zip + City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-2xl font-medium text-gray-700 mb-1"
                >
                  Zip code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className=" text-sm w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="6789123"
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-2xl font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className=" text-sm w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Britain"
                  readOnly
                />
              </div>
            </div>

            {/* Invoice Checkbox */}
            <div className="flex items-center mb-6 p-2">
              <input
                type="checkbox"
                id="invoiceAddress"
                className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                checked={true}
                readOnly
              />
              <label
                htmlFor="invoiceAddress"
                className="ml-2 block text-2xl text-gray-900"
              >
                Invoice Address
              </label>
            </div>

            {/* Pay Button */}
            <button
              className=" text-2xl w-full bg-purple-600 text-white py-3 rounded-md font-semibold"
              disabled
            >
              Pay $67.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentNew;
