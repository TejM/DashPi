#!/bin/bash
echo "Starting Django server"
cd /home/pi/Desktop/DashPi/back_end
python3 manage.py runserver &

echo "Running chromium script"
cd /home/pi/Desktop/DashPi/aux_files
python3 chromium_script.py &