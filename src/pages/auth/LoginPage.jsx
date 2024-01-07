import { Container } from 'react-bootstrap';
import ContentHeading from '../../components/ContentHeading';
import LoginFormInput from '../../components/auth/LoginFormInput';

import '../../assets/styles/auth.css';

export default function LoginPage() {
  return (
    <>
      <Container>
        <ContentHeading title="Yuk, login untuk menggunakan aplikasi." />
        <LoginFormInput />
      </Container>
    </>
  );
}
