import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from "firebase/firestore";

import { auth, storage, db } from '../firebase.config';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (file) {
        const storageRef = ref(storage, `images/${Date.now()}+ ${username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
          (snapshot) => {},
          (error) => {
            toast.error(error.message);
            setLoading(false);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });

            toast.success("Account created successfully!");
            setLoading(false);
            navigate('/login'); 
          }
        );
      } else {
        await updateProfile(user, {
          displayName: username,
        });

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: username,
          email,
        });

        toast.success("Account created successfully!");
        setLoading(false);
        navigate('/login');  
      }

      console.log(user);
    } catch (error) {
      toast.error("Something went wrong");
      console.error('Error during sign up:', error.message);
      setLoading(false);
    }
  };

  return (
    <Helmet title='Sign up'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Sign up</h3>
              <Form className='auth__form' onSubmit={handleSignup}>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type='email'
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type='password'
                    placeholder='Enter your Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type='file'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button type='submit' className='buy__btn auth__btn' disabled={loading}>
                  {loading ? 'Loading...' : 'Create your account'}
                </button>
              </Form>
              <p>
                Already have an account?{' '}
                <Link to='/login'>Log in</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
