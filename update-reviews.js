const fs = require("node:fs");
const path = require("node:path");

const dataPath = path.join(__dirname, "..", "data", "reviews.json");
const current = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Replace this function later with Google Business Profile API or a CSV parser.
// For now it keeps the dashboard deployable and marks when GitHub Actions last checked.
function getLatestReviewData(previousData) {
  return {
    ...previousData,
    collectedAt: new Date().toISOString(),
    source: previousData.source || "Manual / Google Business Profile export"
  };
}

const next = getLatestReviewData(current);
fs.writeFileSync(dataPath, `${JSON.stringify(next, null, 2)}\n`);
console.log(`Updated ${dataPath}`);
