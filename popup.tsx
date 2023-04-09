import { useEffect, useState } from "react";
import { Button, Modal } from "@mantine/core";
import { useSavedPages } from "./src/hooks/useSavedPages";
import { PageList } from "./src/components/PageList";

function IndexPopup() {
  const [opened, setOpened] = useState(false);
  const { savedPages, savePageInfo } = useSavedPages();

  useEffect(() => {
  const handleMessage = (request, sender, sendResponse) => {
    if (request.action === "savePageInfo") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        const pageInfo = {
          title: tab.title,
          url: tab.url,
          favicon: tab.favIconUrl,
          timestamp: new Date().toISOString(),
        };

        savePageInfo(pageInfo);
      });
    }
  };

  chrome.runtime.onMessage.addListener(handleMessage);

  return () => {
    chrome.runtime.onMessage.removeListener(handleMessage);
  };
}, [savePageInfo]);


  return (
    <>
      <Button onClick={savePageInfo}>Save</Button>
      <Modal
        title="Save Successed"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <div style={{ padding: 20 }}>
          <p>Save Successed</p>
          <Button onClick={() => setOpened(false)}>Close</Button>
        </div>
      </Modal>
      <PageList pages={savedPages} />
    </>
  );
}

export default IndexPopup;
