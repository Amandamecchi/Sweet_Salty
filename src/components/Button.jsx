import styles from '../components/buttons.module.css';

export default function Button({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary', 
  size = 'medium',
  icon = null,
  className = '',
  ...props 
}) {
  const getButtonClasses = () => {
    let classes = [styles.btn];
    
    if (variant !== 'primary') {
      classes.push(styles[`btn--${variant}`]);
    }
    
    if (size !== 'medium') {
      classes.push(styles[`btn--${size}`]);
    }
    
    if (icon === 'back') {
      classes.push(styles['btn--back']);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <button
      type={type}
      className={getButtonClasses()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'medium',
  icon = null,
  className = '',
  ...props 
}) {
  const getButtonClasses = () => {
    let classes = [styles.btn];
    
    if (variant !== 'primary') {
      classes.push(styles[`btn--${variant}`]);
    }
    
    if (size !== 'medium') {
      classes.push(styles[`btn--${size}`]);
    }
    
    if (icon === 'back') {
      classes.push(styles['btn--back']);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <a
      href={href}
      className={getButtonClasses()}
      {...props}
    >
      {children}
    </a>
  );
}
