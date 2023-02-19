#!/bin/bash
#Creator: Tony Do
#Date: 17th Feb,2023
#Email: vanhuong.do@asicland.com
#
#git remote add origin https://github.com/dovanhuong/$1.git
#git init 
#git add .
#git commit -m "first release"
#git remote add origin https://github.com/dovanhuong/CustomBinding.git
git branch -M main
git pull
git add .
#git commit -m "$2"
git commit -m "$1"
git push -u origin main
echo "Completed updated script"
