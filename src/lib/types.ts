export enum CHART_TYPE {
  PIE = 'PIE',
  LINE = 'LINE',
  HEATMAP = 'HEATMAP'
}

export interface Position {
  x: number
  y: number
}

export interface ChartOptions {
  position: { x: number, y: number }
  type: CHART_TYPE
  data: any
  title?: string
}

export interface IPieChartOption extends ChartOptions {
  data: Array<{
    label: string
    value: number
  }>
}

export interface IHeatmapChart extends ChartOptions {
  data: Array<[number, number, number]>
}

// Buttons
export interface ButtonsOptions {
  buttons?: Array<string>
  variants?: number
}


export interface PaletteOptions {
  colors?: Array<string>
  variants?: Array<string>,
  startPositionX?: number
  startPositionY?: number
}

export interface PaletteColorLineOptions {
  color: string
  positionY: number
  variants?: Array<string>
}

export interface PaletteLinesResult {
  elements: Array<RectangleNode | EllipseNode>
  positionY: number
}
