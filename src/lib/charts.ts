import { CHART_TYPE, ChartOptions, IHeatmapChart, IPieChartOption, Position } from "./types";

function drawPie(options: IPieChartOption): Position {
  let position = options.position;
  let numbers = options.data.map(e => e.value);
  // positionate frame
  const frame = figma.createFrame();
  // frame.fills =  [{type : "" , color : { }}]
  frame.x = position.x;
  frame.y = position.y;
  figma.currentPage.appendChild(frame);
  //
  const width = 100
  const height = 100
  frame.resizeWithoutConstraints(width, height)
  numbers = numbers.map(x => Math.max(0, x))
  const total = numbers.reduce((a, b) => a + b, 0)
  let start = 0;

  for (const num of numbers) {
    const c = Math.sqrt(start / total)
    const ellipse = figma.createEllipse()
    frame.appendChild(ellipse)
    ellipse.resizeWithoutConstraints(width, height)
    ellipse.fills = [{type: 'SOLID', color: {r: c, g: c, b: c}}]
    ellipse.constraints = {horizontal: 'STRETCH', vertical: 'STRETCH'}
    ellipse.arcData = {
      startingAngle: (start / total - 0.25) * 2 * Math.PI,
      endingAngle: ((start + num) / total - 0.25) * 2 * Math.PI,
      innerRadius: 0,
    }
    start += num
  }
  return {x: 0, y: frame.height};
}


function drawHeatmap(options: IHeatmapChart): Position {
  let position = options.position;
  let maxIntensity = Math.max(...options.data.map(e => e[2]))
  let minIntensity = Math.max(...options.data.map(e => e[2]))
  const frame = figma.createFrame();
  frame.x = position.x;
  frame.y = position.y;
  figma.currentPage.appendChild(frame);
  let rect = figma.createRectangle();
  rect.fills = [{
    type: 'GRADIENT_LINEAR',
    gradientStops:
        [{
          color: {r: 0, g: 0, b: 1, a: 1},
          position: 0
        }, {
          color: {r: 1, g: 0, b: 0, a: 1},
          position: 1
        }],
    gradientTransform: [[
      1.0069, 0, 0],
      [1, 1, 1]]
  }]
  frame.appendChild(rect);
  return {x: 0, y: frame.height};
}


export function drawCharts(chartsOptions: Array<ChartOptions>, options?: null): Position {
  let position = {x: 0, y: 0};
  chartsOptions.map(e => {
    if (e.type === CHART_TYPE.PIE) {
      position = drawPie(e);
    }
    if (e.type === CHART_TYPE.HEATMAP) {
      position = drawHeatmap(e);
    }
  })

  return position;
}
