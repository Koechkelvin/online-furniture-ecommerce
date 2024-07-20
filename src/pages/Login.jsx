import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row,Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m4'>
            <h3>Login</h3>
            <Form>
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

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login;