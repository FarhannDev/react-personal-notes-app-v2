import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/api/network-data';
import ContentHeading from '../../components/ContentHeading';
import RegisterFormInput from '../../components/auth/RegisterFormInput';
import '../../assets/styles/auth.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const onRegisterHandler = async (data) => {
    const { error } = await register(data);

    if (!error) {
      alert('Oke akun kamu sudah terdaftar');
      navigate('/login');
    }
  };

  return (
    <>
      <Container>
        <ContentHeading title="Yuk, daftar kan akun kamu untuk menggunakan aplikasi." />
        <RegisterFormInput register={onRegisterHandler} />
      </Container>
    </>
  );
}
