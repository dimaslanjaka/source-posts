---
title: "[PHP] generate random proxy IP:PORT from CIDR"
date: 2024-05-10T18:47:10+07:00
updated: 2024-05-13T10:11:24+07:00
tags: [php]
categories: [programming]
---

this script will Generate a random **IP:PORT** address within a **CIDR** range.

```php
<?php

/**
 * Generate a random IP address within a CIDR range.
 *
 * @param string $cidr The CIDR range (e.g., "192.168.1.0/24").
 * @return string The random IP address.
 */
function generateRandomIP(string $cidr): string {
    list($ip, $subnet) = explode('/', $cidr);
    
    // Convert IP to binary format
    $ipBinary = ip2long($ip);
    
    // Calculate the number of available IP addresses in the subnet
    $subnetSize = pow(2, (32 - $subnet));
    
    // Generate a random offset within the subnet
    $offset = mt_rand(1, $subnetSize - 2); // Exclude network address and broadcast address
    
    // Calculate the resulting IP
    $randomIP = long2ip($ipBinary + $offset);
    
    return $randomIP;
}

/**
 * Generate a random port number.
 *
 * @return int The random port number.
 */
function generateRandomPort(): int {
    return mt_rand(1024, 65535);
}

// Example CIDR range
$cidr = "192.168.1.0/24";

// Generate a random IP address within the CIDR range
$randomIP = generateRandomIP($cidr);

// Generate a random port number
$randomPort = generateRandomPort();

// Output the random IP:Port combination
echo "Random IP:Port: $randomIP:$randomPort\n";
?>
```
