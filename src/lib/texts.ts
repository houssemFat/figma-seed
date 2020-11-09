import { Position } from "./types";
import { clone } from "./utils";

const FONT_UBUNTU = {
  family: "Roboto", style: "Regular"
};
const SIZE_H1 = 32
const SIZE_H2 = 24
const SIZE_H3 = 18.72
const SIZE_H4 = 16
const SIZE_H5 = 13.28
const SIZE_H6 = 10.72
/*
H0: 40 pt (45–38pt)
H1: 32 pt (30–34pt)
H2: 26 pt (24–28pt)
H3: 22 pt (20–24pt)
H4: 20 pt (18–22pt)
P1*: 13pt (Minimum size)
P2*: 11pt (Minimum size)*/

// draws a one line of color
// stacked horizontally
export async function drawTexts(position?: Position) {
  await figma.loadFontAsync(FONT_UBUNTU);
  const frame = figma.createFrame();
  // see edit properties from figma design
  const fills = clone(frame.fills)
  fills[0].visible = false
  frame.fills = fills
  let sizes = [SIZE_H1, SIZE_H2, SIZE_H3, SIZE_H4, SIZE_H5, SIZE_H6];
  frame.resizeWithoutConstraints(250, sizes.length * 70);
  let label;
  sizes.forEach((size, index) => {
    console.log('s =>' + size);
    // The label
    label = figma.createText()
    frame.appendChild(label)
    label.x = 0
    label.y = index * 70
    // label.resizeWithoutConstraints(right - left + 100, 50)
    label.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]
    label.characters = "TEST"
    label.fontSize = size
    //label.textAlignHorizontal = 'CENTER'
    //label.textAlignVertical = 'BOTTOM'
    //  label.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
  });

  return {x: 0, y: frame.height};
}
