import './ui/ui.scss' ;

let colors = [];
document.getElementById('create').onclick = () => {
  const colorsCountElm = document.getElementById('count_colors');
  const countColorsVariantsElm = document.getElementById('count_colors_variants');
  const colorsCount = parseInt((<HTMLInputElement>colorsCountElm).value, 10);
  const countColorsVariants = parseInt((<HTMLInputElement>countColorsVariantsElm).value, 10);
  parent.postMessage({
    pluginMessage: {
      type: 'create',
      info: {
        palette: {
          colors: [...Array(colorsCount).keys()],
          variants: [...Array(countColorsVariants).keys()]
        },
        "font": "normal",
        "buttons": true
      }
    }
  }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({pluginMessage: {type: 'cancel'}}, '*')
}
