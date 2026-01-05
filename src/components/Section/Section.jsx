import './Section.css';

const Section = ({ 
  children, 
  variant = 'default',
  id,
  className = '',
  ...props 
}) => {
  const baseClass = 'section';
  const variantClass = `section--${variant}`;
  const classes = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <section id={id} className={classes} {...props}>
      <div className="section__container">
        {children}
      </div>
    </section>
  );
};

export default Section;

