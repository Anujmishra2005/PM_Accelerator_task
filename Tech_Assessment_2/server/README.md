Tech_Assessment_2 Server (Express + better-sqlite3)
--------------------------------------------------

Run:
1. cd Tech_Assessment_2/server
2. npm install
3. npm run dev   # starts at http://localhost:8080

API Endpoints:
- POST /api/queries
  body: { location, fromDate (YYYY-MM-DD), toDate (YYYY-MM-DD) }
  returns stored record id and fetched data

- GET /api/queries
  query params: q (search string), limit, offset

- GET /api/queries/:id
  returns full saved record including fetched 'result'

- PUT /api/queries/:id
  body: { location, fromDate, toDate } - revalidates and refetches

- DELETE /api/queries/:id

Notes:
- Uses Open-Meteo geocoding and forecast (no API key).
- Dates must be ISO YYYY-MM-DD.
- Coordinates allowed as "lat,lon".
