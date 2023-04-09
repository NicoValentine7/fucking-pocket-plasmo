// useSavedPages.ts
import { useEffect, useState } from "react";

export function useSavedPages() {
  const [savedPages, setSavedPages] = useState([]);

  useEffect(() => {
  chrome.storage.sync.get("savedPages", (data) => {
    const storedPages = JSON.parse(data.savedPages || "[]");
    setSavedPages(storedPages);
  });
}, []);


const savePageInfo = (pageInfo) => {
  const updatedSavedPages = [...savedPages, pageInfo];
  setSavedPages(updatedSavedPages);
  chrome.storage.sync.set({ savedPages: JSON.stringify(updatedSavedPages) });
};


  return { savedPages, savePageInfo };
}
