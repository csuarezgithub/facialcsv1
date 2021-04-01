import { RendererFactory2 } from "@angular/core";
import { Observable } from "rxjs";
import { FPhiSelphiConfiguration } from "../models/facephi-selphi-configuration";
export declare class FPhiSelphiWidgetService {
    private document;
    private rendererFactory;
    private _renderer;
    private _assetsBasePath;
    private _fPhiWidgetConfiguration;
    private _fPhiWidget;
    private fPhiSelphiNamespace;
    private readonly fPhiWidgetScriptPath;
    constructor(document: any, rendererFactory: RendererFactory2);
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param basePath Ruta base de la carpeta de los ficheros del widget.
     */
    loadControl(basePath: string): Observable<FPhiSelphiWidgetService>;
    /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     */
    removeControl(): FPhiSelphiWidgetService;
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param config Datos de configuración del widget.
     */
    createUserControl(config: FPhiSelphiConfiguration): FPhiSelphiWidgetService;
    /**
     * Inicia el widget.
     */
    startUserControl(): FPhiSelphiWidgetService;
    /**
     * Detiene la ejecución del widget.
     */
    stopUserControl(): FPhiSelphiWidgetService;
}
