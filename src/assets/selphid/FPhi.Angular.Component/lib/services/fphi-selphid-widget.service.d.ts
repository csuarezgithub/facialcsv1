import { RendererFactory2 } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FPhiSelphIdConfiguration } from "../models/facephi-selphid-configuration";
export declare class FPhiSelphIdWidgetService {
    private document;
    private rendererFactory;
    private http;
    private static readonly licenseCheckUrl;
    private _renderer;
    private _assetsBasePath;
    private _fPhiWidgetConfiguration;
    private _fPhiWidget;
    private fPhiSelphIdNamespace;
    private readonly fPhiWidgetScriptPath;
    constructor(document: any, rendererFactory: RendererFactory2, http: HttpClient);
    /**
     * Realiza la carga dinámica del recurso javascript del widget web.
     * @param basePath Ruta base de la carpeta de los ficheros del widget.
     */
    loadControl(basePath: string): Observable<FPhiSelphIdWidgetService>;
    /**
     * Elimina los recursos javascript del widget incluidos en el DOM de la página.
     */
    removeControl(): FPhiSelphIdWidgetService;
    /**
     * Crea una instancia del widget web nativo con los datos de configuración indicados.
     * @param config Datos de configuración del widget.
     */
    createUserControl(config: FPhiSelphIdConfiguration): FPhiSelphIdWidgetService;
    /**
     * Inicia el widget.
     */
    startUserControl(): FPhiSelphIdWidgetService;
    /**
     * Detiene la ejecución del widget.
     */
    stopUserControl(): FPhiSelphIdWidgetService;
    /**
     * Verifica que el entorno de ejecución actual está correctamente licenciado para el uso de las capacidades de detección del widget.
     */
    isWidgetLicensed(): Observable<boolean>;
}
