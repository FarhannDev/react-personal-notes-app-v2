/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { login } from '../../utils/api/network-data';
import ContentHeading from '../../components/ContentHeading';
import LoginFormInput from '../../components/auth/LoginFormInput';
import '../../assets/styles/auth.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, loginSuccess } = useAuth();

  const handlerLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  };

  if (isAuthenticated) return navigate('/');

  return (
    <>
      <Container>
        <ContentHeading title="Yuk, login untuk menggunakan aplikasi." />
        <LoginFormInput login={handlerLogin} />
      </Container>
    </>
  );
}
