import React from 'react';
import './Header.scss';

import { motion } from 'framer-motion';
//import { AppWrap } from '../../constants';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
    // moves 100 px from left to right and opacity changes from 0 to 1
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      // duration of the transistion is half a second
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Aaron Leblanc</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web 3.0 Developer</p>
          <p className="p-text">Freelancer</p>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Advanced Diploma in Computer Programming and Analysis</p>
        </div>
      </div>
    </motion.div>


    <motion.div
    // changing opacity from 0 to 1
      whileInView={{ opacity: [0, 1] }}
      // duration of animation is half and second and children animation won't start until half a second has passed
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >

      <img src={images.profile} alt="profile_bg" />
      { /* animating the profile image by scaling it */ }
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>


    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      { /* Populating with technology images */ }
      {[images.javascript, images.eth, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');