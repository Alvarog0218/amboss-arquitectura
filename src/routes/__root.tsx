import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-[10px] uppercase tracking-[0.4em] text-primary">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-7xl tracking-wider text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl tracking-wide text-foreground">
          Plano no encontrado
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue trasladada a otro proyecto.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-primary px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-wide text-foreground">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-primary px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground hover:bg-primary hover:text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground hover:border-primary"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AMBOSS Arquitectos · Diseño y soluciones" },
      {
        name: "description",
        content:
          "AMBOSS Arquitectos. Diseño arquitectónico, construcción, reformas, legalización, visualización, planimetría, modelado 3D y BIM en Bucaramanga.",
      },
      { name: "author", content: "AMBOSS Arquitectos" },
      { property: "og:title", content: "AMBOSS Arquitectos" },
      {
        property: "og:description",
        content: "Arquitectura para proyectos comerciales, residenciales e inmobiliarios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
