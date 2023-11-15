import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Form({
  handleTitleChange,
  handlePaymentChange,
  handleSubmit,
  titleValue,
  paymentValue,
}) {
  return (
    <div className="mb-3">
      <form className="flex flex-col">
        <div className="flex flex-row justify-between space-x-4">
          <div>
            <h4 className="font-light text-amber-600">지출 항목</h4>
            <input
              className="w-full px-3 py-2 border-b-3 shadow"
              type="text"
              name="titleVal"
              placeholder="예)렌트비"
              onChange={handleTitleChange}
              value={titleValue}
            />
          </div>
          <div>
            <h4 className="font-light text-amber-600">비용</h4>
            <input
              className="w-full px-3 py-2 border-b-3 shadow"
              type="text"
              name="payVal"
              onChange={handlePaymentChange}
              value={paymentValue}
            />
          </div>
        </div>
        <input
          className="bg-green-300 p-1 mt-5 rounded w-16"
          type="submit"
          value={`입력`}
          onClick={handleSubmit}
          
        />
      </form>
    </div>
  );
}
