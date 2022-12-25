### register user

- role customer hanya role yang digunakan untuk melakukan transaction
- role admin hanya role yang digunakan untuk mengakses data product dan category

- digunakan untuk register user
  | method | endpoint | authentication | role |
  | ------ | --------------- | -------------- | -------- |
  | POST | /users/register | N | customer |

- value yang dikirimkan pada request body
  | body (json) |
  | --------- |
  | full_name |
  | password |
  | gender |
  | email |

- response json

```json
{
  user: {
    "id": 1
    "full_name": "Perdana Putro Harwanto",
    "email": "perdanaph@mail.com",
    "gender": "male",
    "balance": "Rp 0,00"
    "createdAt": "2022-11-30T08:15:32.150Z"
  }
}
```

### login user

- digunakan untuk login user
  | method | endpoint | authentication | role |
  | ------ | --------------- | -------------- | -------- |
  | POST | /users/login | N | customer |

- value yang dikirimkan pada request body
  | body (json) |
  | -------- |
  | email |
  | password |

- response json

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx"
}
```

### login admin

- digunakan untuk login user dengan role admin
  | method | endpoint | authentication | role |
  | ------ | --------------- | -------------- | -------- |
  | POST | /users/login | N | admin |

- value yang dikirimkan pada request body
  | body (json) |
  | -------- |
  | email |
  | password |

- response json

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx"
}
```

### update user

- digunakan untuk update data user
  | method | endpoint | authentication | autorization |
  | ------ | -------- | -------------- | ------------ |
  | PUT | /users | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | --------- |
  | full_name |
  | email |

- response json

```json
{
  "user": {
    "id": 3,
    "full_name": "Perdana Putro H",
    "email": "perdana@mail.com",
    "createdAt": "2022-11-30T08:15:32.150Z",
    "updatedAt": "2022-11-30T08:24:29.241Z"
  }
}
```

### delete user

- digunakan untuk delete data user
  | method | endpoint | authentication | autorization |
  | ------ | ------------------------ | -------------- | ------------ |
  | DELETE | /users/ | Y | Y |

- response json

```json
{
  "message": "Your account has been successfully deleted";
}
```

### patch balance

- digunakan untuk patch data topup user
  | method | endpoint | authentication | autorization |
  | ------ | ------------------------ | -------------- | ------------ |
  | PATCH | /users/topup | Y | Y |

- value yang dikirimkan pada request body
  | body (json) |
  | --------- |
  | balance |

- response json

```json
{
  "message": "Your balance has been successfully updated to Rp 50.000.000,00"
}
```
