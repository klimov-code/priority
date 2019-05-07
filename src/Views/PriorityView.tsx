import React, { useState } from 'react';
import { DragDropContext, DropResult, Draggable, Droppable } from 'react-beautiful-dnd';

import { IPriority, IMeta, IValueLabel } from 'Definitions';
import { Header, Priority, Editor, Viewer } from 'Components';

import { Container, ArchiveButton, CreateButton, Text } from './styled';

interface IView {
  active: IPriority[];
  archive: IPriority[];
  priorityList: IValueLabel[];
  onCreate: (priority: IPriority, meta: IMeta) => void;
  onUpdate: (priority: IPriority, meta: IMeta) => void;
  onReorder: (startIndex: number, endIndex: number, parentIndex?: number) => void;
  onArchive: (id: number) => void;
  onRestore: (id: number) => void;
}

const PriorityView: React.FC<IView> = ({
  active,
  archive,
  priorityList,
  onCreate,
  onUpdate,
  onReorder,
  onArchive,
  onRestore,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [toggleArchive, setToggleArchive] = useState(false);

  const onDragEnd = ({ source, destination, type }: DropResult) => {
    if (!destination) {
      return;
    }

    if (source.index === destination.index || source.droppableId !== destination.droppableId) {
      return;
    }

    if (type === 'PRIORITY') {
      const startIndex = source.index;
      const endIndex = destination.index;

      onReorder(startIndex, endIndex);
    }

    if (type.includes('SUBPRIORITY')) {
      const [_, id] = source.droppableId.split(' ');
      const parentId = parseInt(id, 10);
      const parentIndex = active.findIndex(priority => parentId === priority.id);

      const startIndex = source.index;
      const endIndex = destination.index;

      onReorder(startIndex, endIndex, parentIndex);
    }

    return;
  };

  return (
    <Container>
      <CreateButton onClick={() => setIsEdit(true)}>{'Create'}</CreateButton>

      <Header />
      {isEdit && (
        <Editor
          setIsEdit={setIsEdit}
          onCreate={onCreate}
          editorType={'create'}
          priorityList={priorityList}
        />
      )}
      {active && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={'priorities'} type={'PRIORITY'}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {active.map((priority, index) => (
                  <Draggable
                    key={priority.id}
                    draggableId={`priority ${priority.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Priority
                          priority={priority}
                          priorityList={priorityList}
                          onUpdate={onUpdate}
                          onArchive={onArchive}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {archive && (
        <ArchiveButton onClick={() => setToggleArchive(!toggleArchive)}>
          <Text>{toggleArchive ? 'Hide archive' : 'Show archive'}</Text>
        </ArchiveButton>
      )}

      {toggleArchive && archive && (
        <>
          {archive.map(priority => {
            const parentId = priority.parentId;

            let parentPriority: IPriority;
            if (parentId) {
              parentPriority =
                archive.find(priority => priority.id === parentId) ||
                active.find(priority => priority.id === parentId);
            }

            return (
              <Viewer
                key={priority.id}
                {...priority}
                parentPriority={parentPriority}
                onRestore={onRestore}
              />
            );
          })}
        </>
      )}
    </Container>
  );
};

export { PriorityView };
