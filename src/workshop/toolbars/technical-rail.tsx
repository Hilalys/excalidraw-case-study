import "./technical-rail.css";

import type { ToolbarMeta, ToolbarProps } from "../types";

export const meta: ToolbarMeta = {
  name: "Technical Rail",
  idea: "A compact instrument rail with labeled tool groups and visible shortcut keycaps.",
};

export default function TechnicalRail({ renderDefault }: ToolbarProps) {
  // Keep the native drag-to-draw, tablet popovers, and More tools menu intact.
  return <div className="toolbar-technical-rail">{renderDefault()}</div>;
}
