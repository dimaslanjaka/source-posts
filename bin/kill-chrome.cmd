@echo off

WMIC PROCESS where "Name like 'java%' AND CommandLine like '%chrome.exe%'" Call Terminate