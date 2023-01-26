import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "@hello-pangea/dnd";


export interface ISidebarItem {
  title: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
  reference: React.Ref<HTMLLIElement>;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
}
