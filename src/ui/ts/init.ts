// main action
import { handlePalette } from "./colors";
import { handleButtons } from "./buttons";
import { handleTexts } from "./texts";

document.getElementById('create').onclick = () => {
  parent.postMessage({
    pluginMessage: {
      type: 'create',
      info: {
        ...handlePalette(),
        ...handleButtons(),
        ...handleTexts()
      }
    }
  }, '*')
}
// cancel
document.getElementById('cancel').onclick = () => {
  parent.postMessage({pluginMessage: {type: 'cancel'}}, '*')
}

let allTabsContents = document.querySelectorAll('.tab-content');
let allTabsButtons = document.querySelectorAll('ul.tabs li');

const CLASS_HIDDEN = 'hidden';
const CLASS_ACTIVE = 'active';

function hideAllTabsContents() {
  allTabsContents.forEach(e => {
    e.classList.add(CLASS_HIDDEN)
  });
}

function deactivateAllTabsButtons() {
  allTabsButtons.forEach(e => {
    e.classList.remove(CLASS_ACTIVE)
  });
}

function activateTab(event: Event) {
  let el = <HTMLElement>event.currentTarget;
  let tabId = el.dataset.tab;
  hideAllTabsContents();
  deactivateAllTabsButtons();
  document.querySelector('#' + tabId).classList.remove('hidden');
  el.classList.add(CLASS_ACTIVE);
}

export function initPlugin() {
  allTabsButtons.forEach(e => {
    e.addEventListener('click', activateTab);
  })
}
