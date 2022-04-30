chrome.downloads.onChanged.addListener(delta => {
  if (delta != null && delta.state != null && delta.state.current === 'complete') {
    setTimeout(() => {
      chrome.downloads.erase({
        state: 'complete'
      });
    }, 5000);
  }
});
