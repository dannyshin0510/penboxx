import requests

# baseUrl = 'https://www.penboxx.com/'
baseUrl = 'http://127.0.0.1:8000/'
def test_penList_response() -> None:
    
    response = requests.get(baseUrl + 'api/pen-list/')

    assert(len(response.content) == 4995) 
    assert response.status_code == 200


def test_penDetail_response() -> None:
    response = requests.get(baseUrl + 'api/pen-detail/142')

    response.raise_for_status()
    data = response.json()

    assert data["name"] == "Jetstream"
    assert data["pen_make"] == "UniBall"
    assert data["categories"] == [2, 3, 5]

    assert response.status_code == 200

def test_getPensbyCategory_response() -> None:
    response = requests.get(baseUrl + 'api/pen-category/office')

    assert(len(response.content) == 959) 
     
    assert response.status_code == 200

def test_penDetail_invalidID() -> None:
    response = requests.get(baseUrl + 'api/pen-detail/1422')

    assert response.status_code == 404

def test_penDetail_forbiddenID() -> None:
    response = requests.get(baseUrl + 'api/pen-detail/asd')
    
    assert response.status_code == 400

def test_penDetail_no_id() -> None:
    response = requests.get(baseUrl + 'api/pen-detail/')

    assert response.status_code == 404

def test_penCreate_response() -> None:
    response = requests.get(baseUrl + 'api/pen-create/')

    assert response.status_code == 200