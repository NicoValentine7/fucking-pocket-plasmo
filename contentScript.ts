// ポップアップが押下された時、現在のタブの情報を取得して保存する
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'save') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        chrome.storage.sync.set({ tab }, () => {
            sendResponse({ tab });
        });
        });
        return true;
    }
    });