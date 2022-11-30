# hacktiv8-project3

### ERD

```mermaid
erDiagram
  Users {
    int id
    string full_name
    string email
    string password
    string gender
    string role
    int balance
    date createdAt
    date updatedAt
  }
  Products {
    int id
    string title
    int price
    int stock
    int CategoryId
    date createdAt
    date updatedAt
  }
  Categories {
    int id
    string type
    int sold_product_amount
    date createdAt
    date updatedAt
  }
  TransactionHistories {
    int id
    int ProductId
    int UserId
    int quantity
    int total_price
    date createdAt
    date updatedAt
  }
  Products }|--|| Categories: ""
  TransactionHistories }|--|| Users : ""
  TransactionHistories }|--|| Products : ""
```

## DOCUMENTATION RESTFULL API

<p> Dokumentasi untuk RESTFULL API project 3 - Hacktiv8 Toko Belanja </p>

<p> Project ini digunakan sebagai syarat memenuhi kebutuhan akademik pada program MSIB kampus merdeka dengan mitra Hacktiv8 </p>

## CLONE REPOSITORY

```bash
$ git clone <remote_repo> (ex: git clone https://github.com/faruqAbdulHakim/hacktiv8-project3)
```

## HOW TO RUN

```bash
$ npm install (to install dependencies on the project stored in package.json)
# step pertama : rename .env.example to .env
# step kedua : konfigrasi file .env isi PORT dan SECRET_TOKEN
# step ketiga : konfigurasi direktori config dan sesuaikan dengan konfigurasi postgre pada device masing-masing
```

## HOW TO SETUPDATABASE

<p>Buat database postgre menggunakan ORM Sequelize</p>

```bash
$ npx sequelize db:create (to create database)
```

```bash
$ npx sequelize db:migrate (to migration table on database)
```

```bash
$ npx sequelize db:seed (to seeding value on database)
```

| name                     | docs                                                |
| ------------------------ | --------------------------------------------------- |
| USERS DOCS               | [Users](./docs/users.md)                            |
| CATEGORY DOCS            | [Category](./docs/category.md)                      |
| PRODUCTS DOCS            | [Products](./docs/products.md)                      |
| TRANSACTION HISTORY DOCS | [Transaktion History](./docs/transactionHistory.md) |

## LINK DEPLOYMENT

```bash
https://tokobelanja-restfull-api.up.railway.app/
```
