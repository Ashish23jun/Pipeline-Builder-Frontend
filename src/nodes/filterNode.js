import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const config = {
    title: 'Filter',
    width: 220,
    height: 100,
    fields: [
      {
        type: 'select',
        name: 'filterType',
        label: 'Filter By',
        defaultValue: 'contains',
        options: [
          { value: 'contains', label: 'Contains' },
          { value: 'equals', label: 'Equals' },
          { value: 'startsWith', label: 'Starts With' },
          { value: 'endsWith', label: 'Ends With' }
        ]
      },
      {
        type: 'input',
        name: 'filterValue',
        label: 'Value',
        defaultValue: '',
        placeholder: 'Enter filter value'
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-data`,
        style: { top: '50%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-passed`,
        style: { top: '33%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-filtered`,
        style: { top: '66%' }
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
