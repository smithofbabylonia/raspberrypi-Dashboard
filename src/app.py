# app.py
from flask import Flask, jsonify
import subprocess
import os

app = Flask(__name__)

def get_storage():
    total, used, free = subprocess.check_output(['df', '/']).decode().split()[8:11]
    return {'total': total, 'used': used, 'free': free}

def get_temperature():
    temp = subprocess.check_output(['vcgencmd', 'measure_temp']).decode()
    return {'temperature': temp.split('=')[1]}

def get_ram():
    mem = subprocess.check_output(['free', '-m']).decode().split()[7:10]
    return {'total': mem[0], 'used': mem[1], 'free': mem[2]}

@app.route('/api/storage')
def storage():
    return jsonify(get_storage())

@app.route('/api/temperature')
def temperature():
    return jsonify(get_temperature())

@app.route('/api/ram')
def ram():
    return jsonify(get_ram())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
