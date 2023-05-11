function copy(element = 'body', type = 'node', copyright = '') {
  switch (type) {
    case "node":
      window.getSelection().removeAllRanges();
      let range = document.createRange();

      range.selectNode(
        typeof element === 'string' ? 
        document.querySelector(element) : 
        element
      )
      window.getSelection().addRange(range)
      document.execCommand('copy')
      window.getSelection().removeAllRanges();

      return true;
    case 'text':
      navigator.clipboard.writeText(element + copyright)
      return true
    default: 
      return false
  }
}