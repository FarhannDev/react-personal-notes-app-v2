import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api/network-data';
import { useLanguage } from '../../hooks/useLanguage';
import {
  ContentHeading,
  RegisterFormInput,
  MetaTagSeo,
} from '../../components/LoadableComponent';
import '../../assets/styles/auth.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const onRegisterHandler = async (data) => {
    const { error } = await register(data);

    if (!error) {
      navigate('/login');
    }
  };

  return (
    <>
      <MetaTagSeo
        title={
          language === 'id' ? 'Daftar Ke Akun Saya' : 'Register to My Account'
        }
        description="Yuk, daftar kan akun kamu untuk menggunakan aplikasi."
      />
      <Container>
        <ContentHeading
          title={
            language === 'id'
              ? 'Yuk, daftar kan akun kamu untuk menggunakan aplikasi.'
              : 'Come on, register your account to use the application.'
          }
        />
        <RegisterFormInput register={onRegisterHandler} />
      </Container>
    </>
  );
}
