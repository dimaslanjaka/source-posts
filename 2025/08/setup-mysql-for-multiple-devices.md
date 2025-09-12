---
title: How to Activate MySQL for Multiple Devices
date: 2025-08-24T17:54:43Z
updated: 2025-09-12T18:08:29+07:00
tags:
  - mysql
  - database
  - networking
  - tutorial
---

## How to Activate MySQL for Multiple Devices

This tutorial will guide you through the steps to allow multiple devices to access your MySQL server over a network.

### Prerequisites

- MySQL server installed on your host machine
- Access to the MySQL root user or an admin account
- Basic knowledge of networking

### Configure MySQL to Listen on All IP Addresses

1. Open the MySQL configuration file (`my.cnf` or `my.ini`).
   - On Windows: Usually located at `C:\ProgramData\MySQL\MySQL Server X.X\my.ini`
   - On Linux: Usually at `/etc/mysql/my.cnf` or `/etc/my.cnf` or `/etc/mysql/mysql.conf.d/mysqld.cnf`
2. Find the line starting with `bind-address`.
   ```ini
   bind-address        = 127.0.0.1
   mysqlx-bind-address = 127.0.0.1
   ```
3. Change it to:
   ```ini
   bind-address        = 0.0.0.0
   mysqlx-bind-address = 0.0.0.0
   ```
   This allows MySQL to accept connections from any IP address.
4. Save the file and restart the MySQL service.
   - **Windows:**
     ```cmd
     net stop mysql
     net start mysql
     ```
   - **Linux:**
     ```bash
     sudo systemctl restart mysql
     ```

### Allow Remote Connections in the Firewall

1. Open port 3306 (default MySQL port) in your firewall settings.
   - **Windows:** Use Windows Defender Firewall to allow inbound connections on port 3306.
   - **Linux:**
     ```bash
     sudo ufw allow 3306/tcp
     ```

### Create a MySQL User for Remote Access

> ⚠️ Important: At this point MySQL will accept connections from anywhere. If your server is exposed to the internet, secure it:

1. Log in to MySQL as root:
   ```bash
   mysql -u root -p
   ```
2. Create a new user or update an existing user to allow access from a specific IP or any IP (`%`):
   ```sql
   CREATE USER 'username'@'%' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
   ```
   > Replace `username` and `password` with your desired credentials.

### Connect from Another Device

On the client device, use the following command to connect:

```bash
mysql -h <server-ip-address> -u username -p
```
Replace `<server-ip-address>` with the IP address of your MySQL server.

## Optimizations

### Increase Packet Size Limit

edit: `/etc/mysql/mysql.conf.d/mysqld.cnf`

```ini
[mysqld]
max_allowed_packet = 128M
net_read_timeout = 120
net_write_timeout = 120
```

check using:

```sql
SHOW VARIABLES LIKE 'max_allowed_packet';
SHOW VARIABLES LIKE 'net_read_timeout';
SHOW VARIABLES LIKE 'net_write_timeout';
```

### Increase Connection Limit

edit: `/etc/mysql/mysql.conf.d/mysqld.cnf`

```ini
[mysqld]
max_connections = 500
wait_timeout = 60
interactive_timeout = 60
```

check using

```sql
SHOW VARIABLES LIKE 'max_connections';
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Threads_running';
```


## Security Tips

- Only allow trusted IPs if possible (replace `%` with a specific IP or subnet).
- Use strong passwords for all MySQL users.
- Consider enabling SSL for encrypted connections.

---
You have now enabled MySQL access for multiple devices on your network!
