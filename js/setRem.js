//rem适配
function setRem() {
  // 获取屏幕的宽
  var clientWidth = document.clientWidth || document.body.clientWidth;
  // 设置屏幕宽度在小于1024大于1920时保持不变
  clientWidth = clientWidth > 1920 ? 1920 : clientWidth;
  clientWidth = clientWidth < 1024 ? 1024 : clientWidth;
  var html = document.getElementsByTagName('html')[0];
  html.style.fontSize = (clientWidth / 24) + 'px';

};
window.onload = setRem;
window.onresize = setRem;