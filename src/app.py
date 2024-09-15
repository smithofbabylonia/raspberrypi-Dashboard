# app.py
from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import os

app = Flask(__name__)
CORS(app)

def get_storage():
    total, used, free = subprocess.check_output(['df', '/']).decode().split()[8:11]
    return {'total': total, 'used': used, 'free': free}

def get_temperature():
    temp = subprocess.check_output(['vcgencmd', 'measure_temp']).decode()
    return {'temperature': temp.split('=')[1]}

def get_ram():
    mem = subprocess.check_output(['free', '-m']).decode().split()[7:10]
    return {'total': mem[0], 'used': mem[1], 'free': mem[2]}

def is_installed(app_name):
    try:
        subprocess.check_output(["which", app_name])
        return "yes"
    except subprocess.CalledProcessError:
        return "no"

def is_running(service_name):
    try:
        output = subprocess.check_output(["systemctl", "is-active", service_name]).decode().strip()
        return "green" if output == "active" else "red"
    except subprocess.CalledProcessError:
        return "orange"

def get_app_info():
    apps = [
        {"name": "SSH", "service_name": "ssh", "port": 22, "image":'logo192.png' },
        {"name": "qBittorrent", "service_name": "qbittorrent-nox", "port": 4646, "image":'https://upload.wikimedia.org/wikipedia/commons/6/66/New_qBittorrent_Logo.svg'},
        {"name": "Pi-Hole", "service_name": "pihole-FTL", "port": 80, "image":'https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png'},
        {"name": "JellyFin", "service_name": "jellyfin", "port": 8096, "image":'https://static-00.iconduck.com/assets.00/jellyfin-icon-2048x2048-tf5ztk6m.png'},
        {"name": "Phonebook", "service_name": "phonebook", "port": 1618, "image":'logo192.png'}
    ]

    app_info = []
    for app in apps:
        info = {
            "name": app["name"],
            "installed": is_installed(app["service_name"]),
            "status": is_running(app["service_name"]),
            "port": app["port"],
            "image": app["image"]
        }
        app_info.append(info)
    return app_info


@app.route('/api/storage')
def storage():
    return jsonify(get_storage())

@app.route('/api/temperature')
def temperature():
    return jsonify(get_temperature())

@app.route('/api/ram')
def ram():
    return jsonify(get_ram())

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify(get_app_info())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
