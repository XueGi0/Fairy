function showTips(msg, state) {
  let htmlCon = '';
  if (msg != '') {
    if (state == '0') {
      htmlCon = "<section class='tipsBox' style='width: 60%;margin-top:-20%;height: 20%;background: #000;position: absolute;top: 50%;left: 50%;margin-left: -30%;border-radius:.2rem;opacity: .3;color: #fff;font-size: .15rem;text-align: center'><i class='msgIcon sucIcon'></i>" + msg + "</section>";
    } else {
      htmlCon = "<section class='tipsBox' style='width: 60%;margin-top:-20%;height: 20%;background: #000;position: absolute;top: 50%;left: 50%;margin-left: -30%;border-radius:.2rem;opacity: .3;color: #fff;font-size: .15rem;text-align: center'><i class='msgIcon failIcon'></i>" + msg + "</section>";
    }
  }
  $('body').prepend(htmlCon);
  setTimeout(function () {
    $('.tipsBox').remove();
  }, 1500);
}