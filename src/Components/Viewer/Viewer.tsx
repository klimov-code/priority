import React from 'react';

import { TYPE } from 'Constants';
import { IPriority } from 'Definitions';
import { MenuBox } from 'Components/MenuBox';
import { Container as ColorContainer, Circle } from 'Components/ColorPicker';
import { Text, TextBold } from 'Components/styled';

import { Container, Tooltip } from './styled';

interface IViewerProps {
  setIsEdit: (isEdit: boolean) => void;
  onArchive: (id: number) => void;
  onRestore: (id: number) => void;
  parentPriority: IPriority;
}

const Viewer: React.FC<Partial<IViewerProps> & IPriority> = ({
  id,
  name,
  color,
  type,
  isSubpriority,
  isArchived,
  parentPriority,
  setIsEdit,
  onArchive,
  onRestore,
}) => (
  <Container>
    {isArchived && isSubpriority && (
      <TextBold style={{ color: parentPriority.color }}>{parentPriority.name}</TextBold>
    )}
    <TextBold style={{ color }}>{name}</TextBold>

    <Text>{TYPE[type] || 'Unknowned'}</Text>

    <ColorContainer isActive={false}>
      <Circle style={{ background: color }} />
    </ColorContainer>

    <Tooltip
      interactive={true}
      placement={'bottom-end'}
      trigger={'click'}
      hideOnClick={true}
      content={
        <MenuBox
          items={[
            ...(!isArchived ? [{ name: 'Edit', onClick: () => setIsEdit(true) }] : []),
            ,
            {
              name: !isArchived ? 'Archive' : 'Restore',
              onClick: !isArchived ? () => onArchive(id) : () => onRestore(id),
            },
          ]}
        />
      }
    >
      <div>{'action'}</div>
    </Tooltip>
  </Container>
);

export { Viewer };
