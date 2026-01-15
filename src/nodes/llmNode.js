import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const config = {
    title: 'LLM',
    fields: [
      {
        type: 'text',
        name: 'description',
        label: '',
        defaultValue: 'This is a LLM.'
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-system`,
        style: { top: `${100/3}%` }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-prompt`,
        style: { top: `${200/3}%` }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-response`
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
