function setCookie(name, value, daysToExpire) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  var cookieString = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; samesite=lax; domain=bogdansoucup1.github.io;';

  document.cookie = cookieString;
}

// Example usage
setCookie('user_id', '123', 7);