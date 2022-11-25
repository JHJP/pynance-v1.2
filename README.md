# Pynance v1.2 (being produced)

## Features implemented
* Sign up function: Using the API for the [Korea Financial Telecommunications and Clearings Institute](https://www.kftc.or.kr/kftc/main/EgovkftcHubMain.do) - account number authentication is performed
* Classifying function: a function that classified which store it is with only the store name (using SVM & K-means)

## Features to implement
* Automaically register card payment details in the app when using a card.

## Get started with vscdoe editor

Prerequisites:
* JavaScript ES6 Syntax
* Django 2.2.12 with python version 3.8.15
* npm

Install npm:
```
sudo apt install npm
```

After installing poetry, enter the following commands in order.

Change the directory to ~/pynance-v1.2/pynance-frontend.

Install react-scripts for the npm start commad:
```
npm install react-scripts --save
```

Run local server:
```
npm start
```

Change the directory to ~/pynance-v1.2/pynance-backend/APIProject-root.

Install dependencies:
```
pip3 install djangorestframework
```
```
pip3 install django-cors-headers
```

Apply migrations:
```
python manage.py migrate
```

Create admin user (super user):
```
python manage.py superuser
```

Run local django server:
```
python3 manage.py runserver
```
