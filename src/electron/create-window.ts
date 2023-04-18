import { enable as enableRemote } from '@electron/remote/main';
import { deepmerge } from 'deepmerge-ts';
import { BrowserWindow, BrowserWindowConstructorOptions, globalShortcut } from 'electron';
import isDev from 'electron-is-dev';

/**
 * Browser Windows Wrapper
 */
const wins: { [key: string]: BrowserWindow | null } = {};

export function getWindow(title: string | createWindowOptions) {
  if (typeof title === 'string') return wins[title];
  return wins[title.title];
}

/**
 * kill window by title or by option window
 * @param title
 */
export function killWindow(title: string | createWindowOptions) {
  const win = getWindow(title);
  if (win) {
    if (win.isClosable()) win.close();
    wins[typeof title === 'string' ? title : title.title] = null;
  }
}

/**
 * count all opened windows
 * @returns
 */
export function countWindow() {
  return BrowserWindow.getAllWindows().length;
}

/**
 * Create New Window With Overriden Options
 * @param options
 */
export default function createWindow(
  options: createWindowOptions = {
    title: 'Main'
  }
): BrowserWindow {
  const defaultOptions: createWindowOptions = {
    title: 'Main',
    width: 800,
    height: 600,
    frame: false,
    maximizable: true,
    minimizable: true,
    show: true,
    closable: true,
    autoHideMenuBar: true,
    webPreferences: {
      //partition: 'persist:browser',
      webSecurity: false,
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      webviewTag: true
    }
  };
  options = deepmerge(defaultOptions, options);

  // return existing window
  if (wins[options.title]) return wins[options.title] as BrowserWindow;

  // Create the browser window.
  wins[options.title] = new BrowserWindow(options);

  const currentWindow = wins[options.title] as BrowserWindow;

  // enable remote
  enableRemote(currentWindow.webContents);

  if (typeof options.url == 'string' && options.url.length > 0) {
    // server is opened and request custom url
    if (options.url.match(/^https?:\/\//)) {
      currentWindow.loadURL(options.url);
    } else {
      currentWindow.loadFile(options.url);
    }
  }

  // Open the DevTools.
  if (isDev) {
    currentWindow.webContents.once('did-frame-finish-load', () => {
      //wins[options.title].webContents.openDevTools({ mode: 'right' });
    });
  }
  // Maximize
  //if (currentWindow.isMaximizable()) currentWindow.maximize();
  // Minimize (annoying)
  if (isDev) currentWindow.minimize();

  // setup shortcut
  currentWindow.on('focus', () => {
    globalShortcut.register('f5', function () {
      console.log('reload by f5');
      currentWindow.reload();
    });
    if (isDev) {
      globalShortcut.register('CommandOrControl+D', function () {
        console.log('toggle developer tools');
        currentWindow.webContents.openDevTools({ mode: 'detach' });
      });
    }
    globalShortcut.register('ESC', function () {
      if (currentWindow.closable) currentWindow.close();
    });
    globalShortcut.register('CommandOrControl+R', function () {
      console.log('reload by CommandOrControl+R');
      currentWindow.reload();
    });
  });

  currentWindow.on('closed', () => {
    wins[options.title] = null;
    //delete currentWindow;
  });

  currentWindow.on('blur', () => {
    globalShortcut.unregisterAll();
  });
  wins[options.title] = currentWindow;
  return currentWindow;
}

export interface createWindowOptions extends BrowserWindowConstructorOptions {
  [key: string]: any;
  url?: string;
  mainServer?: boolean;
  title: string;
  registerShortcut?: {
    /** Shortcut string */
    accelerator: Electron.Accelerator;
    /** Shortcut action */
    callback: () => void;
  }[];
}

/**
 * electron window load url dynamic
 * @param mainWindow
 * @param url
 */
export function windowLoad(mainWindow: BrowserWindow, url: string) {
  if (url.match(/^https?:\/\//)) {
    mainWindow.loadURL(url);
  } else {
    mainWindow.loadFile(url);
  }
}
