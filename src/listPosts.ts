import * as electron from 'electron';
import moment from 'moment-timezone';
import path from 'path';
import * as createWindow from './electron/create-window';

const { app } = electron;

// set user data folder
app.setPath('userData', path.join(process.cwd(), 'tmp/userdata'));

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
  openNewWindow('list-posts', path.join(__dirname, 'source/treeView.html'));
});

function openNewWindow(name: string, url: string) {
  const winOpt: createWindow.createWindowOptions = {
    width: 1080,
    height: 500,
    center: true,
    title: name,
    show: false,
    frame: true,
    webPreferences: {
      //preload: join(__dirname, 'scripts/did-finish-load.js'),
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
  if (!/^(f|ht)tps?:\/\//i.test(url) && winOpt.webPreferences) {
    delete winOpt.webPreferences.partition;
  }
  // open new window
  const mainWindow = createWindow.createWindow(winOpt);
  if (mainWindow) {
    mainWindow?.minimize();

    //mainWindow.loadURL('https://proxydb.net/anon');
    createWindow.windowLoad(mainWindow, url);

    mainWindow.once('ready-to-show', () => {
      console.log('ready to show');
      //mainWindow?.show();
      setTimeout(
        () => {
          // close window in 2 mins
          createWindow.killWindow(winOpt);
          // restart
          openNewWindow(moment().format(), url);
        },
        60 * 1000 * 2
      );
    });
  }
}
