import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  // useState field
  const [abouts, setAbouts] = useState([]);


  useEffect(() => {
    // query constant
    const query = '*[_type == "abouts"]';

    // fetching abouts section through api call to sanity client and setting statefield abouts with data
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        { /* Looping through abouts contents*/}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            { /* Rendering the about section titles */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            { /* Rendering the about section descriptions*/}
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About