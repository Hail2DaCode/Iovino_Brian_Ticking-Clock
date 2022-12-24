function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      var h_angle = time * 0.00833333 + 180;
      var h_angle = `${h_angle}deg`;
      console.log(h_angle);
      var hour = document.querySelector('#hour');
      hour.style.transform = `rotate(${h_angle})`;
      var m_angle = time * 0.1 + 180;
      var m_angle = `${m_angle}deg`;
      var min = document.querySelector('#minutes');
      min.style.transform = `rotate(${m_angle})`;
      var s_angle = time * 6 + 180;
      var s_angle = `${s_angle}deg`;
      var sec = document.querySelector('#seconds');
      sec.style.transform = `rotate(${s_angle})`;
  }, 1000);
  