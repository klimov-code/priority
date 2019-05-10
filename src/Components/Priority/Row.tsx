import React, { useState } from 'react';

import { IPriority, IMeta, IValueLabel } from '~/Definitions';
import { Editor } from '~/Components/Editor';
import { Viewer } from '~/Components/Viewer';

interface IRow {
  priority: IPriority;
  priorityList: IValueLabel[];
  onCreate?: (priority: IPriority, meta: IMeta) => void;
  onUpdate?: (priority: IPriority, meta: IMeta) => void;
  onArchive: (id: number) => void;
}

const Row: React.FC<IRow> = ({ priority, priorityList, onCreate, onUpdate, onArchive }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <Editor
          editorType={'update'}
          {...priority}
          priorityList={priorityList}
          setIsEdit={setIsEdit}
          onCreate={onCreate}
          onUpdate={onUpdate}
        />
      ) : (
        <Viewer {...priority} setIsEdit={setIsEdit} onArchive={onArchive} />
      )}
    </>
  );
};

export { Row };
