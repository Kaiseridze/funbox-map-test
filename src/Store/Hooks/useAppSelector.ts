import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
