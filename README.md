# test-strategin

# Projet coté client : 

Pour lancer l'application : 
### `npm start`

#### Register : 
http://localhost:3000/register

### Login:
http://localhost:3000/login

### Users : 
Liste des utilisateurs accessible après login
http://localhost:3000/users


# Projet coté serveur ( API ) : 

Pour lancer l'application : 
### `node app`

#### Register : 
Ajouter un nouveau utilisateur 

`POST  http://localhost:4000/register`

Exemple de requête :
```
    POST /register
    Host: localhost:4000
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Body :{
      {
        "email":"mariamabala99@gmail.com",
        "mdp":"12345"
      }
    }
    
```
Exemple de réponse : 
```
    {
    "message": "utilisateur ajouté avec succès !! "
    }
```

#### Login : 
Se connecter

`POST  http://localhost:4000/login`

Exemple de requête :
```
    POST /register
    Host: localhost:4000
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Body :{
      {
        "email":"mariamabala99@gmail.com",
        "mdp":"12345"
      }
    }
    
```
Exemple de réponse  : 
```
    {
        "message": "utilisateur connecté !",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhbWFiYWxhOTlAZ21haWwuY29tIiwiaWF0IjoxNjQ4MTQ1OTUyLCJleHAiOjE2NDgxNDk1NTJ9.eRr7ZswO4wIQMXduvx9mLY_Ixzvom6_lm5BAHCG6s9g",
        "user": {
            "_id": "623cb5943e976ede3c6b0d82",
            "email": "mariamabala99@gmail.com"
        }
    }
````

#### users: 
Liste des utilisateurs

`GET  http://localhost:4000/users`

Exemple de requête :
```
    GET /users
    Host: localhost:4000
    headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhbWFiYWxhOTlAZ21haWwuY29tIiwiaWF0IjoxNjQ4MTQ1OTUyLCJleHAiOjE2NDgxNDk1NTJ9.eRr7ZswO4wIQMXduvx9mLY_Ixzvom6_lm5BAHCG6s9g"
            }
    }
    
```
Exemple de réponse  : 
```
    {
    "users": [
        {
            "_id": "623c9627ed8a2e6c659f21eb",
            "email": "mariamabala@99gmail.com",
            "mdp": "$2a$10$.dHO71sobVE/9fMnG2kg2.pvMUDcriULli14j3l0dLHYjlxfJJ.x2",
            "__v": 0
        },
        {
            "_id": "623cb5943e976ede3c6b0d82",
            "email": "mariamabala99@gmail.com",
            "mdp": "$2a$10$kjrXd.SIeaKCyYQ1xs25jeBpRp/wR7QLwa.fHIIuU7yNNqGOq4h6a",
            "__v": 0
        }
    ]
  }
````
