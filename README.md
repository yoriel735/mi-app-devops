# Mi App DevOps — Node.js + TypeScript

## ¿Qué hace este proyecto?
Aplicación web en Node.js con TypeScript, desplegada en contenedores Docker
con pipeline CI/CD automatizado y monitorización con Prometheus y Grafana.

## Tecnologías utilizadas
- **Aplicación**: Node.js 20 + TypeScript + Express
- **Contenedores**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Monitorización**: Prometheus + Grafana

## Cómo ejecutar localmente
```bash
npm install
npm run dev
```

## Cómo construir y desplegar con Docker
```bash
docker compose up -d
```

## Accesos
| Servicio    | URL                    |
|-------------|------------------------|
| Aplicación  | http://localhost:3000  |
| Prometheus  | http://localhost:9090  |
| Grafana     | http://localhost:3001  |

## Pipeline CI/CD
El pipeline se ejecuta automáticamente en cada push a `main`:
1. Checkout del código
2. Instalación de dependencias
3. Compilación TypeScript
4. Ejecución de tests
5. Construcción de imagen Docker


## DIagrama de despliegue
┌─────────────────────────────────────────┐
│           GitHub Repository             │
│  ┌─────────────────────────────────┐   │
│  │      GitHub Actions Pipeline    │   │
│  │  checkout → build → test →      │   │
│  │  docker build → deploy          │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │ push/deploy
┌──────────────────▼──────────────────────┐
│           Ubuntu VM / Servidor          │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │  mi-app  │ │Prometheus│ │Grafana │  │
│  │ :3000    │ │  :9090   │ │ :3001  │  │
│  └──────────┘ └──────────┘ └────────┘  │
│         Docker Compose Network          │
└─────────────────────────────────────────┘

![Diagrama de despliegue](docs/diagrama-despliegue.png)
