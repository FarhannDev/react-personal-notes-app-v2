/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import ContentHeading from '../components/ContentHeading';
import { showFormattedDate } from '../utils/formatterDate';
import { FaPowerOff } from 'react-icons/fa6';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

export default function UserProfilePage() {
  const { isAuthenticated, logout } = useAuth();
  const { language } = useLanguage();

  return (
    <Container>
      <Row className="justify-content-start pt-3">
        <Col>
          <Card body className="user-profile-card">
            <ContentHeading
              title={language === 'id' ? 'Profil Saya' : 'My Profile'}
            />
            <hr className="text-secondary" />
            <ListGroup variant="flush" className="user-profile-list-item">
              <ListGroup.Item className="mx-0 px-0 pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3} md={6} sm={6}>
                    <h3 className="user-profile-title">
                      {language === 'id' ? 'Akun ID' : 'Account ID'}{' '}
                    </h3>
                  </Col>
                  <Col lg={8} md={6} sm={6}>
                    <h3 className="user-profile-title">{isAuthenticated.id}</h3>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="mx-0 px-0  pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3} md={6} sm={6}>
                    <h3 className="user-profile-title">
                      {language === 'id' ? 'Nama Lengkap' : 'Full Name'}{' '}
                    </h3>
                  </Col>
                  <Col lg={8} md={6} sm={6}>
                    <h3 className="user-profile-title">
                      {isAuthenticated.name}
                    </h3>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="mx-0 px-0 pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3}>
                    <h3 className="user-profile-title">Email Address</h3>
                  </Col>
                  <Col lg={8}>
                    <h3 className="user-profile-title">
                      {isAuthenticated.email}
                    </h3>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="mx-0 px-0 pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3}>
                    {' '}
                    <h3 className="user-profile-title">
                      {language === 'id' ? 'Waktu Bergabung' : 'Joined'}{' '}
                    </h3>
                  </Col>
                  <Col lg={8}>
                    <h3 className="user-profile-title">
                      {showFormattedDate(new Date().toISOString())}
                    </h3>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <div className="d-flex justify-content-start pt-3">
              <Button onClick={logout} variant="outline-light">
                {' '}
                <FaPowerOff fontSize={16} />{' '}
                {language === 'id' ? 'Keluar Dari Aplikasi ' : 'Logout'}
              </Button>{' '}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
