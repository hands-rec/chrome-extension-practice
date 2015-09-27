var options = {
  type: "basic",
  title: "notification type basic",
  message: "notification type basic",
  iconUrl: "cafe.jpg"
};

chrome.notifications.create(
    '1', 
    options
    );
