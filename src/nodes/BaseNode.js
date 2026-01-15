import { Handle } from 'reactflow';
import { useState } from 'react';
import { theme } from '../theme';


export const BaseNode = ({ id, data, config }) => {
  const {
    title,
    fields = [],
    handles = [],
    width = 200,
    height = 80,
    style = {},
  } = config;


  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    fields.forEach(field => {
      initialState[field.name] = data?.[field.name] || field.defaultValue || '';
    });
    return initialState;
  });


  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };


  const renderField = (field) => {
    const { type, name, label, options, placeholder, rows } = field;
    const value = fieldValues[name];

    const inputStyle = {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.xs,
      outline: 'none',
      transition: `border-color ${theme.transitions.fast}`,
      width: '100%',
      boxSizing: 'border-box',
    };

    switch (type) {
      case 'input':
      case 'text':
        return (
          <>
            {label && <span>{label}:</span>}
            <input
              type="text"
              value={value}
              onChange={(e) => handleFieldChange(name, e.target.value)}
              placeholder={placeholder}
              style={inputStyle}
            />
          </>
        );

      case 'textarea':
        return (
          <>
            {label && <span>{label}:</span>}
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(name, e.target.value)}
              placeholder={placeholder}
              rows={rows || 3}
              style={{
                ...inputStyle,
                fontFamily: 'monospace',
                resize: 'vertical',
              }}
            />
          </>
        );

      case 'select':
        return (
          <>
            {label && <span>{label}:</span>}
            <select
              value={value}
              onChange={(e) => handleFieldChange(name, e.target.value)}
              style={{
                ...inputStyle,
                cursor: 'pointer',
              }}
            >
              {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </>
        );

      case 'number':
        return (
          <>
            {label && <span>{label}:</span>}
            <input
              type="number"
              value={value}
              onChange={(e) => handleFieldChange(name, parseFloat(e.target.value))}
              placeholder={placeholder}
              style={inputStyle}
            />
          </>
        );

      default:
        return null;
    }
  };

  const baseStyles = {
    container: {
      width,
      height,
      background: theme.colors.surface,
      border: `2px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.md,
      boxShadow: theme.shadows.md,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.sm,
      fontFamily: theme.typography.fontFamily,
      transition: `all ${theme.transitions.normal}`,
      ...style
    },
    title: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.semibold,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    fieldsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.sm,
      fontSize: theme.typography.fontSize.xs,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      color: theme.colors.textSecondary,
      fontSize: theme.typography.fontSize.xs,
    },
    input: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.xs,
      outline: 'none',
      transition: `border-color ${theme.transitions.fast}`,
    },
    select: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.xs,
      outline: 'none',
      cursor: 'pointer',
      transition: `border-color ${theme.transitions.fast}`,
    },
    textarea: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.xs,
      outline: 'none',
      resize: 'vertical',
      fontFamily: 'monospace',
      transition: `border-color ${theme.transitions.fast}`,
    },
    handle: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: `2px solid ${theme.colors.primary}`,
      background: theme.colors.surface,
      transition: `all ${theme.transitions.fast}`,
    }
  };

  return (
    <div style={baseStyles.container}>

      {handles.map((handle, index) => (
        <Handle
          key={`${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id || `${id}-${handle.type}-${index}`}
          style={{
            ...baseStyles.handle,
            ...handle.style
          }}
        />
      ))}


      <div style={baseStyles.title}>
        {title}
      </div>


      <div style={baseStyles.fieldsContainer}>
        {fields.map(field => (
          <div key={field.name} style={baseStyles.label}>
            {renderField(field)}
          </div>
        ))}
      </div>
    </div>
  );
};
