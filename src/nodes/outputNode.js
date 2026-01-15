import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const config = {
    title: 'Output',
    fields: [
      {
        type: 'input',
        name: 'outputName',
        label: 'Name',
        defaultValue: id.replace('customOutput-', 'output_')
      },
      {
        type: 'select',
        name: 'outputType',
        label: 'Type',
        defaultValue: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'Image', label: 'Image' }
        ]
      }
    ],
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-value`
      }
    ]
  };

  return <BaseNode id={id} data={data} config={config} />;
};
