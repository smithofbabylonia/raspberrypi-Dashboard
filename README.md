# Raspberry Pi Server Dashboard

## Description

This project is a web portal dashboard for monitoring and managing server applications on a Raspberry Pi. The dashboard is built using ReactJS and provides real-time insights into system resources and application statuses. Key features include:

- **Temperature Gauges:** Displays the temperature of the Raspberry Pi in crescent gauges with gradient colors indicating intensity.
- **Storage Usage:** Shows the amount of storage used on the SD card.
- **RAM Usage:** Displays the RAM usage.
- **Server Applications Status:** Monitors and shows the status of various server applications like Pi-hole, qBittorrent, NginX, SSH, and JellyFin.
- **Network Activity:** Graphs the network activity for the last 60 seconds.

## Features

- **Real-Time Monitoring:** Fetches and displays real-time data from the Raspberry Pi.
- **Responsive Design:** The dashboard is designed to be responsive and works well on different screen sizes.
- **Modular Components:** The code is organized into reusable components for easy maintenance and extension.

## Setup

### Prerequisites

- Node.js and npm installed on your development machine.
- A Raspberry Pi running server applications
- You also need python Flask and CORS for the server

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/smithofbabylonia/raspberrypi-Dashboard.git
   cd raspberrypi-Dashboard
