---
title: PySide6 autocomplete input text
keywords:
  - pyside6
description: How to create input text with autocomplete using PySide6 python
date: 2024-08-17T11:58:32+07:00
thumbnail: https://i.ibb.co.com/z2tJxm9/image.png
updated: 2024-08-17T12:02:21+07:00
categories:
  - programming
tags:
  - python
  - pyside6
---


## Sample App

sample PySide6 application with autocomplete functionality using `QLineEdit` and `QCompleter`. This example creates a simple window with a text input field that provides autocomplete suggestions as the user types.

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QLineEdit, QCompleter, QVBoxLayout, QWidget
from PySide6.QtCore import QStringListModel

class AutocompleteApp(QMainWindow):
    def __init__(self):
        super().__init__()

        # Set up the main window
        self.setWindowTitle("Autocomplete Example")
        self.setGeometry(100, 100, 400, 200)

        # Create a central widget and a layout
        central_widget = QWidget()
        layout = QVBoxLayout()

        # Create QLineEdit widget
        self.line_edit = QLineEdit()
        self.line_edit.setPlaceholderText("Type something...")

        # Create sample data for autocomplete
        data = ["apple", "banana", "grape", "orange", "peach", "pear", "plum"]

        # Create QStringListModel and QCompleter
        self.model = QStringListModel(data)
        self.completer = QCompleter(self.model)
        self.line_edit.setCompleter(self.completer)

        # Add the QLineEdit to the layout
        layout.addWidget(self.line_edit)
        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

if __name__ == "__main__":
    app = QApplication([])
    window = AutocompleteApp()
    window.show()
    app.exec()
```

### Explanation:

1.  **`AutocompleteApp` Class**: This class extends `QMainWindow` to create the main application window.
2.  **`__init__` Method**: Sets up the window title, size, and central widget.
3.  **`QLineEdit`**: A text input field where users type text.
4.  **`QStringListModel`**: Holds the list of strings that will be used for autocomplete suggestions.
5.  **`QCompleter`**: Provides the autocomplete functionality using the `QStringListModel`.
6.  **Layout**: Uses `QVBoxLayout` to arrange the `QLineEdit` within the main window.

To run this application, save the code to a file (e.g., `autocomplete_app.py`) and execute it with Python. Make sure you have PySide6 installed in your environment.

## Helper

PySide6 set `QLineEdit` autocomplete helper

```python
from PySide6.QtWidgets import QLineEdit, QCompleter
from PySide6.QtCore import QStringListModel
from typing import List

def set_completer(line_edit: QLineEdit, data: List[str]) -> None:
    """
    Configures a QLineEdit widget with a QCompleter for autocomplete functionality.

    Args:
        line_edit (QLineEdit): The QLineEdit widget to which the completer will be applied.
        data (List[str]): A list of strings to be used as autocomplete suggestions.

    Returns:
        None
    """
    # Create a QStringListModel with the provided data
    model = QStringListModel(data)

    # Create a QCompleter with the model
    completer = QCompleter(model)

    # Set the completer on the QLineEdit
    line_edit.setCompleter(completer)
```