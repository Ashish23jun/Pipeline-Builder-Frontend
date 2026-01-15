import { useState, useEffect, useRef } from 'react';
import { Position, Handle } from 'reactflow';
import { theme } from '../theme';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 250, height: 100 });
  const textareaRef = useRef(null);


  useEffect(() => {


    const variableRegex = /\{\{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\}\}/g;
    const matches = [...text.matchAll(variableRegex)];


    const foundVars = [...new Set(matches.map(match => match[1]))];
    setVariables(foundVars);
  }, [text]);


  useEffect(() => {
    if (textareaRef.current) {

      const lines = text.split('\n');
      const longestLine = Math.max(...lines.map(line => line.length), 20);
      const newWidth = Math.max(250, Math.min(longestLine * 8 + 40, 500));


      const lineCount = lines.length;
      const newHeight = Math.max(100, Math.min(lineCount * 24 + 60, 400));

      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const styles = {
    container: {
      width: dimensions.width,
      height: dimensions.height,
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
    },
    title: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.semibold,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    textarea: {
      flex: 1,
      padding: theme.spacing.sm,
      border: `1px solid ${theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.sm,
      outline: 'none',
      resize: 'none',
      fontFamily: 'monospace',
      transition: `border-color ${theme.transitions.fast}`,
    },
    variablesInfo: {
      fontSize: theme.typography.fontSize.xs,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs,
    },
    variableTag: {
      display: 'inline-block',
      padding: `2px ${theme.spacing.xs}`,
      margin: '2px',
      background: theme.colors.node.text,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.xs,
      fontFamily: 'monospace',
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
    <div style={styles.container}>

      {variables.map((variable, index) => {

        const topPercentage = ((index + 1) / (variables.length + 1)) * 100;

        return (
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              ...styles.handle,
              top: `${topPercentage}%`,
            }}
            title={`Input: ${variable}`}
          />
        );
      })}


      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          ...styles.handle,
          top: '50%',
        }}
      />


      <div style={styles.title}>
        Text
      </div>


      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text... Use {{ variableName }} for dynamic inputs"
        style={styles.textarea}
      />


      {variables.length > 0 && (
        <div style={styles.variablesInfo}>
          Variables:
          {variables.map(v => (
            <span key={v} style={styles.variableTag}>
              {v}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
