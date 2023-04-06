import { useState } from "react";
import { Button, Modal } from "@mantine/core";

function IndexPopup() {
  const [opened, setOpened] = useState(false);

  const savePageInfo = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const pageInfo = {
        title: tab.title,
        url: tab.url,
        favicon: tab.favIconUrl,
        timestamp: new Date().toISOString(),
      };

      const savedPages = JSON.parse(localStorage.getItem("savedPages") || "[]");
      savedPages.push(pageInfo);
      localStorage.setItem("savedPages", JSON.stringify(savedPages));

      setOpened(true);
    });
  };

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
    </>
  );
}

export default IndexPopup;
