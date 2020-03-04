#!/bin/sh

# Setup App
git clone https://github.com/BDMADE/bangla-ocr.git
cd bangla-ocr
sudo apt-get install -y python-virtualenv
sudo apt-get install -y virtualenv
virtualenv env
source env/bin/activate
pip install -r requirements.txt
