interface IPriority {
  id?: number;
  name: string;
  color: string;
  parentId: number;
  type: number;
  order?: number;
  isSubpriority?: boolean;
  isArchived?: boolean;
  subpriorities?: IPriority[];
}

export { IPriority };
