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
    events:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCwhXW0SWh5NKecxsxXZXvrJVHt-Wcrpc6pH1jRZKkxsvER63Vk_GLc7f2Oj2RHdueJ7La_ukWErBH/pub?gid=1525529322&single=true&output=csv",   // link for the Events tab
    weekly:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCwhXW0SWh5NKecxsxXZXvrJVHt-Wcrpc6pH1jRZKkxsvER63Vk_GLc7f2Oj2RHdueJ7La_ukWErBH/pub?gid=1605969641&single=true&output=csv",   // link for the Weekly tab
    changes: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCwhXW0SWh5NKecxsxXZXvrJVHt-Wcrpc6pH1jRZKkxsvER63Vk_GLc7f2Oj2RHdueJ7La_ukWErBH/pub?gid=890847004&single=true&output=csv"    // link for the Changes tab
  },

  defaultLocation: "Block 108 HDB Potong Pasir",

  // Lines shown at the bottom of the page
  footer: [
    "Closed for Lunch 午餐时间暂停服务: 12:00 pm - 1:00 pm",
    "Information and Referral Support 年长者资讯与转介服务: 1:30 pm - 4:30 pm",
    "Activities may be cancelled if there are other events or workshops 如果有其他活动或工作坊，将取消原定活动",
    "Blk 108 Potong Pasir Avenue 1 #01-488 S350108  |  Tel/WhatsApp: 8061 0527"
  ],

  // The calendar only shows dates from scheduleFrom up to the end of the last month that has a row in
  // the Changes tab (so a month nobody has filled in yet says "Nothing planned yet" instead of showing a
  // wrong timetable). Leave blank for no start limit / automatic end, or type a date like "2026-12-31".
  scheduleFrom:  "2026-10-19",
  scheduleUntil: "",

  refreshMinutes: 15,   // how often the page re-reads the Google Sheet
  idleSeconds: 120      // after this long untouched, go back to Today + English (0 = never)
};
