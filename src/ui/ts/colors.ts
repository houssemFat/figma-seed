// functions to handle palette config
export function handlePalette() {
  const colorsCountElm = document.getElementById('count_colors');
  const countColorsVariantsElm = document.getElementById('count_colors_variants');
  const colorsCount = parseInt((<HTMLInputElement>colorsCountElm).value, 10);
  const countColorsVariants = parseInt((<HTMLInputElement>countColorsVariantsElm).value, 10);
  return {
    palette: {
      colors: [...Array(colorsCount).keys()],
      variants: [...Array(countColorsVariants).keys()]
    },
  }
}
