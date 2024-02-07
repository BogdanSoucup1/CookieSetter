function setCookie(name, value, daysToExpire) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  var cookieString = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; SameSite=None; domain=.example.com;';

  document.cookie = cookieString;
}

// Example usage
setCookie('user_id', '123', 7);