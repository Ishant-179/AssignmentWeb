const Data = [
    {
      "id": 1,
      "name": "Ishant Singh",
      "email": "ishant@example.com",
      "phone": "+91-9876543210",
      "lastInvoice": "2025-03-01",
      "image": "https://imgs.search.brave.com/ORN5_1GDJDRVDP7aJopqcuV1XuBWAH4G9X333tuxL6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/Nzk2MjU4Ny9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLWNv/bmZpZGVudC1zbWls/aW5nLWFzaWFuLWNo/aW5lc2UtYnVzaW5l/c3NtYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPV8yX0Fu/X1V5TTJFaUxyZVRx/RWozaThSY2lEbGNT/YVJkdnNzNmUxWk9x/UDg9"
    },
    {
      "id": 2,
      "name": "Priya Sharma",
      "email": "priya@example.com",
      "phone": "+91-9876543211",
      "lastInvoice": "2025-03-15",
      "image": "https://imgs.search.brave.com/tKYIpylI8BqkQFr5PJE9rEDYC6hnv_ptHWZXYZd31uE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzcy15b3Vu/Zy1wcm9mZXNzaW9u/YWwtYnVzaW5lc3Nt/YW4tZ2xhc3Nlcy1z/bWlsaW5nLWNhbWVy/YS1jcm9zcy1hcm0t/Y2hlc3Qtd2l0aF8x/MjU4LTI2Mzc3Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
    },
    {
      "id": 3,
      "name": "Karan Gill",
      "email": "karan@example.com",
      "phone": "+91-9876543212",
      "lastInvoice": "2025-03-10",
      "image": "https://imgs.search.brave.com/BErmlRH5QCRso2Iaj-b79DTZgXMHt7jY0m3CS7Awr_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb25maWRlbnQt/cHJvZmVzc2lvbmFs/LXdvbWFuLWJsYWNr/LXN1aXQtc21pbGlu/Z18xMTY1NDctMTAx/NDg3LmpwZz9zZW10/PWFpc19oeWJyaWQ"
    },
    {
      "id": 4,
      "name": "Ananya Verma",
      "email": "ananya@example.com",
      "phone": "+91-9876543213",
      "lastInvoice": "2025-03-18",
      "image": "https://imgs.search.brave.com/Hbr3C-nhf3py7XY3WJ9z3RIcc1uOXmqBI6cQkYccnSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI5/OTQ0NzEyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtbWFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1FNEhO/eTR3S2txYlltUDhF/b2VJOXhiX2p1ajlf/eDZ2dHlGYTljNzRQ/aGJBPQ"
    },
    {
      "id": 5,
      "name": "Ravi Mehta",
      "email": "ravi@example.com",
      "phone": "+91-9876543214",
      "lastInvoice": "2025-02-25",
      "image": "https://imgs.search.brave.com/PPfaU3edGDSr-YELIUEw-G6H02voHairGJW--RlyeOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM3/OTE0NDUyL3Bob3Rv/L2J1c2luZXNzbWFu/LXNtaWxpbmctaW4t/YnVzaW5lc3Mtb2Zm/aWNlLWVudmlyb25t/ZW50LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1XMGZ3SHV4/R3NaWWp6NTlxSElL/R0FmYVA2QUdJamo0/TlNKb0d6WXRvLUxF/PQ"
    },
    {
      "id": 6,
      "name": "Simran Kaur",
      "email": "simran@example.com",
      "phone": "+91-9876543215",
      "lastInvoice": "2025-03-05",
      "image": "https://imgs.search.brave.com/Pxbmbpid8wpkt9ZqPl1nGYuB_FoS8jJ5Dt-zKsmVpVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LXlv/dW5nLWJ1c2luZXNz/bWFuLW9mZmljZS1j/bG90aGluZ18yMy0y/MTQ4NzYzODU5Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
    },
    {
      "id": 7,
      "name": "Aditya Jain",
      "email": "aditya@example.com",
      "phone": "+91-9876543216",
      "lastInvoice": "2025-03-12",
      "image": "https://imgs.search.brave.com/oMD3Al_CZraPEaPnF28GqAX1i7qbRsie610nvBPRq5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM3/OTMzODE0L3Bob3Rv/L3BvcnRyYWl0LW9m/LWJ1c2luZXNzbWFu/LXNtaWxpbmctaW4t/YnVzaW5lc3Mtb2Zm/aWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KZDMxWVlf/TlNHOXpwLXdhLWRH/U05SMURjV3duN3h4/U3Q0Szd3SUNvSWZj/PQ"
    },
    {
      "id": 8,
      "name": "Neha Gupta",
      "email": "neha@example.com",
      "phone": "+91-9876543217",
      "lastInvoice": "2025-02-28",
      "image": "https://imgs.search.brave.com/GcGi-eQ-_BnHnrq30OEmBjdOspORe7EyV6nuWeTyjdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC15b3Vu/Zy1idXNpbmVzc21h/bl8yMy0yMTQ5MTUz/ODEzLmpwZz9zZW10/PWFpc19oeWJyaWQ"
    },
    {
      "id": 9,
      "name": "Manish Bansal",
      "email": "manish@example.com",
      "phone": "+91-9876543218",
      "lastInvoice": "2025-03-07",
      "image": "https://imgs.search.brave.com/aeZmsK5eO7oLyBC32zZwRrbsIBZlNtGRGy-zrwT88Mc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1jb21w/ZXRpdGl2ZS1lbXBs/b3llZV8xMDk4LTI4/NzAuanBnP3NlbXQ9/YWlzX2h5YnJpZA"
    },
    {
      "id": 10,
      "name": "Sonal Aggarwal",
      "email": "sonal@example.com",
      "phone": "+91-9876543219",
      "lastInvoice": "2025-03-11",
      "image": "https://imgs.search.brave.com/cofM1CADXQt0YNYPEqH2HB75nbUT2CMGdktmePq0Y-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wcm9mZXNzaW9u/YWwtcGhvdG8tYXR0/cmFjdGl2ZS1taWRk/bGVhZ2VkLWJ1c2lu/ZXNzLW1hbi13aXRo/LWdsYXNzZXMtc2hv/cnQtaGFpci13ZWFy/aW5nXzEwNDUxNzYt/MTYxOTUuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
    }
  ]
  
  export default Data