import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsSubstack } from 'react-icons/bs';
import styles from './icons.module.css'

const SocialIcons = () => {
  return (
    <div className={styles.socialContainer}>
      <a 
        href="https://github.com/tristan887" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
        className={styles.iconLink}
        >
            <FaGithub />
        </a>
      <a 
        href="https://www.linkedin.com/in/diana-tristan/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
        className={styles.iconLink}
        >
            <FaLinkedin />
        </a>
      <a 
        href="https://www.instagram.com/dianatristann/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        className={styles.iconLink}
        >    
            <FaInstagram  />
        </a>
      <a 
        href="https://substack.com/@dianatristan" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Substack"
        className={styles.iconLink} 
      >
        <BsSubstack /> 
      </a>
    </div>
  );
};

export default SocialIcons;
