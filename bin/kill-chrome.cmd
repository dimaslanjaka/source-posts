@echo off

call wmic process where "name like 'chrome.exe'" delete