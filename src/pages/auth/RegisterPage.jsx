import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api/network-data';
import ContentHeading from '../../components/ContentHeading';
import RegisterFormInput from '../../components/auth/RegisterFormInput';
import '../../assets/styles/auth.css';
import { useLanguage } from '../../hooks/useLanguage';

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
