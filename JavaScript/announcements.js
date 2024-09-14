fetch('../data/announcements.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('网络错误');
    }
    return response.json();
  })
  .then(data => {
    const announcementsDiv = document.getElementById('announcements');
    data.announcements.forEach(announcement => {
      const announcementDiv = document.createElement('div');
      announcementDiv.classList.add('announcement');
      announcementDiv.innerHTML = `${announcement.content}`;
      announcementsDiv.appendChild(announcementDiv);
      console.log(announcement);//调试使用
    });
  })
  .catch(error => {
    console.error('读取公告时出错:', error);
    document.innerHTML('读取公告时出错:', error);
  });