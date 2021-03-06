import { app, BrowserWindow, ipcMain, nativeTheme, shell } from 'electron'
import { release } from 'os'
import { join } from 'path'
import './samples/electron-store'
import './samples/npm-esm-packages'

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let win: BrowserWindow | null = null

async function createWindow() {
  let vibrancy = nativeTheme.shouldUseDarkColors ? 'dark' : 'light'
  const opts = {
    title: "Eli's",
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs')
    },
    trafficLightPosition: { x: 7, y: 8 },
    transparent: true,
    vibrancy: nativeTheme.shouldUseDarkColors ? 'dark' : 'light',
    frame: false,
    titleBarStyle: 'hidden'
  }
  win = new BrowserWindow({
    title: "Eli's",
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs')
    },
    trafficLightPosition: { x: 7, y: 8 },
    transparent: true,
    vibrancy: nativeTheme.shouldUseDarkColors ? 'dark' : 'light',
    frame: false,
    titleBarStyle: 'hidden'
  })

  ipcMain.on('set-vibrancy', (event, _v) => {
    vibrancy = _v
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setVibrancy(_v)
  })
  ipcMain.handle('get-vibrancy', async (event) => {
    return vibrancy
  })
  ipcMain.on('open-devtools', (event, vibrancy) => {
    win.webContents.openDevTools()
  })
  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  } else {
    // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
    const { VITE_DEV_SERVER_HOST: host, VITE_DEV_SERVER_PORT: port } =
      process.env
    const url = `http://${host}:${port}`

    win.loadURL(url)
    // win.webContents.openDevTools()
  }

  // Test active push message to Renderer-process
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})
