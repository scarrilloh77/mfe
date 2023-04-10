import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  // 'el' es el elemento HTML
  const app = createApp(Dashboard);
  app.mount(el); // Así es como le decimos a vue que realmente muestre un componente dentro del DOM.
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
