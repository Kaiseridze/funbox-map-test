import { MapEvent } from "yandex-maps";

export interface IInteractiveMap {
  defaultCenter: number[];
  handleMapMove: (e: MapEvent) => void;
}
