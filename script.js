//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

// do not change the code above
// add your code here
fileNames.forEach(file => {
  fetch(file)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error("Error reading:", file, err));
});
