# Reverse Shell Generator

A web-based reverse shell generator I built for CTF practice and offensive security work.

**Live demo:** https://sudoxs.github.io/reverse-shell-generator/

## What it does

- Generates reverse shell payloads for Linux, Windows, and macOS
- Supports Bind shells, MSFVenom, HoaxShell, and Assembled payloads
- URL encoding, Double URL encoding, and Base64 encoding
- Download payloads directly from the browser
- Save your IP/port configuration with LocalStorage
- Dark and Light themes with a neon red aesthetic
- Increment port with a single click

## How to use

1. Open the live demo
2. Enter your IP and port
3. Pick a shell type from the left panel
4. Click Copy or hit the floppy icon to download

## Tech

- Vanilla JavaScript (no framework)
- Bootstrap 4 for layout
- JetBrains Mono font
- Custom CSS themes

## Local development

Just open `index.html` in a browser, or serve it with any static server:

```bash
python3 -m http.server 8000
```
