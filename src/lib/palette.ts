import { PaletteColorLineOptions, PaletteLinesResult, PaletteOptions } from "./types";

const DEFAULT_ELEMENT_HEIGHT = 120;

// draws a one line of color
// stacked horizontally
function drawPaletteColorLine(option: PaletteColorLineOptions) {
  let lines = [];
  for (let i = 0; i < option.variants.length; i++) {
    const rect = figma.createRectangle();
    rect.cornerRadius = 3;
    rect.y = option.positionY || 0;
    rect.x = i * 150;
    // TODO ADD COLORS
    rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
    lines.push(rect);
  }
  return lines;
}

// draw all rectangles
export function drawPalette(palette: PaletteOptions): PaletteLinesResult {
  let elements = [];
  for (let i = 0; i < palette.colors.length; i++) {
    drawPaletteColorLine({
      color: palette.colors[i],
      positionY: i * DEFAULT_ELEMENT_HEIGHT,
      variants: palette.variants
    }).map(e => {
      elements.push(e)
    })
  }
  return {
    elements: elements,
    positionY: palette.colors.length * DEFAULT_ELEMENT_HEIGHT
  };
}
