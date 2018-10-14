const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  let index = 0

  document.body.addEventListener('keydown', konamiDetector )

  function konamiDetector(e) {
    //console.log('detail: ' + e.detail)
    //console.log('which: ' + e.which)
    //console.log('key: ' + e.key )
    //console.log('location: ' + e.location)

    const key = parseInt(e.detail || e.which)

    if ( key === code[index] ) {
      index++;

      if (index === code.length) {
        alert('KONAMI!');

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
