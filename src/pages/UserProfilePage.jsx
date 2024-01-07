import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import ContentHeading from '../components/ContentHeading';
import { showFormattedDate } from '../utils/formatterDate';
import { FaPowerOff } from 'react-icons/fa6';

export default function UserProfilePage() {
  return (
    <Container>
      <Row className="justify-content-start pt-3">
        <Col>
          <Card body className="user-profile-card">
            <ContentHeading title="Profil Saya" />
            <hr className="text-secondary" />
            <ListGroup variant="flush" className="user-profile-list-item">
              <ListGroup.Item className="mx-0 px-0 pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3} md={6} sm={6}>
                    <h3 className="user-profile-title">Akun ID</h3>
                  </Col>
                  <Col lg={8} md={6} sm={6}>
                    <h3 className="user-profile-title">1212121212</h3>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="mx-0 px-0  pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3} md={6} sm={6}>
                    <h3 className="user-profile-title"> Nama Lengkap</h3>
                  </Col>
                  <Col lg={8} md={6} sm={6}>
                    <h3 className="user-profile-title">FARHAN</h3>
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
                      farhan18042002@gmail.com
                    </h3>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="mx-0 px-0 pt-3">
                <Row className="justify-content-arround">
                  <Col lg={3}>
                    {' '}
                    <h3 className="user-profile-title">Waktu Bergabung</h3>
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
              <Button variant="outline-light">
                {' '}
                <FaPowerOff fontSize={16} /> Keluar Dari Aplikasi
              </Button>{' '}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
