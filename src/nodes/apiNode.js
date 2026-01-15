


import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const config = {
    title: 'API Call',
    width: 240,
    height: 120,
    fields: [
      {
        type: 'select',
        name: 'method',
        label: 'Method',
        defaultValue: 'GET',
        options: [
          { value: 'GET', label: 'GET' },
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
          { value: 'DELETE', label: 'DELETE' }
        ]
      },
      {
        type: 'input',
        name: 'url',
        label: 'URL',
        defaultValue: 'https://api.example.com',
        placeholder: 'Enter API endpoint'
      },
      {
        type: 'number',
        name: 'timeout',
        label: 'Timeout (ms)',
        defaultValue: 5000
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-params`,
        style: { top: '33%' }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-body`,
        style: { top: '66%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-response`,
        style: { top: '33%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-error`,
        style: { top: '66%' }
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
