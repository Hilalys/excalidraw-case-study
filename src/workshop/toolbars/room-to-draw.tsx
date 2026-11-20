import type { ToolbarMeta, ToolbarProps } from "../types";

import "./room-to-draw.css";

export const meta: ToolbarMeta = {
  name: "Room to Draw",
  idea: "More space between larger targets, in the same familiar toolbar.",
};

export default function RoomToDrawToolbar({ renderDefault }: ToolbarProps) {
  return <div className="toolbar-room-to-draw">{renderDefault()}</div>;
}
