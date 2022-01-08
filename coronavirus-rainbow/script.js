replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE && element.textContent.match(/(coronaviruse?s?)/gi)) {
    const newElement = document.createElement('span');
    newElement.innerHTML = element.textContent.replace(/(coronaviruse?s?)/gi, '<span class="rainbow">$1</span>)');
    element.replaceWith(newElement);
  }
}