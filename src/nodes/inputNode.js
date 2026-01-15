import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const config = {
    title: 'Input',
    fields: [
      {
        type: 'input',
        name: 'inputName',
        label: 'Name',
        defaultValue: id.replace('customInput-', 'input_')
      },
      {
        type: 'select',
        name: 'inputType',
        label: 'Type',
        defaultValue: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' }
        ]
      }
    ],
    handles: [
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-value`
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
