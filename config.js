/* ============================================================
   CENTRE SETTINGS  -  the only file you need to edit.

   1. In your Google Sheet:  File > Share > Publish to web.
      Choose one tab at a time (Events, Weekly, Changes), pick
      "Comma-separated values (.csv)", press Publish, and copy the link.
   2. Paste each link between the quotes below.
   3. Save (on GitHub: pencil icon > Commit changes).

   Leave all three blank to see the built-in sample schedule.
   ============================================================ */
window.CENTRE_CONFIG = {
  title: "PCS Cedar Tree AAC @ Potong Pasir 108",

  sheets: {
    events:  "",   // link for the Events tab
    weekly:  "",   // link for the Weekly tab
    changes: ""    // link for the Changes tab
  },

  defaultLocation: "Block 108 HDB Potong Pasir",

  // Lines shown at the bottom of the page
  footer: [
    "Closed for Lunch 午餐时间暂停服务: 12:00 pm - 1:00 pm",
    "Information and Referral Support 年长者资讯与转介服务: 1:30 pm - 4:30 pm",
    "Activities may be cancelled if there are other events or workshops 如果有其他活动或工作坊，将取消原定活动",
    "Blk 108 Potong Pasir Avenue 1 #01-488 S350108  |  Tel/WhatsApp: 8061 0527"
  ],

  refreshMinutes: 15,   // how often the page re-reads the Google Sheet
  idleSeconds: 120      // after this long untouched, go back to Today + English (0 = never)
};
