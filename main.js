// ./main.js
const {app, BrowserWindow, ipcMain, dialog} = require('electron')
var fs = require('file-system');

let win = null;

const FILE_EXTENSION = 'qz';
const DEFAULT_SAVE_PATH = 'myQuiz.' + FILE_EXTENSION;

const saveFileOptions = {
  defaultPath: DEFAULT_SAVE_PATH,
}

const openFileOptions = {
  filters: [
    {
      name: 'Custom File Type',
      extensions: [FILE_EXTENSION]
    }
  ],
  multiSelections: false,
}

function saveFile(content) {
  dialog.showSaveDialog(
    saveFileOptions,
    fileName => fs.writeFile(fileName, JSON.stringify(content))
  );
}

function openFile() {
  dialog.showOpenDialog(
    openFileOptions,
    fileNames => fs.readFile(fileNames[0], 'utf-8', (err, data) => win.webContents.send('onQuizLoaded', data))
  )
}

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});
  // Specify entry point
  win.loadURL('http://localhost:4200');
  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()
  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', function () {
  createWindow();
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

ipcMain.on('sync', (event, arg) => {
    switch(arg.type) {
      case 'saveQuiz': return saveFile(arg.payload);
      case 'loadQuiz': return openFile();
      default: return;
    }
});