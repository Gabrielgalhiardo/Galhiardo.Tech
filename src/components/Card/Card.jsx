import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClass = 'card';
  const variantClass = `card--${variant}`;
  const hoverClass = hover ? 'card--hover' : '';
  const classes = `${baseClass} ${variantClass} ${hoverClass} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;

