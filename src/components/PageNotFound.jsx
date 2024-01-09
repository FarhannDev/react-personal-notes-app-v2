/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHouseChimney } from 'react-icons/fa6';
import { ContentHeading } from './LoadableComponent';

export default function PageNotFound({ title = 'Halaman Tidak Ditemukan' }) {
  return (
    <div className="page-notfound-container">
      <div className="mx-auto text-center">
        <img
          src="/page_not_found.png"
          className="img-fluid page-notfound-images"
        />
        <ContentHeading title={'404'} />
        <ContentHeading title={title} />

        <Link
          to={'/'}
          className="link-offset-2 link-underline link-underline-opacity-0 link-secondary"
        >
          <FaHouseChimney fontSize={18} className="me-1" /> Kembali Halaman
          Utama
        </Link>
      </div>
    </div>
  );
}

PageNotFound.propTypes = { title: PropTypes.string.isRequired };
