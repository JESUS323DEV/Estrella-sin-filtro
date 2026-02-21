import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollHandler() {
    const { pathname } = useLocation();

    // Mapeo de rutas a IDs
    const routeToId = {

        '/servicios': 'services',
        '/proyectos': 'projects',
        '/desarrollo-web': 'webServices',
        '/contacto': 'contact'
    };

    useEffect(() => {
        // Si es inicio, scroll arriba directo
        if (pathname === '/' || pathname === '/inicio') {
            window.scrollTo(0, 0);
            return;
        }

        // Para el resto de secciones
        const sectionId = routeToId[pathname];

        if (sectionId) {
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [pathname]);

    return null;
}