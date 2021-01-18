[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://www.penboxx.com/)
# Welcome to penboxx! :fountain_pen::package:
![Landing](https://github.com/dannyshin0510/penboxx/blob/main/accounts/img/landing.JPG)
**Check it out [here](https://www.penboxx.com/)!** :mag:

It's quite simple. The niche love for stationary utensils had nowhere to be embraced. I wanted to change that. Welcome to penboxx.
Penboxx strives to serve the community as much as possible with rich, dynamic content. Brought to you with **HTTP Secure** connection.

## API Endpoints :zap:
**Note:** Now supporting images with [AWS S3](https://aws.amazon.com/s3/), [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html), and [Pillow](https://pillow.readthedocs.io/en/stable/)! :city_sunset:

Method | Endpoint | Functionality
--- | --- | ---
POST | `/api/pen-create` | Create pen entry
GET | `/api/pen-list` | Fetch all pens
GET | `/api/pen-detail/{pk}` | Fetch single pen
PUT | `/api/pen-update/{pk}` | Update pen entry
DELETE | `/api/user/destroy/{pk}` | Delete pen entry

## Site: :pushpin:
![new](https://github.com/dannyshin0510/penboxx/blob/main/accounts/img/newest.JPG)
![recommendation](https://github.com/dannyshin0510/penboxx/blob/main/accounts/img/recommendation.JPG)


## API interface: :video_game:
![create](https://github.com/dannyshin0510/penboxx/blob/main/accounts/img/create.JPG)

![view](https://github.com/dannyshin0510/penboxx/blob/main/accounts/img/allPen.JPG)

## Installation 	:computer:

Clone the repo

```bash
git clone https://github.com/dannyshin0510/writeup.git
```

Install requirements

```bash
pip install -r requirements.txt
npm install
```

Make migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

Run!

```bash
python manage.py runserver
```
Navigate to [local env](http://127.0.0.1:8000/).

## Upcoming / In-development :construction_worker:
* Extending product coverage for:
  * Notebooks / paper
  * Ink
  * Erasers / Whiteout
* Notifications for exclusive drops
  * Holidays, limited editions, etc
* Feedback forms

## Contributing :bulb:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
