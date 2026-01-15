import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const config = {
    title: 'Conditional',
    width: 220,
    height: 100,
    fields: [
      {
        type: 'select',
        name: 'operator',
        label: 'Condition',
        defaultValue: 'equals',
        options: [
          { value: 'equals', label: '==' },
          { value: 'notEquals', label: '!=' },
          { value: 'greaterThan', label: '>' },
          { value: 'lessThan', label: '<' },
          { value: 'contains', label: 'Contains' }
        ]
      },
      {
        type: 'input',
        name: 'compareValue',
        label: 'Compare To',
        defaultValue: '',
        placeholder: 'Enter comparison value'
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
        id: `${id}-true`,
        style: { top: '33%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-false`,
        style: { top: '66%' }
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
