import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row,Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase.config';
import {toast} from "react-toastify";


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const signIn =async (e) => {
    e.preventDefault()
    setLoading(true)
    try{

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
       const user = userCredential.user
       console.log(user)
       toast.success('successfully logged in')
       navigate('/checkout')

    }catch(error) {
      setLoading(false)
      toast.error (error.message)

    }
  }


  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading ? (
              <col lg='12' className='text-center'><h5
              className='fw-bold'>Loading.....</h5></col>) :(
                <Col lg='6' className='m4'>
            <h3 className='fw-bold mb-4'>Login</h3>
            <Form className='auth__form' onSubmit={signIn}>
              <FormGroup>
                <input type='email' placeholder='enter your Email' 
                value={email} onChange={e=> setEmail(e.target.value)}></input>
              </FormGroup>
              <FormGroup>
                <input type='password' placeholder='enter your Password'
                value={password} onChange={e=> setPassword(e.target.value)}
                ></input>
              </FormGroup>
              <button type='submit' className='buy__btn auth__btn'>Login</button>
            </Form>
            <p>don't have an account?<Link to='/signup'>Sign up</Link></p>
            </Col>
              )
            }
          
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;