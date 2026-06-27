# Tabla Periódica EAE - Backend

API REST desarrollada con Node.js + Express para la aplicación de Tabla Periódica interactiva.

## Tecnologías

- Node.js + Express
- MySQL (Railway)
- JWT para autenticación
- Bcrypt para hash de contraseñas
- Nodemailer para envío de emails
- Arquitectura en capas: routes → controllers → services → repositories

## Despliegue público

URL de la API: https://eae-tabla-periodica.vercel.app

## Instalación

1. Clonar el repositorio:
bash
git clone https://github.com/marinautriera-oss/eae_tabla_periodica.git
cd eae_tabla_periodica


2. Instalar dependencias:
bash
npm install


3. Crear archivo `.env` con las siguientes variables:
```env
DB_HOST=tu_host_de_mysql
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_de_datos
DB_PORT=tu_puerto
JWT_SECRET=tu_secreto_jwt
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
FRONTEND_URL=http://localhost:5173


4. Correr el servidor:
bash
npm run dev


El servidor corre en `http://localhost:8080`

## Endpoints

### Autenticación

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/auth/register` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |
| GET | `/auth/verify/:token` | Verificar email | No |

#### POST `/auth/register`
Request:
```json
{
  "nombre": "Marina",
  "email": "marina@gmail.com",
  "contraseña": "123456"
}
```
Respuesta `201`:
```json
{ "message": "Usuario creado", "id": 1 }
```

#### POST `/auth/login`
Request:
```json
{
  "email": "marina@gmail.com",
  "contraseña": "123456"
}
```
Respuesta `200`:
```json
{ "token": "eyJ..." }
```

#### GET `/auth/verify/:token`
Respuesta `200`:
```json
{ "message": "Cuenta verificada. Ya podés iniciar sesión." }
```

---

### Elementos

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/elements` | Listar todos los elementos | No |
| GET | `/elements/:id` | Obtener elemento por ID | No |
| POST | `/elements` | Crear elemento | Sí |
| PUT | `/elements/:id` | Actualizar elemento | Sí |
| DELETE | `/elements/:id` | Eliminar elemento | Sí |

#### GET `/elements`
Respuesta `200`:
```json
[
  {
    "id": 1,
    "nombre": "Hidrógeno",
    "simbolo": "H",
    "numero_atomico": 1,
    "masa_atomica": 1.008,
    "grupo": 1,
    "periodo": 1,
    "categoria": "NO METAL",
    "foto_url": null,
    "descripcion": null
  }
]
```

#### GET `/elements/:id`
Respuesta `200`:
```json
{
  "id": 1,
  "nombre": "Hidrógeno",
  "simbolo": "H",
  "numero_atomico": 1,
  "masa_atomica": 1.008,
  "grupo": 1,
  "periodo": 1,
  "categoria": "NO METAL",
  "foto_url": null,
  "descripcion": null
}
```

#### POST `/elements` — requiere `Authorization: Bearer <token>`
Request:
```json
{
  "NOMBRE": "Hidrógeno",
  "SIMBOLO": "H",
  "NUMERO_ATOMICO": 1,
  "MASA_ATOMICA": 1.008,
  "GRUPO": 1,
  "PERIODO": 1,
  "CATEGORIA": "NO METAL",
  "FOTO_URL": "https://url-imagen.com/h.png",
  "DESCRIPCION": "El elemento más abundante del universo."
}
```
> `FOTO_URL` y `DESCRIPCION` son opcionales.

Respuesta `201`:
```json
{ "message": "Elemento creado", "id": 1 }
```

#### PUT `/elements/:id` — requiere `Authorization: Bearer <token>`
Request: mismo body que POST.

Respuesta `200`:
```json
{ "message": "Elemento actualizado" }
```

#### DELETE `/elements/:id` — requiere `Authorization: Bearer <token>`
Respuesta `200`:
```json
{ "message": "Elemento eliminado" }
```

---

### Favoritos

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/favoritos` | Listar favoritos del usuario | Sí |
| POST | `/favoritos/:elementoId` | Agregar a favoritos | Sí |
| DELETE | `/favoritos/:elementoId` | Quitar de favoritos | Sí |

> Todas las rutas requieren header: `Authorization: Bearer <token>`

#### GET `/favoritos`
Respuesta `200`:
```json
[
  {
    "id": 1,
    "nombre": "Hidrógeno",
    "simbolo": "H",
    "numero_atomico": 1,
    "masa_atomica": 1.008,
    "grupo": 1,
    "periodo": 1,
    "categoria": "NO METAL"
  }
]
```

#### POST `/favoritos/:elementoId`
Respuesta `201`:
```json
{ "message": "Agregado a favoritos", "id": 1 }
```

#### DELETE `/favoritos/:elementoId`
Respuesta `200`:
```json
{ "message": "Eliminado de favoritos" }
```

---

## Estructura del proyecto

```
src/
├── config/          # Configuración de base de datos
├── controllers/     # Manejo de request/response
├── middleware/      # Auth JWT, validaciones
├── repositories/    # Acceso a base de datos
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
└── utils/           # Email, generación de tokens
```

## Credenciales de prueba

### Usuario Estudiante (ya verificado)
- Email: ma.utriera@gmail.com
- Password: 654321

### Usuario Admin (ya verificado)
- Email: marina.utriera@gmail.com
- Password: 123456