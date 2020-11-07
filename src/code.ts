// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
import { drawPalette } from "./lib/palette";
import { drawButtons } from "./lib/buttons";
import { drawCharts } from "./lib/charts";
import { CHART_TYPE } from "./lib/types"


figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create') {
    const nodes: SceneNode[] = [];
    let info = msg.info;
    // palette
    let palette = drawPalette(info.palette);
    palette.elements.map((el) => {
      figma.currentPage.appendChild(el);
      nodes.push(el);
    })
    // move to another bloc
    let position = drawCharts([
      {
        type: CHART_TYPE.PIE,
        position: {
          y: palette.positionY,
          x: 0
        },
        data: [
          {
            label: 'red',
            value: 20
          },
          {
            label: 'green',
            value: 50
          },
          {
            label: 'green',
            value: 50
          }
        ]
      },
      {
        type: CHART_TYPE.HEATMAP,
        position: {
          y: palette.positionY + 100,
          x: 0
        },
        data: [
          [0, 1, 34],
          [0, 2, 14],
          [0, 3, 14],
          [0, 4, 14],
          [0, 5, 44]
        ]
      }
    ])
    // buttons
    if (info.buttons) {
      drawButtons(info.buttons)
    }
    // inputs


    // inputs

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
