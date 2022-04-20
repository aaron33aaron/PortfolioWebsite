import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
      <div>
        <a href='https://twitter.com/aaron_j_leblanc'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/aaron.soccer/'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/aaron_leblanc__/'>
          <BsInstagram />
        </a>
      </div>
    </div>
  );

export default SocialMedia