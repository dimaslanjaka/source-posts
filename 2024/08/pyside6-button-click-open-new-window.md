---
title: PySide6 button click open new window
description: PySide6 open other window class on button click
tags:
    - python
    - pyside6
categories:
    - programming
keywords:
    - pyside6
date: 2024-08-25T02:01:29+07:00
updated: 2024-08-25T02:15:56+07:00
thumbnail: https://www.pythonguis.com/static/tutorials/start/creating-multiple-windows/window7.jpg
---

How to create pyside6 on button click open another window class, when main window closed close other opened windows.

To achieve this in PySide6, you can connect the main window's `closeEvent` to a method that closes all other opened windows. Here's an example:

1.  **Main Window**: The primary window with the button that opens a new window.
2.  **Secondary Window**: The window that opens when the button is clicked.

Here's a code example to demonstrate this:

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton, QWidget, QVBoxLayout
import sys

class SecondaryWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Secondary Window")
        self.setGeometry(100, 100, 300, 200)

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window")
        self.setGeometry(100, 100, 400, 300)

        self.opened_windows = []

        self.button = QPushButton("Open Secondary Window", self)
        self.button.clicked.connect(self.open_secondary_window)

        layout = QVBoxLayout()
        layout.addWidget(self.button)

        central_widget = QWidget()
        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

    def open_secondary_window(self):
        new_window = SecondaryWindow()
        new_window.show()
        self.opened_windows.append(new_window)

    def closeEvent(self, event):
        # Close all opened windows when the main window is closed
        for window in self.opened_windows:
            window.close()
        event.accept()

if __name__ == "__main__":
    app = QApplication(sys.argv)

    main_window = MainWindow()
    main_window.show()

    sys.exit(app.exec())
```

### Explanation:

1.  **`SecondaryWindow` Class**: This represents the additional windows that will be opened when the button is clicked.
2.  **`MainWindow` Class**:
    -   The `open_secondary_window` method creates and shows a new `SecondaryWindow` and keeps track of it in the `opened_windows` list.
    -   The `closeEvent` method is overridden to ensure that all opened windows are closed when the main window is closed.

### Behavior:

-   Clicking the button in the main window opens a secondary window.
-   When the main window is closed, any secondary windows that were opened will also close automatically.

This setup ensures that secondary windows are properly managed and closed along with the main window.

## Using QWidget Instead Of QMainWindow

You can change `MainWindow(QMainWindow)` to `MainWindow(QWidget)`. This makes `MainWindow` a subclass of `QWidget` instead of `QMainWindow`. When doing this, you'll need to make a few adjustments, such as setting the layout directly on the main window widget since `QWidget` doesn't have the same central widget concept as `QMainWindow`.

Here the modified codes:

```python
from PySide6.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout
from PySide6.QtGui import QCloseEvent
from typing import List
import sys

class SecondaryWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Secondary Window")
        self.setGeometry(100, 100, 300, 200)

class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Main Window")
        self.setGeometry(100, 100, 400, 300)

        self.opened_windows: List[SecondaryWindow] = []

        self.button: QPushButton = QPushButton("Open Secondary Window", self)
        self.button.clicked.connect(self.open_secondary_window)

        layout: QVBoxLayout = QVBoxLayout(self)
        layout.addWidget(self.button)
        self.setLayout(layout)

    def open_secondary_window(self) -> None:
        new_window: SecondaryWindow = SecondaryWindow()
        new_window.show()
        self.opened_windows.append(new_window)

    def closeEvent(self, event: QCloseEvent) -> None:
        # Close all opened windows when the main window is closed
        for window in self.opened_windows:
            window.close()
        event.accept()

if __name__ == "__main__":
    app: QApplication = QApplication(sys.argv)

    main_window: MainWindow = MainWindow()
    main_window.show()

    sys.exit(app.exec())
```

### Changes Made:

1.  **Base Class**: Changed `MainWindow(QMainWindow)` to `MainWindow(QWidget)`.
2.  **Layout Management**: Since `QWidget` doesn't have a `setCentralWidget` method, you directly set the layout on the `MainWindow` widget using `self.setLayout(layout)`.

### Behavior:

-   The functionality remains the same as before. You can still open secondary windows with the button click, and closing the main window will close all the opened secondary windows.