/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLanguage } from '../../hooks/useLanguage';
import { login } from '../../utils/api/network-data';
import {
  ContentHeading,
  LoginFormInput,
  MetaTagSeo,
} from '../../components/LoadableComponent';
import '../../assets/styles/auth.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated, loginSuccess } = useAuth();
  const { language } = useLanguage();

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
      <MetaTagSeo
        title={language === 'id' ? 'Masuk Ke Akun Saya' : 'Login to My Account'}
        description="Yuk, login untuk menggunakan aplikasi."
      />
      <Container>
        <ContentHeading
          title={
            language === 'id'
              ? 'Yuk, login untuk menggunakan aplikasi.'
              : 'Come on, log in to use the application.'
          }
        />
        <LoginFormInput login={handlerLogin} />
      </Container>
    </>
  );
}
