import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import {motion} from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector((state)=>state.cart.cartItems);
  const totalAmount = useSelector((state)=>state.cart.totalAmount);
  return (
    <Helmet title='Cart'>
    <CommonSection title='Shopping Cart'></CommonSection>
    <section>
      <Container>
        <Row>
          <Col lg='9'>

            {cartItems.length ===0 ?  (
              <h2 className='fs-4 text-center'>No item added to cart</h2>
              ): (
              <table className="table bordered">
              <thead>
                <tr>
                 
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartItems.map((item,index)=>(
                    <Tr item={item} key={index}></Tr>
                  ))}
              </tbody>
            </table>)}
          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Total ${totalAmount}</h6>
              <div>
              <button className="buy__btn w-100">
                <Link to='/Signup'>Checkout</Link>
              </button>
              <button className="buy__btn w-100  mt-3">
                <Link to='/shop'>Continue Shopping</Link>
              </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

const Tr =({item})=>{

  const dispatch = useDispatch()
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <td><motion.i 
  whileTap={{scale:1.2}}
  onClick={deleteProduct}
  className='ri-delete-bin-line'></motion.i></td>
</tr>
}

export default Cart;