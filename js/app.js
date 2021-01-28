function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const scrollEventFunc = (evt) => {
  if (window.scrollY >= 100) {
    document.body.classList.add("body--stickly")
  } else {
    document.body.classList.remove("body--stickly")
  }
}

document.addEventListener("scroll", debounce(scrollEventFunc, 200))