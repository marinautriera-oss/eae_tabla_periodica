# Tabla Periódica EAE - Backend

API REST desarrollada con Node.js + Express para la aplicación de Tabla Periódica interactiva.

## Tecnologías

- Node.js + Express
- MySQL (Railway)
- JWT para autenticación
- Bcrypt para hash de contraseñas
- Nodemailer para envío de emails
- Arquitectura en capas: routes → controllers → services → repositories

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/marinautriera-oss/eae_tabla_periodica.git
cd eae_tabla_periodica
```

2. Instalar dependencias:
```bash
npm install
```

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
```

4. Correr el servidor:
```bash
npm run dev
```

El servidor corre en `http://localhost:8080`

## Endpoints

### Autenticación

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | `/auth/register` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |
| GET | `/auth/verify/:token` | Verificar email | No |

#### POST `/auth/register`
```json
{
  "nombre": "Marina",
  "email": "marina@gmail.com",
  "contraseña": "123456"
}
```

#### POST `/auth/login`
```json
{
  "email": "marina@gmail.com",
  "contraseña": "123456"
}
```
Respuesta: `{ "token": "eyJ..." }`

### Elementos

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/elements` | Listar todos los elementos | No |
| GET | `/elements/:id` | Obtener elemento por ID | No |
| POST | `/elements` | Crear elemento | Sí |
| PUT | `/elements/:id` | Actualizar elemento | Sí |
| DELETE | `/elements/:id` | Eliminar elemento | Sí |

#### POST/PUT `/elements`
```json
{
  "NOMBRE": "Hidrógeno",
  "SIMBOLO": "H",
  "NUMERO_ATOMICO": 1,
  "MASA_ATOMICA": 1.008,
  "GRUPO": 1,
  "PERIODO": 1,
  "CATEGORIA": "NO METAL"
}
```

### Favoritos (requieren JWT)

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| GET | `/favoritos` | Listar favoritos del usuario | Sí |
| POST | `/favoritos/:elementoId` | Agregar a favoritos | Sí |
| DELETE | `/favoritos/:elementoId` | Quitar de favoritos | Sí |

> Para rutas con Auth, incluir header: `Authorization: Bearer <token>`

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