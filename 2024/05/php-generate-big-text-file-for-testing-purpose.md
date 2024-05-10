---
title: [PHP] generate big text file for testing purpose
date: 2024-05-10T16:04:23+07:00
---

This script will generate a text file named `big_text_file.txt` with a size of approximately 10 megabytes. 
You can adjust the size by changing the value of `$fileSizeMB`. 
The script generates random strings of characters to fill the file.

```php
<?php
// Function to generate a random string
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

// Define the size of the text file in megabytes
$fileSizeMB = 10; // Change this to the desired size

// Open a new text file for writing
$fileName = 'big_text_file.txt';
$file = fopen($fileName, 'w');

// Calculate the number of iterations needed to reach the desired file size
$iterations = $fileSizeMB * 1024 * 1024 / 10; // Assuming each character occupies approximately 10 bytes

// Generate and write random strings to the file
for ($i = 0; $i < $iterations; $i++) {
    $randomString = generateRandomString(100); // Change 100 to adjust string length if needed
    fwrite($file, $randomString . PHP_EOL); // Add a newline character after each string
}

// Close the file
fclose($file);

echo "Text file generated successfully!";
?>
```
