import { theme } from './theme';
import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        try {

            const response = await fetch('https://backend-d09660jjb-ashish23juns-projects.vercel.app/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes: nodes,
                    edges: edges
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();


            const isDagText = data.is_dag ? 'Yes ✓' : 'No ✗';
            const isDagEmoji = data.is_dag ? '✅' : '❌';

            const message = `
Pipeline Analysis Complete ${isDagEmoji}

📊 Number of Nodes: ${data.num_nodes}
🔗 Number of Edges: ${data.num_edges}
🔄 Is Valid DAG: ${isDagText}

${data.is_dag
                    ? '✅ Your pipeline is valid! It contains no circular dependencies.'
                    : '⚠️ Warning: Your pipeline contains circular dependencies and is not a valid DAG.'}
            `.trim();

            alert(message);

        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert(`❌ Error: Could not connect to backend.\n\nError: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing.lg,
            background: theme.colors.surface,
            borderTop: `2px solid ${theme.colors.border}`,
            boxShadow: theme.shadows.sm,
        },
        button: {
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,
            fontSize: theme.typography.fontSize.base,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.surface,
            background: isLoading
                ? theme.colors.textSecondary
                : `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
            border: 'none',
            borderRadius: theme.borderRadius.md,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            boxShadow: theme.shadows.md,
            transition: `all ${theme.transitions.normal}`,
            fontFamily: theme.typography.fontFamily,
            minWidth: '150px',
            opacity: isLoading ? 0.7 : 1,
        }
    };

    const handleMouseEnter = (e) => {
        if (!isLoading) {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = theme.shadows.lg;
        }
    };

    const handleMouseLeave = (e) => {
        if (!isLoading) {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = theme.shadows.md;
        }
    };

    return (
        <div style={styles.container}>
            <button
                type="submit"
                style={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleSubmit}
                disabled={isLoading}
            >
                {isLoading ? 'Analyzing...' : 'Submit Pipeline'}
            </button>
        </div>
    );
}
