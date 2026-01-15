import { DraggableNode } from './draggableNode';
import { theme } from './theme';

export const PipelineToolbar = () => {
    const styles = {
        container: {
            padding: theme.spacing.lg,
            background: theme.colors.surface,
            borderBottom: `2px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.sm,
        },
        header: {
            marginBottom: theme.spacing.md,
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.text,
            fontFamily: theme.typography.fontFamily,
        },
        section: {
            marginBottom: theme.spacing.md,
        },
        sectionTitle: {
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.textSecondary,
            marginBottom: theme.spacing.sm,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontFamily: theme.typography.fontFamily,
        },
        nodesContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: theme.spacing.sm,
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                Pipeline Builder
            </div>

            <div style={styles.section}>
                <div style={styles.sectionTitle}>Basic Nodes</div>
                <div style={styles.nodesContainer}>
                    <DraggableNode type='customInput' label='Input' />
                    <DraggableNode type='llm' label='LLM' />
                    <DraggableNode type='customOutput' label='Output' />
                    <DraggableNode type='text' label='Text' />
                </div>
            </div>

            <div style={styles.section}>
                <div style={styles.sectionTitle}>Advanced Nodes</div>
                <div style={styles.nodesContainer}>
                    <DraggableNode type='filter' label='Filter' />
                    <DraggableNode type='transformer' label='Transformer' />
                    <DraggableNode type='api' label='API Call' />
                    <DraggableNode type='conditional' label='Conditional' />
                    <DraggableNode type='aggregator' label='Aggregator' />
                </div>
            </div>
        </div>
    );
};
