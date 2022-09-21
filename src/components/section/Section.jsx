import PropTypes from 'prop-types';

const Section = ({ title, children, className }) => {
  return (
    <section>
      {title && <h2 className={className}>{title}</h2>}
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
