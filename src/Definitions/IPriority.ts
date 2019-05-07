interface IPriority {
  id?: number;
  name: string;
  color: string;
  parentId: number;
  type: number;
  order?: number;
  isSubPriority?: boolean;
  isArchived?: boolean;
  subpriorities?: IPriority[];
}

export { IPriority };
