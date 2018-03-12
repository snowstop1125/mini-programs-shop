const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 倒计时 00:00:00格式
const countdown = timeStamp =>{
  var EndTime = timeStamp || [];
  var NowTime = Date.parse(new Date()) / 1000;
  var Lefttime = EndTime - NowTime || [];
  var dateTime = {};

  dateTime.hours = formatNumber(parseInt(Lefttime / 60 / 60, 10));
  dateTime.minutes = formatNumber(parseInt(Lefttime / 60 % 60, 10));
  dateTime.seconds = formatNumber(parseInt(Lefttime % 60, 10));

  if (Lefttime<=0) {
    dateTime.hours = formatNumber(0);
    dateTime.minutes = formatNumber(0);
    dateTime.seconds = formatNumber(0);
  };
  
  return dateTime;
}

function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width;//图片原始宽  
  var originalHeight = e.detail.height;//图片原始高  
  var originalScale = originalHeight / originalWidth;//图片高宽比  
  // console.log('图片原始宽 originalWidth: ' + originalWidth)
  // console.log('图片原始高 originalHeight: ' + originalHeight)
  //获取屏幕宽高  
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = windowHeight / windowWidth;//屏幕高宽比  
      // console.log('屏幕宽度 windowWidth: ' + windowWidth)
      // console.log('屏幕高度 windowHeight: ' + windowHeight)
      if (originalScale < windowscale) {//图片高宽比小于屏幕高宽比  
        //图片缩放后的宽为屏幕宽  
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
      } else {//图片高宽比大于屏幕高宽比  
        //图片缩放后的高为屏幕高  
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
      }

    }
  })
  // console.log('缩放后的图片宽: ' + imageSize.imageWidth)
  // console.log('缩放后的图片高: ' + imageSize.imageHeight)
  
  return imageSize;
}

module.exports = { 
  formatTime: formatTime,
  imageUtil: imageUtil,
  countdown: countdown
}
