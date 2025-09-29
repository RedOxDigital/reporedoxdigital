#!/usr/bin/env node

import http from 'http';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const HOST = 'localhost';

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // Parse URL and remove query parameters (decode to support spaces and unicode)
  let filePath = decodeURIComponent(req.url.split('?')[0]);
  
  // Default to hero-local-customers.html for root path
  if (filePath === '/') {
    filePath = '/hero-local-customers.html';
  }
  
  // Construct full file path
  const fullPath = path.join(__dirname, filePath);
  
  // Get file extension
  const ext = path.extname(fullPath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  // Check if file exists
  fs.access(fullPath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>404 - File Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #e74c3c; }
          </style>
        </head>
        <body>
          <h1>404 - File Not Found</h1>
          <p>The requested file <code>${filePath}</code> was not found.</p>
          <p><a href="/">Go to Homepage</a></p>
        </body>
        </html>
      `);
      return;
    }
    
    // Read and serve the file
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>500 - Server Error</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              h1 { color: #e74c3c; }
            </style>
          </head>
          <body>
            <h1>500 - Server Error</h1>
            <p>Error reading file: ${err.message}</p>
          </body>
          </html>
        `);
        return;
      }
      
      // Set appropriate headers
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(data);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Development server running at http://${HOST}:${PORT}/`);
  console.log(`📄 Serving hero-local-customers.html`);
  console.log(`🖼️  Hero.png should be accessible at http://${HOST}:${PORT}/Hero.png`);
  console.log(`\n📋 Available URLs:`);
  console.log(`   • http://${HOST}:${PORT}/                    (redirects to hero-local-customers.html)`);
  console.log(`   • http://${HOST}:${PORT}/hero-local-customers.html`);
  console.log(`   • http://${HOST}:${PORT}/Hero.png`);
  console.log(`\n🔄 Server will auto-reload files on each request (no caching)`);
  console.log(`\n⏹️  Press Ctrl+C to stop the server`);
  
  // Try to open browser automatically
  const url = `http://${HOST}:${PORT}/`;
  const start = process.platform === 'darwin' ? 'open' : 
                process.platform === 'win32' ? 'start' : 'xdg-open';
  
  exec(`${start} ${url}`, (err) => {
    if (err) {
      console.log(`\n🌐 Please open your browser and navigate to: ${url}`);
    } else {
      console.log(`\n🌐 Opening browser automatically...`);
    }
  });
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Shutting down development server...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n\n👋 Shutting down development server...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});
