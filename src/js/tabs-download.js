function detectOS() {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Android TV';
  }

  return os;
}

function checkOSRadioInput() {
  const os = detectOS();
  const radioInputs = document.querySelectorAll('input[type="radio"][name="tabs_download"]');

  radioInputs.forEach(function(radioInput) {
    if (radioInput.getAttribute('data-key-name') === os) {
      radioInput.checked = true;
    }
  });
}

// Вызовите эту функцию, когда DOM будет полностью загружен
document.addEventListener('DOMContentLoaded', checkOSRadioInput);
