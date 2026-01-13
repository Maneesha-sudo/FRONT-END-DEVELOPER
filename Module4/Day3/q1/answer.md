# Understanding Project Management in Node.js

This document explains how project management works in Node.js using simple language and basic examples. All explanations are written in my own words.

---

## a. Package Managers

### What is a package manager?

* A package manager is a tool that helps us install, update, and manage external libraries or packages.
* These packages contain ready-made code that we can use in our projects.
* In Node.js, the most commonly used package manager is npm

### Why do we need package managers in backend development?

* Backend projects often depend on many external libraries and saves time.
* They make sure everyone working on the project uses the same versions of packages.

### Problems faced if package managers are not used

* We would have to manually download and manage libraries.
*  if version doesn't match which will  cause errors and also sharing projects becomes difficult.

---

## b. NPM (Node Package Manager)

### What is NPM?

* NPM is the default package manager for Node.js.
* It is used to install and manage packages for Node.js applications.
* NPM comes automatically when Node.js is installed.

### Why is NPM important for Node.js applications?

* It helps manage project dependencies easily.

### How NPM helps in managing dependencies

* Dependencies are listed inside the `package.json` file.
* Using a single command, NPM installs all required packages.
* NPM also handles package versions to avoid conflicts.

---

## c. Backend Project Initialization

### Command used to initialize a backend (Node.js) project


npm init


### Explanation of `npm init`

* This command creates a `package.json` file.
* It asks questions like project name, version, and entry file.
* The answers help define project details.

### Explanation of `npm init -y`

* This command also creates a `package.json` file.
* It skips all questions and uses default values.
---

## d. Files and Folders Created After Project Initialization

### package.json

* This file contains project information.
* It lists dependencies, scripts, and project settings.
* It is very important for running and sharing the project.

### node_modules

* This folder contains all installed packages.
* It is created automatically when dependencies are installed.
* It can be very large in size.

### package-lock.json

* This file stores the exact versions of installed packages.
* It ensures the same dependencies are installed everywhere.
* It helps avoid version-related issues.

---

## Files and Folders for GitHub

### Files/Folders that should NOT be pushed to GitHub

* `node_modules`
* Reason: It is large and can be recreated using NPM.

### Files that MUST be pushed to GitHub

* `package.json`
* `package-lock.json`
* Reason: They help others install the same dependencies easily.

---

## Conclusion

* Package managers make backend development easier and organized.

