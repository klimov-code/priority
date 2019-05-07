import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IPriority, IMeta, IValueLabel, IStore } from 'Definitions';
import {
  fetchRequest,
  createRequest,
  updateRequest,
  reorderRequest,
  archiveRequest,
  restoreRequest,
} from 'Actions';
import { PriorityView } from 'Views';
import { getActivePriority, getArchivePriority, getActivePriorityList } from 'Selectors';

const Container = styled.div`
  margin: 0 auto;
`;

interface IPriorityContainerProps {
  active: IPriority[];
  archive: IPriority[];
  priorityList: IValueLabel[];
  fetchRequest: () => void;
  createRequest: (priority: IPriority, meta: IMeta) => void;
  updateRequest: (priority: IPriority, meta: IMeta) => void;
  reorderRequest: (priority: {
    startIndex: number;
    endIndex: number;
    parentIndex?: number;
  }) => void;
  archiveRequest: (priority: { id: number }) => void;
  restoreRequest: (priority: { id: number }) => void;
}

class Priority extends React.Component<Partial<IPriorityContainerProps>> {
  public componentDidMount() {
    const { fetchRequest } = this.props;

    fetchRequest();
  }

  public onCreate = (priority: IPriority, meta: IMeta) => {
    const { createRequest } = this.props;

    createRequest({ type: 0, color: '#4a4a4a', ...priority }, meta);
  };

  public onUpdate = (priority: IPriority, meta: IMeta) => {
    const { updateRequest } = this.props;

    updateRequest(priority, meta);
  };

  public onReorder = (startIndex: number, endIndex: number, parentIndex?: number) => {
    const { reorderRequest } = this.props;

    reorderRequest({ startIndex, endIndex, parentIndex });
  };

  public onArchive = (id: number) => {
    const { archiveRequest } = this.props;

    archiveRequest({ id });
  };

  public onRestore = (id: number) => {
    const { restoreRequest } = this.props;

    restoreRequest({ id });
  };

  public render() {
    const { active, archive, priorityList } = this.props;

    return (
      <Container>
        <PriorityView
          active={active}
          archive={archive}
          priorityList={priorityList}
          onCreate={this.onCreate}
          onUpdate={this.onUpdate}
          onReorder={this.onReorder}
          onArchive={this.onArchive}
          onRestore={this.onRestore}
        />
      </Container>
    );
  }
}

const mapStateToProps = (store: IStore) => ({
  active: getActivePriority(store),
  archive: getArchivePriority(store),
  priorityList: getActivePriorityList(store),
});

const mapDispatchToProps = {
  fetchRequest,
  createRequest,
  updateRequest,
  reorderRequest,
  archiveRequest,
  restoreRequest,
};

const PriorityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Priority);

export { Priority, PriorityContainer };
