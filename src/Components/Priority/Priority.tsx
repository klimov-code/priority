import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { IPriority, IValueLabel, IMeta } from '~/Definitions';

import { Row } from './Row';

interface IPriorityProps {
  priority: IPriority;
  priorityList: IValueLabel[];
  onUpdate: (priority: IPriority, meta: IMeta) => void;
  onArchive: (id: number) => void;
}

const Priority: React.FC<IPriorityProps> = ({ priority, priorityList, onUpdate, onArchive }) => (
  <>
    <Row
      key={priority.id}
      priority={priority}
      priorityList={priorityList}
      onUpdate={onUpdate}
      onArchive={onArchive}
    />
    {priority.subpriorities && (
      <Droppable droppableId={`subpriorities ${priority.id}`} type={`SUBPRIORITY ${priority.id}`}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {priority.subpriorities.map((subpriority, subIndex) => (
              <Draggable
                key={subpriority.id}
                draggableId={`subpriority ${subpriority.id}`}
                index={subIndex}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Row
                      key={subpriority.id}
                      priority={subpriority}
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
    )}
  </>
);

export { Priority };
