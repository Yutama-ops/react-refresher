import { Fragment } from 'react';
import MainHeader from './MainHeader';
import {useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';




const Layout = (props) => {
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(cartActions.toogleCart());
  }

  return (
    <Fragment>
      <MainHeader handleClick={toogleCartHandler}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
