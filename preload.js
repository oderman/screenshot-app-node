const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  capture: (url, format) => ipcRenderer.invoke('capture', url, format),
});
