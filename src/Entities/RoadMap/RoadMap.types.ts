import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "@hello-pangea/dnd";


export interface IRoadMap {
  title: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  reference: React.Ref<HTMLLIElement>;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}
