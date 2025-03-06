# 🚀 Proyecto Ionic Angular

## 📌 Descripción
Este proyecto está desarrollado con **Ionic Angular** y sigue una arquitectura modular bien organizada. Se compone de diferentes módulos y servicios que permiten gestionar funcionalidades como productos, carrito de compras y pagos.

---

## 📂 Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

```
src/
│── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── cart-item/
│   │   ├── filter-dropdown/
│   │   ├── header/
│   │   ├── product-card/
│   │
│   ├── core/                # Servicios, modelos y módulos compartidos
│   │   ├── models/
│   │   ├── services/
│   │   ├── shared/
│   │
│   ├── modules/             # Módulos organizados por funcionalidad
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/
│   │
│   ├── pages/               # Páginas independientes
│   │   ├── splash/
│
│── assets/                  # Archivos estáticos (íconos, imágenes)
│── environments/            # Configuración de entornos
│── theme/                   # Estilos globales
│── main.ts                  # Punto de entrada principal
│── app.module.ts            # Módulo principal
│── app-routing.module.ts    # Rutas principales
```

---

## 📦 Módulos Principales

### 🛒 **Carrito de Compras (`cart/`)**
- `cart.module.ts` → Módulo del carrito.
- `cart-routing.module.ts` → Configuración de rutas.
- `cart.component.ts` → Componente principal del carrito.

### 💳 **Pago (`checkout/`)**
- `checkout.module.ts` → Módulo de pago.
- `checkout-routing.module.ts` → Configuración de rutas.
- `checkout.component.ts` → Componente de pago.
- `summary.component.ts` → Resumen de compra.

### 🛍 **Productos (`products/`)**
- `product.module.ts` → Módulo de productos.
- `product-routing.module.ts` → Configuración de rutas.
- `home.component.ts` → Pantalla principal de productos.
- `product-detail.component.ts` → Detalle del producto.

---

## ⚙️ Servicios Principales (`core/services/`)

- `api.service.ts` → Manejo de peticiones HTTP.
- `cart.service.ts` → Lógica del carrito de compras.

---

## 🌍 Configuración de Entornos (`environments/`)
- `environment.ts` → Configuración para desarrollo.
- `environment.prod.ts` → Configuración para producción.

---

## 📜 Instalación y Ejecución
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/proyecto-ionic.git
cd proyecto-ionic
```
### 2️⃣ Instalar dependencias
```bash
npm install
```
### 3️⃣ Ejecutar la aplicación
```bash
ionic serve
```
---

## 📌 Notas Importantes
- **Asegúrate de tener instalado Ionic CLI** antes de ejecutar el proyecto.
- **Personaliza las variables en `environment.ts`** según tu configuración.
- **Usa `ionic build` para generar archivos listos para producción.**

---

## 🛠 Tecnologías Usadas
- **Ionic Angular**
- **TypeScript**
- **Router**
- **Firebase / API externa (opcional)**

---
