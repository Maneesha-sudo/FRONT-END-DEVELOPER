// read.js
const fs = require("fs");
const path = require("path");

// Function to read Data.txt
function readDataFile() {
  const filePath = path.join(__dirname, "Data.txt");

  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err.message);
    return "Error: Could not read the file!";
  }
}

// Export the function
module.exports = { readDataFile };
