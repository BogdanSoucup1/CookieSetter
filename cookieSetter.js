function setCookie(name, value, daysToExpire) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  var cookieString = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; samesite=none; domain=bogdansoucup1.github.io; secure:true;';

  document.cookie = cookieString;
}

// Example usage
setCookie('user_id', '123', 7);