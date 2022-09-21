import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <div>{<p className={styles.text}>{message}</p>}</div>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
