import styles from '../styles/buttons.module.css';

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
    
    // Adicionar variante
    if (variant !== 'primary') {
      classes.push(styles[`btn--${variant}`]);
    }
    
    // Adicionar tamanho
    if (size !== 'medium') {
      classes.push(styles[`btn--${size}`]);
    }
    
    // Adicionar ícone se especificado
    if (icon === 'back') {
      classes.push(styles['btn--back']);
    }
    
    // Adicionar classes personalizadas
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

// Componente específico para links estilizados como botões
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
