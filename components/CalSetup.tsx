"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalSetup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {
        styles: { branding: { brandColor: "#10b981" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);
  
  return null;
}
