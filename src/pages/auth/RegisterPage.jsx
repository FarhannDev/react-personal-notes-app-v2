import { Container } from 'react-bootstrap';
import ContentHeading from '../../components/ContentHeading';

import '../../assets/styles/auth.css';
import RegisterFormInput from '../../components/auth/RegisterFormInput';

export default function RegisterPage() {
  return (
    <>
      <Container>
        <ContentHeading title="Yuk, daftar kan akun kamu untuk menggunakan aplikasi." />
        <RegisterFormInput />
      </Container>
    </>
  );
}
