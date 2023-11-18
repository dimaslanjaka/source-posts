import { app } from 'electron';
import moment from 'moment-timezone';
import { join } from 'path';
import createWindow, { createWindowOptions, killWindow, windowLoad } from './create-window';

// set user data folder
app.setPath('userData', join(process.cwd(), 'tmp/userdata'));

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their
  // menu barto stay active until the user quits
  // explicitly with Cmd + Q if (process.platform != 'darwin')
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
  openNewWindow('translator', 'http://adsense.webmanajemen.com');
});

function openNewWindow(name: string, url: string) {
  const winOpt: createWindowOptions = {
    width: 1080,
    height: 500,
    center: true,
    title: name,
    show: false,
    frame: true,
    webPreferences: {
      preload: join(__dirname, 'scripts/did-finish-load.js'),
      partition: 'persist:' + name,
      webSecurity: false,
      //preload: join(electronRootDist, 'preload.js'), // Loading it from the build folder for production
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      webviewTag: true
    }
  };
  // open new window
  const mainWindow = createWindow(winOpt);
  if (mainWindow) {
    //mainWindow.webContents.session.clearStorageData();
    mainWindow.webContents.session.setUserAgent(
      'Opera/9.80 (Android; Opera Mini/11.0.1912/37.7549; U; pl) Presto/2.12.423 Version/12.16'
    );
    mainWindow?.minimize();

    //mainWindow.loadURL('https://proxydb.net/anon');
    windowLoad(mainWindow, url);

    mainWindow.webContents.on('did-fail-load', function (_event, _code, _desc, _url) {
      killWindow(winOpt);
      // restart
      openNewWindow(moment().format(), url);
    });

    mainWindow.webContents.on('did-finish-load', function () {
      console.log('finish load');
    });

    mainWindow.once('ready-to-show', () => {
      console.log('ready to show');
      //mainWindow?.show();
      setTimeout(
        () => {
          // close window in 2 mins
          killWindow(winOpt);
          // restart
          openNewWindow(moment().format(), url);
        },
        60 * 1000 * 2
      );
    });
  }
}
