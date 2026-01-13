// Import built-in modules (ES Modules)
import os from "os";
import fs from "fs/promises";

// -------- Part A: OS Module --------
try {
  console.log("Free Memory:", os.freemem());
  console.log("Total CPU Cores:", os.cpus().length);
} catch (error) {
  console.error("OS Module Error:", error);
}

// -------- Part B: File System Operations --------
async function fileOperations() {
  try {
    // Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created");

    // Read data.txt
    const content = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:", content);

    // Append new line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Text appended to data.txt");

    // Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");

  } catch (error) {
    console.error("File System Error:", error);
  }
}

// Call function
fileOperations();
