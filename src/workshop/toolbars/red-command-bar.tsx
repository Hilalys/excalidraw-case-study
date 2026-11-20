import type { ToolbarMeta, ToolbarProps } from "../types";

import "./red-command-bar.css";

export const meta: ToolbarMeta = {
  name: "Red Command Bar",
  idea: "A bright red toolbar with a dedicated readout for the current tool.",
};

export default function RedCommandBar({ tools, renderDefault }: ToolbarProps) {
  const active = tools.find((tool) => tool.active);

  return (
    <div className="toolbar-red-command-bar">
      {renderDefault()}
      <div className="red-command-mode" role="status" aria-atomic="true">
        {active && <span aria-hidden="true">{active.icon}</span>}
        <div>
          <div className="red-command-mode-label">Active tool</div>
          <div>{active?.label ?? "Custom tool"}</div>
        </div>
      </div>
    </div>
  );
}
