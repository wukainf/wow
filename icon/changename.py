#!/usr/bin/python

import re,os

file1 = os.listdir("./")
j = 0

for i in file1:
	j += 1
	ma = re.match(r".*(.jpg)",i)
	if ma:
		print ma.group()
		str2 = ma.group().split()
		os.system("mv"+" "+i+" "+str(j)+".jpg")

