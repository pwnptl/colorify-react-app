import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">About Us</h1>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tristique eros. Nulla eget lobortis justo.
            Morbi sagittis mi vitae mauris finibus, vitae vulputate nunc sagittis. Sed id lorem vel massa fermentum
            facilisis. Aliquam ac volutpat metus. Vestibulum sed gravida nisl. Ut eu nisl et ipsum cursus ullamcorper
            in sit amet lectus.
          </p>
          <p>
            Nullam vitae congue dui. Donec vel leo turpis. Proin lobortis turpis id nibh viverra, nec rutrum lacus
            tincidunt. Phasellus eu metus at quam fringilla egestas. Nulla cursus, libero at tincidunt posuere, tortor
            erat semper justo, id fringilla arcu nisl ac nulla. Nulla facilisi.
          </p>
          <p>
            Integer lacinia arcu non dolor interdum, sed dapibus felis laoreet. Quisque rhoncus ipsum ut lacus luctus
            iaculis. Mauris non mauris at sem iaculis ultrices sed in arcu. Sed nec est velit. Cras molestie pharetra
            nisi sed finibus. Nullam auctor dignissim nisl, sed egestas enim elementum id.
          </p>
          <div className="columns">
            <div className="column">
              <figure className="image is-128x128">
                <img src="image1.jpg" alt="Image 1" />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-128x128">
                <img src="image2.jpg" alt="Image 2" />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-128x128">
                <img src="image3.jpg" alt="Image 3" />
              </figure>
            </div>
          </div>
          <p>
            Check out our <a href="/projects">projects</a> to learn more about what we do. Feel free to reach out to us
            using our <a href="/contact">contact form</a> for any inquiries or collaborations.
          </p>
          <p>
            Need more information?{' '}
            <span className="tooltip is-tooltip-top" data-tooltip="Tooltip text">
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
