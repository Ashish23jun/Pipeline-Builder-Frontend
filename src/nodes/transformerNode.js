import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformerNode = ({ id, data }) => {
  const config = {
    title: 'Transformer',
    width: 250,
    height: 120,
    fields: [
      {
        type: 'textarea',
        name: 'transformLogic',
        label: 'Transform Logic',
        defaultValue: '// Write transformation code here',
        placeholder: 'Enter JavaScript transformation',
        rows: 3
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-input`,
        style: { top: '50%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-output`,
        style: { top: '50%' }
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
