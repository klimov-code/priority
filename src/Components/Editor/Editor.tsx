import React, { useState } from 'react';
import Select from 'react-select';

import { TYPE_LIST } from '~/Constants';
import { IPriority, IMeta, IValueLabel } from '~/Definitions';
import { ColorPicker } from '~/Components/ColorPicker';
import { Button } from '~/Components/Button';
import { Input } from '~/Components/Input';

import { Container, Top, Bottom } from './styled';

interface IEditor {
  editorType: 'update' | 'create';
  setIsEdit: (isEdit: boolean) => void;
  onCreate: (priority: IPriority, meta: IMeta) => void;
  onUpdate: (priority: IPriority, meta: IMeta) => void;
  priorityList: IValueLabel[];
}

const Editor: React.FC<Partial<IEditor & IPriority>> = props => {
  const [name, setName] = useState(props.name);
  const [color, setColor] = useState(props.color || '#4a4a4a');
  const [type, setType] = useState(props.type);
  const [isSubPriority, setIsSubPriority] = useState(props.isSubPriority);
  const [parentId, setParentId] = useState(props.parentId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onApply = () => {
    const { id, order, editorType, setIsEdit, onCreate, onUpdate } = props;

    if (editorType === 'create') {
      onCreate({ name, color, type, isSubPriority, parentId }, { setIsEdit, setIsSubmitting });

      return;
    }

    onUpdate(
      { id, order, name, color, type, isSubPriority, parentId },
      { setIsEdit, setIsSubmitting }
    );
  };

  return (
    <Container>
      <Top>
        <Input
          placeholder={'Name'}
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        {!isSubPriority || !parentId ? (
          <Select
            value={TYPE_LIST.find(({ value }) => value === type)}
            options={TYPE_LIST}
            placeholder={'Select status type'}
            onChange={(selected: IValueLabel) => setType(selected.value)}
          />
        ) : (
          <div style={{ width: 279 }} />
        )}
        {props.editorType === 'create' ? (
          <Select
            style={{
              whiteSpace: 'nowrap',
            }}
            value={props.priorityList.find(({ value }) => value === parentId)}
            options={props.priorityList}
            placeholder={'Make sub'}
            isSearchable={true}
            maxHeight={window.innerHeight - 200}
            onChange={(selected: IValueLabel) => {
              setParentId(selected.value);
              setIsSubPriority(true);
            }}
          />
        ) : (
          <div style={{ width: 255 }} />
        )}
        <ColorPicker activeColor={color} onChange={value => setColor(value)} />
      </Top>
      <Bottom>
        <Button onClick={onApply} disabled={isSubmitting}>
          {props.editorType === 'update' ? 'Append' : 'Create'}
        </Button>
        <Button onClick={() => props.setIsEdit(false)} disabled={isSubmitting}>
          {'Cancel'}
        </Button>
      </Bottom>
    </Container>
  );
};

export { Editor };
