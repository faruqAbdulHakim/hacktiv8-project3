### KETERANGAN

- authentication: keterangan untuk setiap enpoint yang diakses harus melakukan login dan memiliki akses token
- authorization: keterangan untuk setiap enpoint hanya dapat diakses oleh admin saja

### post category

- endpoint untuk menambahkan data category
  | method | endpoint | authentication | authorization |
  | ------ | --------- | -------------- | ------------- |
  | POST | /categories | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ----------- |
  | type |

- response json

```json
{
  "category": {
    "id": 2,
    "type": "Laptop",
    "updatedAt": "2022-11-30T08:43:51.298Z",
    "createdAt": "2022-11-30T08:43:51.298Z",
    "sold_product_amount": 0
  }
}
```

### get all category

- endpoint untuk menampilkan semua data category
  | method | endpoint | authentication | authorization |
  | ------ | --------- | -------------- | ------------- |
  | GET | /categories | Y | Y |

- response json

```json
{
  "categories": [
    {
      "id": 1,
      "type": "crewneck",
      "sold_product_amount": 1,
      "createdAt": "2022-11-28T03:31:11.134Z",
      "updatedAt": "2022-11-28T03:36:49.492Z",
      "Products": [
        {
          "id": 2,
          "title": "crewneck anime version",
          "price": 210000,
          "stock": 19,
          "CategoryId": 1,
          "createdAt": "2022-11-28T03:32:13.455Z",
          "updatedAt": "2022-11-28T03:36:49.481Z"
        }
      ]
    }
}
```

### edit category

- endpoint untuk mengedit data category sesuai dengan parameter id
  | method | endpoint | authentication | authorization |
  | ------ | ------------------------------ | -------------- | ------------- |
  | PATCH | /categories/:categoryId | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | ----------- |
  | type |

- response json

```json
{
  "category": {
    "id": 3,
    "type": "Smartphone",
    "sold_product_amount": 0,
    "createdAt": "2022-11-30T08:46:12.153Z",
    "updatedAt": "2022-11-30T08:53:33.140Z"
  }
}
```

### delete category

- Mendelete data category sesuai dengan parameter id
  | method | endpoint | authentication | authorization |
  | ------ | ------------------------------ | -------------- | ------------- |
  | DELETE | /categories/:categoryId | Y | Y |

- response json

```json
{
  "message": "Category has been successfully deleted";
}
```

