import { renderModule } from '@angular/platform-server';
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'productdetails/:id',
    renderMode: RenderMode.Client
  }
];
