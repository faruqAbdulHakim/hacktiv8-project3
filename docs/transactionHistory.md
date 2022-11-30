### KETERANGAN

- authentication: keterangan untuk setiap enpoint yang diakses harus melakukan login dan memiliki akses token
- authorization: keterangan untuk setiap enpoint yang diakses harus milik user tersebut

### Create transactions

- endpoint untuk menambah data transactions yang dapat dilakukan oleh user yang sudah login
  | method | endpoint | authentication | authorization |
  | ------ | ------------- | -------------- | ------------- |
  | POST | /transactions | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ---------------- |
  | productId |
  | quantity |

- response json

```json
{
  "message": "You have successfully purchase the product",
  "transactionBill": {
    "total_price": "Rp 10.000.000,00",
    "quantity": 1,
    "product_name": "Asus Vivobook Pro 15"
  }
}
```

### Get transactions user

- endpoint untuk menampilkan semua data transactions yang dilakukan oleh user tersebut
  | method | endpoint | authentication | authorization |
  | ------ | ------------- | -------------- | ------------- |
  | GET | /transactions/user | Y | Y |

- response json

```json
{
  "transactionHistories": [
    {
      "ProductId": 4,
      "UserId": 3,
      "quantity": 1,
      "total_price": "Rp 10.000.000,00",
      "createdAt": "2022-11-30T09:24:57.212Z",
      "updatedAt": "2022-11-30T09:24:57.212Z",
      "Product": {
        "id": 4,
        "title": "Asus Vivobook Pro 15",
        "price": "Rp 10.000.000,00",
        "stock": 49,
        "CategoryId": 2
      }
    },
    {
      "ProductId": 6,
      "UserId": 3,
      "quantity": 2,
      "total_price": "Rp 20.000.000,00",
      "createdAt": "2022-11-30T09:26:54.855Z",
      "updatedAt": "2022-11-30T09:26:54.855Z",
      "Product": {
        "id": 6,
        "title": "Google pixel 6",
        "price": "Rp 10.000.000,00",
        "stock": 48,
        "CategoryId": 3
      }
    }
  ]
}
```

### Get transactions admin

- endpoint untuk menampilkan semua data transactions oleh admin
  | method | endpoint | authentication | authorization |
  | ------ | ------------- | -------------- | ------------- |
  | GET | /transactions/admin | Y | Y |

- response json

```json
{
  "transactionHistories": [
    {
      "ProductId": 4,
      "UserId": 3,
      "quantity": 1,
      "total_price": "Rp 10.000.000,00",
      "createdAt": "2022-11-30T09:24:57.212Z",
      "updatedAt": "2022-11-30T09:24:57.212Z",
      "Product": {
        "id": 4,
        "title": "Asus Vivobook Pro 15",
        "price": "Rp 10.000.000,00",
        "stock": 49,
        "CategoryId": 2
      },
      "User": {
        "id": 3,
        "email": "perdana@mail.com",
        "balance": "Rp 20.000.000,00",
        "gender": "male",
        "role": "customer"
      }
    },
    {
      "ProductId": 2,
      "UserId": 2,
      "quantity": 1,
      "total_price": "Rp 210.000,00",
      "createdAt": "2022-11-28T03:36:49.496Z",
      "updatedAt": "2022-11-28T03:36:49.496Z",
      "Product": {
        "id": 2,
        "title": "crewneck anime version",
        "price": "Rp 210.000,00",
        "stock": 19,
        "CategoryId": 1
      },
      "User": {
        "id": 2,
        "email": "sarah@mail.com",
        "balance": "Rp 40.000,00",
        "gender": "female",
        "role": "customer"
      }
    }
  ]
}
```

### Get transactions admin

- endpoint untuk menampilkan semua data transactions oleh admin
  | method | endpoint | authentication | authorization |
  | ------ | ------------- | -------------- | ------------- |
  | GET | /transactions/:transactionId | Y | Y |

- response json

```json
{
  "ProductId": 6,
  "UserId": 3,
  "quantity": 2,
  "total_price": "Rp 20.000.000,00",
  "createdAt": "2022-11-30T09:26:54.855Z",
  "updatedAt": "2022-11-30T09:26:54.855Z",
  "Product": {
    "id": 6,
    "title": "Google pixel 6",
    "price": "Rp 10.000.000,00",
    "stock": 48,
    "CategoryId": 3
  }
}
```
