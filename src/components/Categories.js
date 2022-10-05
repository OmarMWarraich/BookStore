import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>
        Check Status
      </button>
      <p>{categories}</p>
    </div>
  );
};
export default Categories;
