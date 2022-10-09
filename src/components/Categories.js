import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);
  return (
    <div>
      <button className="check" type="button" onClick={() => { dispatch(checkStatus()); }}>
        Check Status
      </button>
      <p>{categories}</p>
    </div>
  );
};
export default Categories;
