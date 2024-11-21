import React from "react";

const Money = () => {
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <h3 className="text-lg font-semibold mb-4">
          Wallet Balance:
          {/* ${user.wallet} */}
        </h3>
        <label className="block text-sm font-medium mb-2">Add Money</label>
        <div className="flex gap-2">
          <input
            type="number"
            // value={walletInput}
            // onChange={(e) => setWalletInput(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-md"
            placeholder="Enter amount"
          />
          <button
            // onClick={handleAddMoney}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Money;
