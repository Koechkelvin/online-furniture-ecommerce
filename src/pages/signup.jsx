import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {  useNavigate } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
//import '../styles/login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Sign in success");
      navigate('/home');
    }, 2000);
  };

  return (
    <Helmet title="Sign in">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='text-center'>
                <h5 className='fw-bold'>Please wait...</h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth__form" onSubmit={signIn}>
                  <FormGroup className='form__group'>
                    <input 
                      type='email' 
                      placeholder='Enter your email'
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                      type='password' 
                      placeholder='Enter your password'
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                      type='password' 
                      placeholder='Re_enter your password'
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                    />
                  </FormGroup>
                  <button type='submit' className="buy__btn auth__btn">Sign up</button>
                 
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
