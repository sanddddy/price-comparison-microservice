1. Description of What the Microservice Does
This microservice provides simulated price comparison data for beauty products across three major retailers: Sephora, Ulta, and Nordstrom.
It also supports optional price tracking, which stores generated prices into a history file (price_history.json).
Teammates can request current prices or retrieve previously tracked price history.

2. How to Programmatically REQUEST Data
   A. Request Current Prices
	(i) Endpoint:
	     Code:
	     GET /compare?product=<product_name>
	(ii) Required parameter:
	      product — the product name to compare prices for
	(iii) Optional parameter:
	       track=true — saves the generated prices into history
	(iv) Example call:
	       Code: 
	       GET http://127.0.0.1:5001/compare?product=lipstick
	(v) Example with tracking:
	      Code:
	      GET http://127.0.0.1:5001/compare?product=lipstick&track=true
   B. Request Price History
	(i) Endpoint:
	     Code:
	     GET /history?product=<product_name>
	(ii) Required parameter:
	      product — the product name whose history you want to retrieve
	(iii) Example call:
	        Code:
	        GET http://127.0.0.1:5001/history?product=lipstick

3. How to Programmatically RECEIVE Data
    A. /compare Response Example
json:
{
  "product": "lipstick",
  "prices": {
    "Sephora": 189.92,
    "Ulta": 51.52,
    "Nordstrom": 82.79
  }
}
    B. /history Response Example
json:
{
  "product": "lipstick",
  "history": [
    {"Sephora": 120.50, "Ulta": 110.20, "Nordstrom": 130.00},
    {"Sephora": 118.99, "Ulta": 112.30, "Nordstrom": 129.50}
  ]
}

4. UML Sequence Diagram
