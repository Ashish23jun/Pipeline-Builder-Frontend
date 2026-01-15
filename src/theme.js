export const theme = {
  colors: {
    primary: '#6366f1',     
    primaryDark: '#4f46e5',
    primaryLight: '#818cf8',

    secondary: '#8b5cf6',    
    secondaryDark: '#7c3aed',

    success: '#10b981',     
    warning: '#f59e0b',     
    danger: '#ef4444',       
    info: '#3b82f6',        

    background: '#f9fafb', 
    surface: '#ffffff',
    border: '#e5e7eb',
    borderDark: '#d1d5db',

    text: '#111827',
    textSecondary: '#6b7280',
    textLight: '#9ca3af',

    node: {
      input: '#dbeafe',      
      output: '#dcfce7',     
      llm: '#fef3c7',         
      text: '#e9d5ff',        
      filter: '#fce7f3',      
      transformer: '#fed7aa', 
      api: '#cffafe',         
      conditional: '#fecaca', 
      aggregator: '#d1fae5',  
    }
  },

  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  }
};

export const getNodeColor = (nodeType) => {
  const typeMap = {
    customInput: theme.colors.node.input,
    customOutput: theme.colors.node.output,
    llm: theme.colors.node.llm,
    text: theme.colors.node.text,
    filter: theme.colors.node.filter,
    transformer: theme.colors.node.transformer,
    api: theme.colors.node.api,
    conditional: theme.colors.node.conditional,
    aggregator: theme.colors.node.aggregator,
  };
  return typeMap[nodeType] || theme.colors.surface;
};
