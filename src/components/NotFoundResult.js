import React from "react";
import { Link } from "react-router-dom";

const NotFoundResult = ({ searchTerm }) => {
  return (
    <div>
      <div className='py-40 max-w-screen-xl mx-auto px-4 text-center'>
        <p className='font-bold text-xl'>
          Không tìm thấy sản phẩm phù hợp với từ khóa: "{searchTerm}"
        </p>
        <p className='text-base text-gray-400 mt-4'>
          Vui lòng{" "}
          <Link to='/' className='font-bold underline text-blue-400'>
            quay lại
          </Link>{" "}
          để tiếp tục bạn nhé!
        </p>
      </div>
    </div>
  );
};

export default NotFoundResult;
