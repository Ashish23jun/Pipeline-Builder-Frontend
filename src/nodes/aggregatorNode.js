import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const AggregatorNode = ({ id, data }) => {
  const config = {
    title: 'Aggregator',
    width: 220,
    height: 100,
    fields: [
      {
        type: 'select',
        name: 'aggregationType',
        label: 'Aggregate By',
        defaultValue: 'concat',
        options: [
          { value: 'concat', label: 'Concatenate' },
          { value: 'sum', label: 'Sum' },
          { value: 'average', label: 'Average' },
          { value: 'max', label: 'Maximum' },
          { value: 'min', label: 'Minimum' }
        ]
      },
      {
        type: 'input',
        name: 'separator',
        label: 'Separator',
        defaultValue: ', ',
        placeholder: 'For concat only'
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-input1`,
        style: { top: '25%' }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-input2`,
        style: { top: '50%' }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-input3`,
        style: { top: '75%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-result`,
        style: { top: '50%' }
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
