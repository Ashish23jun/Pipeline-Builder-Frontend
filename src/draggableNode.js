import { theme, getNodeColor } from './theme';

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const nodeColor = getNodeColor(type);

    const styles = {
      node: {
        cursor: 'grab',
        minWidth: '100px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.borderRadius.md,
        backgroundColor: nodeColor,
        justifyContent: 'center',
        flexDirection: 'column',
        border: `2px solid ${theme.colors.border}`,
        boxShadow: theme.shadows.sm,
        transition: `all ${theme.transitions.fast}`,
        fontFamily: theme.typography.fontFamily,
        padding: theme.spacing.sm,
      },
      label: {
        color: theme.colors.text,
        fontSize: theme.typography.fontSize.sm,
        fontWeight: theme.typography.fontWeight.medium,
        textAlign: 'center',
        userSelect: 'none',
      }
    };

    const handleMouseEnter = (e) => {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = theme.shadows.md;
      e.target.style.borderColor = theme.colors.primary;
    };

    const handleMouseLeave = (e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = theme.shadows.sm;
      e.target.style.borderColor = theme.colors.border;
    };

    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles.node}
        draggable
      >
          <span style={styles.label}>{label}</span>
      </div>
    );
  };
  