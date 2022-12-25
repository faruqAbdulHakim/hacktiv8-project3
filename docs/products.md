### KETERANGAN

- authentication: keterangan untuk setiap enpoint yang diakses harus melakukan login dan memiliki akses token
- authorization: keterangan untuk setiap enpoint hanya dapat diakses oleh admin saja

### post product

- endpoint untuk menambahkan data product
  | method | endpoint | authentication | authorization |
  | ------ | --------- | -------------- | ------------- |
  | POST | /products | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ----------- |
  | title |
  | price |
  | stock |
  | CategoryId |

- response json

```json
{
  "product": {
    "id": 3,
    "title": "Acer Nitro 5",
    "price": "Rp 12.000.000,00",
    "stock": 50,
    "CategoryId": 2,
    "updatedAt": "2022-11-30T09:04:04.773Z",
    "createdAt": "2022-11-30T09:04:04.773Z"
  }
}
```

### get all product

- endpoint untuk menampilkan semua data product
  | method | endpoint | authentication | authorization |
  | ------ | --------- | -------------- | ------------- |
  | GET | /products | Y | Y |

- response json

```json
{
  "products": [
    {
      "id": 4,
      "title": "Asus Vivobook Pro 15",
      "price": "Rp 10.000.000,00",
      "stock": 50,
      "CategoryId": 2,
      "createdAt": "2022-11-30T09:06:22.995Z",
      "updatedAt": "2022-11-30T09:06:22.995Z"
    },
    {
      "id": 5,
      "title": "Samsung S21",
      "price": "Rp 11.000.000,00",
      "stock": 50,
      "CategoryId": 3,
      "createdAt": "2022-11-30T09:06:45.231Z",
      "updatedAt": "2022-11-30T09:06:45.231Z"
    }
  ]
}
```

### edit product

- endpoint untuk mengedit data product sesuai dengan parameter id
  | method | endpoint | authentication | authorization |
  | ------ | ------------------------------ | -------------- | ------------- |
  | PUT | /products/:productId | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ----------- |
  | title |
  | price |
  | stock |

- response json

```json
{
  "product": {
    "id": 7,
    "title": "Iphone 12",
    "price": "Rp 10.000.000,00",
    "stock": 50,
    "CategoryId": 2,
    "updatedAt": "2022-11-30T09:12:59.402Z",
    "createdAt": "2022-11-30T09:10:24.896Z"
  }
}
```

### patch product

- endpoint untuk mengedit field CategoryId pada tabel product sesuai dengan parameter id
  | method | endpoint | authentication | authorization |
  | ------ | ------------------------------ | -------------- | ------------- |
  | PATCH | /products/:productId | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ----------- |
  | CategoryId |

- response json

```json
{
  "product": {
    "id": 7,
    "title": "Iphone 12",
    "price": "Rp 10.000.000,00",
    "stock": 50,
    "CategoryId": 3,
    "updatedAt": "2022-11-30T09:16:45.175Z",
    "createdAt": "2022-11-30T09:10:24.896Z"
  }
}
```

### delete product

- endpoint untuk menghapus data product sesuai dengan parameter id
  | method | endpoint | authentication | authorization |
  | ------ | ------------------------------ | -------------- | ------------- |
  | DELETE | /products/:productId | Y | Y |

- response json

```json
{
  "message": "Product has been successfully deleted";
}
```
