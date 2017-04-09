/**
 * Exception class for better exception handling
 */
declare namespace ajs {
    class Exception extends Error {
        protected _parentException: Exception;
        constructor(message?: string, parentException?: Exception);
    }
}
declare namespace ajs {
    /** Thrown when the start is called before the application is configured */
    class ApplicationNotConfiguredException extends Error {
    }
    /** Thrown the passed application constructor is not a function */
    class AppConstructorMustBeAFunctionException extends Error {
    }
}
/**
 * The top level Ajs Framework namespace
 * Contains the static Framework class, Framework exceptions and Ajs
 * configuration template
 */
declare namespace ajs {
    /**
     * Ajs framework class provides the complete framework functionality.
     * Initialization is called automatically from the ajs boot when the
     * window.onload event is fired. The framework, based on the boot configuration
     * file, initializes the user application class inherited from the ajs.app.Application
     * and starts it.
     */
    class Framework {
        /** Contains last error caused by the framework components
         *  TODO: Think about the global / application error handler
         */
        protected static _lastError: Error;
        /** Returns the last error caused by the framework component
         *  TODO: Think about the global / application error handler
         */
        /**
         * Should be used internally by framework components only to set the error value
         * TODO: Think about the global / application error handler
         * TODO: Error handling should be done just by triggering and catching exceptions
         */
        static lastError: Error;
        /** Stores the framework configuration loaded during the index.html load */
        protected static _config: ajs.IAjsConfig;
        /** Returns the framework configuration object */
        static readonly config: ajs.IAjsConfig;
        /** Stores the application configuration */
        protected static _appConfig: ajs.app.IApplicationInfo;
        /** Returns the application configuration */
        static readonly appConfig: ajs.app.IApplicationInfo;
        /** Stores the application object automatically instantiated from the constructor passed in the configuration */
        protected static _application: ajs.app.Application;
        /** Returns the application object */
        static readonly application: ajs.app.Application;
        /** Stores the ResourceManager object instantiated automatically during the framework intitialization */
        protected static _resourceManager: ajs.resources.ResourceManager;
        /** Returns the ResourceManager object */
        static readonly resourceManager: ajs.resources.ResourceManager;
        /** Stores the StateManager object instantiated automatically during the framework intitialization */
        protected static _stateManager: ajs.state.StateManager;
        /** Returns the StateManager object */
        static readonly stateManager: ajs.state.StateManager;
        /** Stores the ResourceManager object instantiated automatically during the framework intitialization */
        protected static _router: ajs.routing.Router;
        /** Returns the ResourceManager object */
        static readonly router: ajs.routing.Router;
        /** Stores the Navigator object instantiated automatically during the framework intitialization */
        protected static _navigator: ajs.navigation.Navigator;
        /** Returns the Navigator object */
        static readonly navigator: ajs.navigation.Navigator;
        /** Stores the ViewComponentManager object instantiated automatically during the framework intitialization */
        protected static _viewComponentManager: ajs.mvvm.viewmodel.ViewComponentManager;
        /** Returns the ViewComponentManager object */
        static readonly viewComponentManager: ajs.mvvm.viewmodel.ViewComponentManager;
        /** Stores the TemplateManager object instantiated automatically during the framework intitialization */
        protected static _templateManager: ajs.templating.TemplateManager;
        /** Returns the TemplateManager object */
        static readonly templateManager: ajs.templating.TemplateManager;
        /** Stores the ModelManager object instantiated automatically during the framework initialization */
        protected static _modelManager: ajs.mvvm.model.ModelManager;
        /** Returns the ModuleManager object */
        static readonly modelManager: ajs.mvvm.model.ModelManager;
        /** Stores the View object instantiated automatically during the framework intitialization */
        protected static _view: ajs.mvvm.view.View;
        /** Returns the View object */
        static readonly view: ajs.mvvm.view.View;
        /** Basic framework initialization is called automatically from the boot when window.onload event occurs */
        static initialize(config: IAjsConfig): void;
        /**
         * Configure the ajs application before it is instanced
         * Called automatically from boot when window.onload event occurs
         * @param config Application configuration file
         */
        static configureApplication(config: ajs.app.IApplicationInfo): void;
        /**
         * Instantiate and initialize the user application and start it.
         * Called automatically from boot when window.onload event occurs
         * @throws ApplicationNotConfiguredException Thrown when the start is called before the application is configured
         * @throws AppConstructorMustBeAFunctionException Thrown when the passed application constructor is not a function
         */
        static start(): void;
        /**
         * TODO: Think about the global / application error handler
         * @param msg
         * @param url
         * @param line
         * @param col
         * @param error
         */
        protected static _errorHandler(msg: string | Error, url: string, line: number, col: number, error: Error): void;
    }
}
declare namespace ajs {
    /** Interface for the Ajs Framework configuration object
     * <p>
     * The configuration is collected by the boot loader from the ajs.boot.config script
     * where the #see {ajs.boot.IGetAjsConfig ajs.boot.getAjsConfig} function must be
     * implemented and return the AJS framework configuration.
     * </p>
     * <p>
     * Using the ajs configuration file it is possible to configure various components
     * of the Ajs framework to work as required. Ajs configuration is usually stored in the
     * ajs.boot.config together with the resources list to be loaded during the boot process
     * and application config. For additional details see #see {ajs.boot} namespace or the
     * development guide.
     * </p>
     * <p>
     * The following example shows how to configure all components of the Ajs Framework:
     * </p>
     * #example /resources/examples/ajs.boot.config.ts
     * <p>
     * TODO: Review necessary options
     * </p>
     */
    interface IAjsConfig {
        /** TODO: Remove? : Specifies if errors occured should be logged to the console */
        logErrors?: boolean;
        /** TODO: Remove? : Specifies if errors occured should be shown in the ajs error page to end users */
        showErrors?: boolean;
        /**
         * Configuration of the debugging console and its modules
         * If ommited, no debugging will be performed
         */
        debugging?: ajs.dbg.IConsoleConfig;
        boot?: ajs.boot.IBootConfig;
        /**
         * Configuration of the resource manager
         * For additional details #see {ajs.resources.IResourceManagerConfig}
         */
        resourceManager?: ajs.resources.IResourceManagerConfig;
        /**
         * Redirections configuration
         * For additional details #see {ajs.navigation.IRedirection}
         */
        navigator?: ajs.navigation.IRedirection[];
        /**
         * Routes configuration
         * For additional details #see {ajs.routing.IRoutes}
         */
        router?: ajs.routing.IRoutes[];
        /**
         * View configuration
         * For additional details #see {ajs.mvvm.view.IViewConfig}
         */
        view?: ajs.mvvm.view.IViewConfig;
    }
}
declare namespace ajs.utils {
    class Base64 {
        protected static lookup: any[];
        protected static revLookup: any[];
        protected static Arr: ArrayConstructor | Uint8ArrayConstructor;
        protected static code: string;
        static initialize(): void;
        protected static placeHoldersCount(b64: any): 0 | 2 | 1;
        protected static byteLength(b64: any): number;
        static toByteArray(b64: any): any;
        protected static tripletToBase64(num: any): any;
        protected static encodeChunk(uint8: any, start: any, end: any): string;
        static fromByteArray(uint8: any): string;
    }
}
declare namespace ajs.utils {
    interface IDeepMergeOptions {
        arrayMerge?: Function;
        clone?: boolean;
    }
    class DeepMerge {
        protected static isMergeableObject(val: any): boolean;
        protected static emptyTarget(val: any): Array<any> | Object;
        protected static cloneIfNecessary(value: any, optionsArgument: IDeepMergeOptions): any;
        protected static defaultArrayMerge(target: Array<any>, source: Array<any>, optionsArgument: any): any;
        protected static mergeObject(target: any, source: any, optionsArgument: any): {};
        static merge(target: any, source: any, optionsArgument?: IDeepMergeOptions): any;
    }
}
declare namespace ajs.utils {
    let HTMLTags: string[];
}
declare namespace ajs.utils {
}
declare namespace ajs.utils {
    class Obj {
        static assign(target: any, varArgs: any): any;
    }
}
declare namespace ajs.utils {
    /**
     * Helper to determine if variable is defined
     * @param object Object to be checked
     */
    function defined(object: any): boolean;
    /**
     * Helper to determine if the variable is null
     * @param object Object to be checked
     */
    function isNull(object: any): boolean;
    /**
     * Helper to determine if the variable defined and not null
     * @param object Object to be checked
     */
    function definedAndNotNull(object: any): boolean;
    /**
     * Returns name of the constructor of the object
     * @param obj Object to be checked
     */
    function getClassName(obj: Object): string;
    /**
     * Returns name of the function
     * @param fn Function which name has to be returned
     */
    function getFunctionName(fn: Function): string;
    /**
     * Returns the minimum usefull date (Thu Jan 01 1970 01:00:00 GMT+0100)
     */
    function minDate(): Date;
    /**
     * Returns the maximum date (Sat Sep 13 275760 02:00:00 GMT+0200)
     */
    function maxDate(): Date;
    function ie10UTCDate(date: Date): string;
    /**
     * Measures the deep size of object. Levels to be measured could be limited
     * @param object Object to be measured
     * @param levels Number of children objects to measure
     * @param level Current level used internally by the function
     */
    function sizeOf(object: any, levels?: number, level?: number): number;
    /**
     * Escapes string to be usable in the regullar expression
     * @param str String to be escaped
     */
    function escapeRegExp(str: string): string;
    /**
     * Replaces all occurences of the searchValue by replaceValue in str
     * @param str String to be searched for occurences of searchValue and replaced with replaceValue
     * @param searchValue Value to be replaced
     * @param replaceValue Value to be used as replacement
     */
    function replaceAll(str: string, searchValue: string, replaceValue: string): string;
}
declare namespace ajs.ui {
    class ErrorPage {
        protected _errorScreen: HTMLElement;
        protected _label: HTMLElement;
        protected _errorLabel: HTMLElement;
        protected _userAction: HTMLElement;
        protected _errorCode: HTMLElement;
        protected _message: HTMLElement;
        protected _stackTrace: HTMLElement;
        hide(): void;
        show(error: IErrorPageContent): void;
    }
    let errorPage: ErrorPage;
}
declare namespace ajs.ui {
    interface IErrorPageContent {
        label: string;
        errorCode: string;
        errorLabel?: string;
        errorMessage?: string;
        errorTrace?: string;
        userAction?: string;
    }
}
declare namespace ajs.ui {
    class ProgressBar {
        protected _total: number;
        total: number;
        protected _current: number;
        current: number;
        protected _update(): void;
        resourceLoading(label: string): void;
        resourceLoaded(e: string): void;
        show(): void;
        hide(): void;
    }
    let progressBar: ProgressBar;
}
declare namespace ajs.ui {
    class RenderTarget {
        protected _renderTarget: HTMLElement;
        hide(): void;
        show(): void;
    }
    let renderTarget: RenderTarget;
}
declare namespace ajs.templating {
    class FailedToLoadTemplatesException extends ajs.Exception {
    }
    class MissingTemplateNameException extends ajs.Exception {
    }
    class MissingVisualComponentNameException extends ajs.Exception {
    }
    class FailedToLoadTemplateStylesheetsException extends ajs.Exception {
    }
}
declare namespace ajs.templating {
    interface ITemplatesCollection {
        [name: string]: Template;
    }
}
declare namespace ajs.templating {
    interface IVisualComponent {
        component: HTMLElement;
        templateName: string;
        template: Template;
        children: IVisualComponentChildren;
        placeholders: IVisualComponentPlaceholderCollection;
    }
}
declare namespace ajs.templating {
    interface IVisualComponentChildInfo {
        tagName: string;
        nameAttribute: string;
    }
}
declare namespace ajs.templating {
    interface IVisualComponentChildren {
        [id: string]: IVisualComponentChildInfo;
    }
}
declare namespace ajs.templating {
    interface IVisualComponentCollection {
        [name: string]: IVisualComponent;
    }
}
declare namespace ajs.templating {
    interface IVisualComponentPlaceholder {
        placeholder: HTMLElement;
    }
}
declare namespace ajs.templating {
    interface IVisualComponentPlaceholderCollection {
        [name: string]: IVisualComponentPlaceholder;
    }
}
declare namespace ajs.templating {
    /**
     * Represents a HTML template containing a visual component tree
     * <p>
     * Instanced by the #see {ajs.templating.TemplateManager} when the template is requested to be loaded.
     * </p>
     * <p>
     * Automatically parses the template data and register all defined visual components to the template manager.
     * </p>
     * <p>
     * Stylesheets defined as the style tag directly in the template are stored in the stylesheets
     * </p>
     * <p>
     * Stylesheets defined as the URL (template attribute stylesheets) must be explicitly asked to be loaded by
     * the #see {ajs.templating.TemplateManager} once the constructor returns the Template object.
     * </p>
     */
    class Template {
        protected _templateManager: TemplateManager;
        readonly templateManager: TemplateManager;
        protected _name: string;
        readonly name: string;
        protected _storageType: resources.STORAGE_TYPE;
        readonly storageType: resources.STORAGE_TYPE;
        protected _cachePolicy: resources.CACHE_POLICY;
        readonly cachePolicy: resources.CACHE_POLICY;
        protected _styleSheetsUrls: string[];
        readonly styleSheetsUrls: string[];
        protected _styleSheetsLoaded: boolean;
        protected _styleSheets: string[];
        readonly styleSheets: string[];
        protected _template: Document;
        readonly template: Document;
        protected _visualComponents: IVisualComponentCollection;
        readonly visualComponents: IVisualComponentCollection;
        /**
         * Constructs the template object and loads the data from the template
         * @param templateManager
         * @param templateResource
         * @param storageType
         */
        constructor(templateManager: TemplateManager, templateResource: resources.IResource, storageType: resources.STORAGE_TYPE, cachePolicy: resources.CACHE_POLICY);
        /**
         * Must be called from the template manager to load templates
         */
        loadStyleSheets(): Promise<void>;
        /**
         * Helper to walk the DOM of the loaded template
         * @param element HTMLElement where to start
         * @param parentComponent Parent visual component (if discovered already)
         * @param elementProcessor Function to process the template elmenets
         */
        protected _walkHTMLTree(element: HTMLElement, parentComponent: IVisualComponent, elementProcessor: (element: HTMLElement, parentComponent: IVisualComponent) => IVisualComponent): void;
        /**
         * Parses the template and gets the template info and visual components it contains
         */
        protected _getTemplateData(): void;
    }
}
declare namespace ajs.templating {
    class TemplateManager {
        protected _resourceManager: resources.ResourceManager;
        readonly resourceManager: resources.ResourceManager;
        protected _templates: ITemplatesCollection;
        readonly templates: ITemplatesCollection;
        protected _visualComponents: IVisualComponentCollection;
        readonly VisualComponents: IVisualComponentCollection;
        constructor(resourceManager: resources.ResourceManager);
        loadTemplates(paths: string[], storageType: resources.STORAGE_TYPE, cachePolicy: resources.CACHE_POLICY, loadingPreference?: resources.LOADING_PREFERENCE): Promise<Template[]>;
        getTemplate(name: string): Template;
        registerVisualComponent(name: string, visualComponent: IVisualComponent): void;
        getVisualComponent(name: string): IVisualComponent;
        getVisualComponentTemplate(name: string): Template;
    }
}
declare namespace ajs.resources {
    /**
     * This prefix shall be added to all managed resources which are not loaded from the server
     * <p>
     * All Ajs and application features using managed resources and creating them locally, not
     * by loading them form server (i.e.to session/ app state manager) shall use this prefix in the
     * resource URL in order to be possible to quilcky recognize the resource can't be loaded from
     * the server. If the prefix will not be used the delay in serving the resource can occur as try
     * to load / update it form server will be performed. Definitelly, request to the server will be
     * send what is unwanted behaviour at local resources.
     * </p>
     */
    const LOCAL_ONLY_PREFIX: string;
    /** List of possible resource types */
    enum RESOURCE_TYPE {
        SCRIPT = 0,
        STYLE = 1,
        TEXT = 2,
        BINARY = 3,
        UNKNOWN = 4,
    }
    /** Type of the storage - passed to the loadResource or loadResources methods */
    enum STORAGE_TYPE {
        NONE = 0,
        LOCAL = 1,
        SESSION = 2,
        MEMORY = 3,
    }
    /**
     * Resource cache policy
     * <p>
     * RCP is used to determine if the resource shouls be accessible permanently (mainly in offline mode) or
     * if it can be removed from the cache if there is not enough space for another resource requested by the application
     * </p>
     */
    enum CACHE_POLICY {
        /** Not used when the resource is cached, the resource is loaded directly from the server */
        NONE = 0,
        /** Resource is cached permanently, it can't be removed during the cache clean process */
        PERMANENT = 1,
        /** Last recently used resources will be removed from the cache if there is no space for a new resource requested */
        LASTRECENTLYUSED = 2,
    }
    /**
     * Loading preference specifies where cached resources should be prefrably loaded from
     */
    enum LOADING_PREFERENCE {
        SERVER = 0,
        CACHE = 1,
    }
    /**
     * Resource manager takes care of loading of resources from the server and caching them in the appropriate cache
     * <ul>
     *    <li>GET method is used to load resources</li>
     *    <li>If the resource is type of SCRIPT it is evaulated automatically and immediately on load.</li>
     *    <ul>
     *       <li>Scripts can be evaluated using the eval method or by adding the script tag to the main document</li>
     *       <li>This is drivent by the USE_EVAL constant and should not be changed in runtime</li>
     *       <li>EVAL should be used only for debugging purposes as the visual studio and IE can't handle source maps
     *           when the &lt;script&gt; tag is added</li>
     *       <li>If multiple resources are about to be loaded the evaluation of scripts occcurs when all are loaded successfully
     *           as the order of scripts to be loaded is important, because some can require others to be evaluated earlier</li>
     *    </ul>
     *    <li>If the resource is type of STYLE it is automatically registered to the style manager</li>
     *    <li>Other types of resources are not evaluated automatically and are just returned / cached</li>
     * </ul>
     */
    class ResourceManager {
        protected _config: IResourceManagerConfig;
        readonly config: IResourceManagerConfig;
        protected _managedResources: IManagedResource[];
        readonly managedResources: IManagedResource[];
        /** Stores referrence to the ResourceLoader object */
        protected _resourceLoader: ResourceLoader;
        /** Returns referrence to the ResourceLoader object used by the Resource Manager */
        readonly resourceLoader: ResourceLoader;
        /** Stores reference to the StorageLocal object */
        protected _storageLocal: StorageLocal;
        /** Returns referrence to the StorageLocal object used by the Resource Manager */
        readonly storageLocal: StorageLocal;
        /** Stores reference to the StorageSession object */
        protected _storageSession: StorageSession;
        /** Returns referrence to the StorageSession object used by the Resource Manager */
        readonly storageSession: StorageSession;
        /** Stores reference to the StorageMemory object */
        protected _storageMemory: StorageMemory;
        /** Returns referrence to the StorageMemory object used by the Resource Manager */
        readonly storageMemory: StorageMemory;
        /**
         * Constructs the ResourceManager
         * <p>
         * Initializes resource loader and resource storages and gets info about managed resources.
         * Basically, all resources remaining in storages after refresh / browser restart and
         * created during any previous session using the resource manager are automatically managed
         * in the new browser session. Ofcouse only those alived the user action (session data will
         * not be avalilable after browser restart)
         * <p>
         */
        constructor(config?: IResourceManagerConfig);
        /**
         * Returns the default ResourceManager configuration
         */
        protected _defaultConfig(): IResourceManagerConfig;
        /**
         * Gets resources managed last time (before browser reload/refresh/open/reopen)
         * <p>
         * Called from constructor to get list of cached resources in local and session storages
         */
        protected _getManagedResources(): IManagedResource[];
        /**
         * Registers managed resources without preloading them (resources will be loaded/cached with first getResource)
         * <p>
         * Managed resource is uniquely identified by the URL, storage type and the caching policy. This means it can happen
         * the same resource (with the same url) will be placed in three different storage (memory, session, local). It up
         * to application developer to make sure the resource is available just in storages where it should be and don't
         * consumes the other storages if not necessary.
         * </p>
         * <p>
         * registerManagedResource should be used instead of getMultipleResources for all resources with the LRU policy.
         * This is because during the loadMultiple the "clean cache" mechanism can be executed when LRU resources will
         * not fit the maximum cache size so earlier resources loaded will be flushed and replaced with latest loaded. If
         * the resource is just registered it will be loaded (if it is not cached) at the time when getResource is called
         * so in the worst case the "clean cache" will be executed just to make a space for the resource required.
         * </p>
         * <p>
         * On other hand, if resources are required to be accessible offline developer have to make sure resources
         * will fit the cache. In this case resources shall be loaded instead of registered and also shall be using the
         * PERMANENT cache policy.
         * </p>
         */
        registerManagedResources(managedResources: IManagedResource[]): void;
        /**
         * Returns a cached resource if the resource is available in specified storage
         * @param url Url of the cached resource
         * @param storageType type of the storage to be used for lookup
         */
        getCachedResource(url: string, storageType: STORAGE_TYPE): ICachedResource;
        /**
         * Creates or updates existing cached resource
         * Automatically creates a managed resource if the managed resource does not not exist
         * @param url Url of the cached resource
         * @param data Data to be stored or updated
         * @param storageType type of the storage to be used
         * @param cachePolicy cache policy to be used for new resources
         */
        setCachedResource(url: string, data: any, storageType: STORAGE_TYPE, cachePolicy: CACHE_POLICY): void;
        /**
         * Removes existing cached resource
         * @param resource Resource to be created or updated
         * @param storageType Type of the storage to be used
         */
        removeCachedResource(url: string, storageType: STORAGE_TYPE): void;
        /**
         * Removes all cached resources
         */
        cleanCaches(): void;
        /**
         * Returns a resource from cache or from the server and updates the cache
         * <p>
         * If preference is set to CACHE and the resource is cached the promise is resolved immediately.
         * If the resource is not supposed to be local only (its URL prefix is #see {LOCAL_ONLY_PREFIX}) it
         * is checked if resource was updated on the server then the cache is synchronized. There are no
         * further notifications to the application the resource and the cache was updated so it is possible
         * the resource currently in use is one request older than the resource on the server and in the cache.
         * </p>
         * <p>
         * If the preference is server the standard load procedure is done.
         * </p>
         * @param url Url of the resource to be returned
         * @param storageType Resource storage type (if not specified the resource will be loaded from the server without caching)
         * @param cachePolicy Resource cache policy (if not specified the resource will be loaded from the server without caching)
         * @param loadingPreference Resource loading preference
         * @param runScript Specifies if the script resource should be started
         */
        getResource(url: string, storageType: STORAGE_TYPE, cachePolicy?: CACHE_POLICY, loadingPreference?: LOADING_PREFERENCE, runScript?: boolean): Promise<IResource>;
        /**
         * Returns multiple resources from a cache or from the server and updates the cache
         * <p>
         * Waits until all resources are available before resolving the promise.
         * If the resource is not supposed to be local only (its URL prefix is #see {LOCAL_ONLY_PREFIX}) it
         * is checked if resource was updated on the server then the cache is synchronized. There are no
         * further notifications to the application the resource and the cache was updated so it is possible
         * the resource currently in use is one request older than the resource on the server and in the cache.
         * </p>
         * <p>
         * If the preference is server the standard load procedure is done.
         * </p>
         * @param urls Urls of the resources to be returned
         * @param storageType Resource storage type (if not specified resources will be loaded from the server without caching)
         * @param cachePolicy Resource cache policy (if not specified resources will be loaded from the server without caching)
         * @param loadingPreference Resources loading preference
         * @param runScript Specifies if the script resources should be evaluated
         */
        getMultipleResources(urls: string[], storageType: STORAGE_TYPE, cachePolicy?: CACHE_POLICY, loadingPreference?: LOADING_PREFERENCE, runScripts?: boolean): Promise<IResource[]>;
        /**
         * Load resource from server or cache
         * <p>
         *  If the "mode" is offline or resource was not modified since the last download the cached resource is returned
         * </p>
         * <p>
         * <ul>
         *    If caching of the resource is required the resource is created or updated in the cache of given type
         *    <li>GET method is used to load resources</li>
         *    <li>If the resource is type of SCRIPT it is (by default) evaulated automatically and immediately on load.
         *       <ul>
         *          <li>Scripts can be evaluated using the eval method or by adding the script tag to the main document</li>
         *          <li>This is drivent by the USE_EVAL constant and should not be changed in runtime</li>
         *          <li>EVAL should be used only for debugging purposes as the visual studio and IE can't handle source maps
         *              when the &lt;script&gt; tag is added</li>
         *       </ul>
         *    </li>
         *    <li>If the resource is type of STYLE it is automatically registered to the style manager</li>
         *    <li>Other types of resources are not evaluated automatically and are just returned / cached</li>
         * </ul>
         * </p>
         * @param url Url of the resource to be loaded
         * @param storageType Type of storage to be used to cache the resource.
         *                    If the storage is not specified the direct download will be used
         * @param cachePolicy If the storage is specified the cache policy will set the cache behavior
         * @param runScript Specifies if the script resource should be evaluated automatically
         * @param updateProgressBar Specified if UI progressbar should be updated
         */
        protected _load(url: string, storageType: STORAGE_TYPE, cachePolicy: CACHE_POLICY, runScript?: boolean, updateProgressBar?: boolean): Promise<IResource>;
        /**
         * DEPRECATED! Loads multiple resources from the server or the same storage type using the same caching policy
         * <p>
         * If resource is loaded from the server the cache is updated with this updated resource
         * </p?
         * @param url Array of resource URL's to be loaded
         * @param storageType Type of storage to be used to cache resources.
         *                    If the storage is not specified the direct download will be used
         * @param cachePolicy If the storage is specified the cache policy will set the cache behavior for all resources loading
         * @param runScripts Should be script resources evaluated on download? Default = true
         */
        protected _loadMultiple_DEPRECATED(urls: string[], storageType: STORAGE_TYPE, cachePolicy: CACHE_POLICY, runScripts?: boolean): Promise<IResource[]>;
        /**
         * Called internally when loading of single resource ends and resource need to be processed
         * <p>If not explicitly specified, SCRIPT resources are automatically evaluated</p>
         * @param resource Cached or empty resource prepared in the load method
         * @param response Information about the resource loaded passed from the resource loader
         */
        protected _processResourceResponse(resource: IResource, response: IResourceResponseData, runScript?: boolean): IResource;
        /**
         * Returns managed resource info if the resource is managed by the resource manager
         * <p>
         * As managed resource is uniquely identified by URL, storage and cache policy, all three parameters must match
         * in order to be possible to locate the managed resource.
         * </p>
         * @param url Url of the resource to be checked and #see {ajs.resources.IManagedResource} info to be returned for
         * @param storageType Storage type of the resource to be checked and #see {ajs.resources.IManagedResource} info to be returned for
         */
        protected _getManagedResourceInfo(url: string, storageType: STORAGE_TYPE): IManagedResource;
        /**
         * Returns the storage instance from the storage type
         * @param storageType
         */
        protected _getStorageFromType(storageType: STORAGE_TYPE): AjsStorage;
        /**
         * Returns the resource type from the resource file extension
         * @param url
         */
        protected _getResourceTypeFromURL(url: string): RESOURCE_TYPE;
        /**
         * Evaluates the script resource - should be used only during debugging as IE / Visual Studio does not
         * work with source maps in the dynamically added <script> tag when debugging
         * @param resource Script resource to be evaluated
         */
        protected _evalScript(resource: IResource): void;
        /**
         * Creates the script tag and adds the resource data to it (script is then executed automatically)
         * @param resource Script resource to be evaluated
         */
        protected _addScriptTag(resource: IResource): void;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
/**
 * State namespace contains the StateManager class usefull to persist the application and the session states
 * <p>
 * The state persistance management is important for the Application to keep the track of the state after the
 * browser window is closed or the web page is refreshed or the link is entered manually to the browser address
 * bar. In these cases the memory of the JavaSript (including all variables and objects) is freed and all
 * information is lost as the new request (even to the same url) behaves in the way the new page is loaded and
 * new JavaScript object instances are created.
 * </p>
 * <p>
 * It was written many times what the application and the session state is, so just to remember in short: On the web
 * the state information is availabe just during one HTTP request/response pair. If it is neccessary to keep the track
 * of some information and have it availabe during multiple requests it is necessary to use one of methods developed
 * for this puprose. Overall name for this process is state persistence management. For the JavaScript frontend applications
 * there are some additional considerations to be made compared to traditional client/server development as there are
 * additional tools and possibilities for the state persistence management. However, the basic principles are the same.
 * </p>
 * <p>
 * The application state is overall state of the application (except the session state) and can contain information
 * about i.e. last logged-in user and additional information to log in the user in when the application is restarted.
 * It can also persist users profiles to be available immediately after logging in to the application without need
 * of loading this information from the server or the database. Additionally, it can store differences to default
 * configuration of the application made by users. The application state in the Web Browser is available until user
 * explicitly (and manually) requests clearing of the local storage.
 * </p>
 * <p>
 * The session state is the state availabe trhough multiple request but just for one browser session. Basically, it
 * is available until the browser is closed. Session state storage usually presists the UI interface state - the view
 * state - i.e. what tab of the tab control was selected before the page was reloaded.
 * </p>
 * <p>
 * It is hard to recommend what data should be stored in what storage as it always depends on business needs and
 * architecture of the application and requirements. For example, business or security request to store of some type of
 * the data only on the server side (except the time when user works with them) may exist.
 * </p>
 * <p>
 * In general, states can be persisted on both, client and server sides in many ways. At least, the following options
 * for the the application / session state persistance between HTTP requests exists:
 * </p>
 * <ul>
 * <li>GET/POST data to server and back with each HTTP request/response (includes HTTP header manipulation techniques,
 *     posting hidden form fields or url parameters manipulation</li>
 * <li>Storing the data to be persistent in HTTP Cookies</li>
 * <li>Store the state data on the server and using any other method (i.e. WebSockets or JSON API)</li>
 * <li>Store the state data on the client side in storages desinged for it (localStorage, sessionStorage)</li>
 * <li>Store the data on the client side in the storage which was not designed for it (i.e. indexedDB)</li>
 * </ul>
 * </p>
 * <p>
 * Concrete implementation always depends on the overall application architecture. We will focus just on the client-side
 * as we are talking about the client side front end framework.
 * </p>
 * <p>
 * Ajs framework is using LocalStorage and SessionStorage features of the W3C HTML5 specification to handle the state
 * management. Bot storages, according the specification, are Key/Value storages and Ajs just wraps these storages to
 * the StateManager class which is using Resource Manager to access local and session storages. This is because storages
 * are used for multiple purposes and track of all of them must be kept in order to be possible to successfuly manage
 * all resources and caches. It is highly recommended not to use the local/session storage functionality provided by
 * browser directly from the application as it can lead to inconsistences and/or interferences between the Ajs and the
 * application data persitence. Only the Resource, Data and State managers should be used to manipulate the data in these
 * storages.
 * </p>
 * <p>
 * It is usually necessary to follow some security recommendations regarding the state management (and the application
 * development in general). The main security principles are: don't store sensitive data like passwords in any type of
 * storage and minimize storing of any information usefull for potential attackers to attack the application or the system.
 * For security recomendations related to web application design and development reffer to the <a href="www.owasp.org">OWASP</a>
 * web site. There is a very nice guide regarding secure application design and development.
 * </p>
 */
declare namespace ajs.state {
    /**
     * State manager is used for the application and session state persistance
     * State manager currently supports only string values so if it is required to store
     * arbitrary object it is necessary to JSONize it first.
     */
    class StateManager {
        /** Resource manager to be used to access the local and session storages */
        protected _resourceManager: ajs.resources.ResourceManager;
        /**
         * Constructs the state manager object
         * @param resourceManager Resource manager to be used to access the local and session storages
         */
        constructor(resourceManager: ajs.resources.ResourceManager);
        /**
         * Sets the application state value
         * @param key Key to be used for the application state value
         * @param value The value to be stored in the local storage under specified key
         */
        setAppState(key: string, value: string): void;
        /**
         * Retrieves the application state value idetified by the given key
         * @param key Key for which the application state value should be returned.
         */
        getAppState(key: string): string;
        /**
         * Removes the application state key / value pair from the local storage
         * @param key Key to be removed
         */
        removeAppState(key: string): void;
        /**
         * Sets the session state value
         * @param key Key to be used for the session state value
         * @param value The value to be stored in the session storage under specified key
         */
        setSessionState(key: string, value: string): void;
        /**
         * Retrieves the session state value idetified by the given key
         * @param key Key for which the session state value should be returned.
         */
        getSessionState(key: string): string;
        /**
         * Removes the session state key / value pair from the session storage
         * @param key Key to be removed
         */
        removeSessionState(key: string): void;
    }
}
declare namespace ajs.routing {
    interface IRoute {
        base: string;
        params: string;
    }
}
declare namespace ajs.routing {
    interface IRouteInfo {
        base: string;
        path: string;
        search: string;
        hash: string;
    }
}
declare namespace ajs.routing {
    interface IRoutes {
        paths: IRoute[];
        viewComponentName: string;
    }
}
declare namespace ajs.routing {
    class Router {
        protected _view: ajs.mvvm.view.View;
        protected _lastURL: string;
        protected _lastViewComponentName: string;
        protected _lastViewComponentInstance: ajs.mvvm.viewmodel.ViewComponent;
        protected _routes: IRoutes[];
        readonly routes: IRoutes[];
        protected _currentRoute: IRouteInfo;
        readonly currentRoute: IRouteInfo;
        constructor(view: ajs.mvvm.view.View, routes?: IRoutes[]);
        registerRoute(paths: IRoute[], viewComponentName: string): void;
        route(url?: string): void;
        protected _getRouteViewComponent(url?: string): string;
    }
}
declare namespace ajs.routing {
    class RouteNotFoundException extends ajs.Exception {
    }
}
declare namespace ajs.resources {
    /** Storage cachedResourcesInfo key */
    const STORAGE_INFO_KEY: string;
    /** Storage resource data item key prefix */
    const STORAGE_RESOURCE_KEY_PREFIX: string;
    /** Storage key for testing if the resource fits the remaining free space */
    const STORAGE_ADDTEST_KEY: string;
    /**
     * Represents the browser storage (memory/session/local, based on the configuration and storage provider of the extending class)
     * <strong>
     * Abstract class to be extended by the class for the reqiured resource storage type
     * </strong>
     * <p>
     * This class implements complete functionality for the storage data manipulation but requires to be extended and initialized
     * by the concrete implementation of the storage class (local, session, memory). The initialization must include checking if
     * the storage required storage type is supported and instancing or collecting instance of the storage provider for the
     * given storage type
     * </p>
     * <p>
     * If the resource is updated by the application (not by the request to the server) and requirement to persist this change exists
     * the updateResource method should be called after each resource data change
     * </p>
     * <p>
     * AjsStorage is using the following keys in the storage for internal purposes:
     * <ul>
     * AJSRESOURCESINFO
     * <li>JSONed ICachedResource[] where data at all items is set to null</li>
     * AJSRESOURCES.%URL%
     * <li>JSONed resource data where %URL% is URL of the data</li>
     * </ul>
     * These keys are stored in constants so should be simply changed if required, but Ajs must be recompiled afterwards.
     * </p>
     */
    /**
     * Abstract class to be implemented by the Storage for the reqiured resource storage type
     * <p>
     * Currently extended by StorageBrowser (then by StorageMemory, StorageSession, StorageLocal)
     */
    abstract class AjsStorage {
        /** Indicates if the storage type (local, session) is supported by the browser */
        protected _supported: boolean;
        /** Returns if the storage type (local, session) is supported by the browser */
        readonly supported: boolean;
        /** Holds maximum size of the cache available to AjsStorage */
        protected _cacheSize: number;
        /** Returns maximum size of the cache usable by the AjsStorage */
        readonly cacheSize: number;
        /** Stores approximate total size of all resources stored in the storage in bytes */
        protected _usedSpace: number;
        /** Returns approximate total size of all resources stored in the storage in bytes */
        readonly usedSpace: number;
        /** Holds information about resources stored in the storage */
        protected _resources: ICachedResource[];
        /** Returns information about resources stored in the storage */
        readonly resources: ICachedResource[];
        /** Stores instance of the storage provider used by the Storage to manipulate storage data */
        protected _storageProvider: IStorageProvider;
        /** Returns instance of the storage provider used by the Storage to manipulate storage data */
        readonly storageProvider: IStorageProvider;
        /** Returns type of the storage */
        readonly abstract type: STORAGE_TYPE;
        /**
         * Constructs and initializes the AjsStorage
         * @param cacheSize Maximum amount of the storage to be available as the cache
         */
        constructor(cacheSize: number);
        /**
         * Internally initializes the instance of the Storage class
         * Must be overriden and check if the required storage type is supprted and get / instantiate storage provider
         */
        protected abstract _initialize(): void;
        /**
         * Completely cleans all resources from the storage
         */
        clear(): void;
        /**
         * Adds a new resource to the storage
         * @param resource Resource to be stored
         * @throws NotEnoughSpaceInStorageException Thrown when there is not enough space in the storage to store the resource
         */
        addResource(resource: ICachedResource): void;
        /**
         * Returns the resource according the URL passed
         * @param url URL of the resource to be returned
         */
        getResource(url: string): ICachedResource;
        /**
         * Updates a cached resource
         * @param resource Resource to be updated
         */
        updateResource(resource: ICachedResource): void;
        /**
         * Removes the resource from the storage
         * @param url Url of the resource to be removed
         */
        removeResource(url: string): void;
        /**
         * Loads information about resources in the storage
         */
        protected _getResourcesInfo(): ICachedResource[];
        /**
         * Cleans the storage (removes last recently used resources until there is required space in the storage)
         * @param requiredSpace If defined the method tries to remove old resources until there is enough space
         *                      in the storage, otherwise it removes all LRU resources
         */
        protected _cleanCache(requiredSpace?: number): void;
        /**
         * Converts JSON string to Date
         * Used for resource info data loaded from storage and parsed from JSON to object
         * @param key
         * @param value
         */
        protected _resourceInfoJSONReviver(key: string, value: any): any;
        /**
         * Returns resource index from the URL
         * If the resource is not found it returns -1
         * @param url
         */
        protected _getResourceIndex(url: string): number;
    }
}
declare namespace ajs.resources {
    /** The required storage type is not supported by the browser */
    class StorageTypeNotSupportedException extends ajs.Exception {
    }
    /** Storage type requested is not valid */
    class InvalidStorageTypeException extends ajs.Exception {
    }
    /** If the storage is chosen the caching policy must be set */
    class CachePolicyMustBeSetException extends ajs.Exception {
    }
    /** Resource was not found in the storage */
    class ResourceNotFoundException extends ajs.Exception {
    }
    /** Storage is out of space or the resource can't fit the storage */
    class NotEnoughSpaceInStorageException extends ajs.Exception {
    }
    /** Load end handler passed must be a function */
    class LoadEndHandlerIsNotFunctionException extends ajs.Exception {
    }
    /** Invalid callback specified for getResource function */
    class InvalidResourceReadyCallbackException extends ajs.Exception {
    }
    /** Requested local resource does not exist */
    class LocalResourceRequestedDoesNotExistException extends ajs.Exception {
    }
    /** Thrown when resource failed to load and was not located in the cache */
    class ResourceFailedToLoadException extends ajs.Exception {
    }
}
declare namespace ajs.resources {
    /** Represents the resource stored in one of storages */
    interface ICachedResource {
        /** Unique resource locator */
        url: string;
        /** Resource data */
        data: any;
        /** Caching policy */
        cachePolicy: CACHE_POLICY;
        /** timestamp of the creation of the resource in the cache */
        lastModified: Date;
        /** last timestamp of access of the resource in the cahce */
        lastUsedTimestamp?: Date;
        /** size of the resource ocuppying the cache */
        size?: number;
    }
}
declare namespace ajs.resources {
    /** Managed resource descriptor */
    interface IManagedResource {
        url: string;
        storageType: STORAGE_TYPE;
        cachePolicy: CACHE_POLICY;
    }
}
declare namespace ajs.resources {
    /** Resource descriptor */
    interface IResource {
        /** Unique resource locator */
        url: string;
        /** Type of the resource */
        type: RESOURCE_TYPE;
        /** Resource data */
        data: any;
        /** Indicates if the resource is cached in one of stores */
        cached: boolean;
        /** Storage used to store the resource */
        storage: AjsStorage;
        /** Cache policy */
        cachePolicy: CACHE_POLICY;
        /** Last resource modification time (in the storage, not on the server) */
        lastModified: Date;
    }
}
declare namespace ajs.resources {
    interface IResourceLoadEndHandler {
        (response: IResourceResponseData): void;
    }
}
declare namespace ajs.resources {
    /** Resource manager configuration */
    interface IResourceManagerConfig {
        /** Maximum amount of the memory to be used by the resources in the StoreMemory */
        memoryCacheSize: number;
        /** Maximum amount of the memory to be used by the resources in the SessionStorage */
        sessionCacheSize: number;
        /** Maximum amount of the memory to be used by the resources in the LocalStorage */
        localCacheSize: number;
        /** If resources are updated (i.e.) by new release the cache can be invalidated
         *  by setting this value to the same date as the resource release date
         */
        removeResourcesOlderThan?: Date;
    }
}
declare namespace ajs.resources {
    interface IResourceRequest extends XMLHttpRequest {
        resourceRequestData: IResourceRequestData;
    }
}
declare namespace ajs.resources {
    /** Represents the data available with the request sent to the server */
    interface IResourceRequestData {
        url: string;
        isBinary: boolean;
        lastModified: Date;
        startTime: Date;
        loadEndHandler: IResourceLoadEndHandler;
    }
}
declare namespace ajs.resources {
    interface IResourceResponseData {
        type: string;
        data: any;
        httpStatus: number;
        startTime: Date;
        endTime: Date;
    }
}
declare namespace ajs.resources {
    /** Information about resource types and its extensions. Defined as a constant in the ResourceManager */
    interface IResourceTypes {
        /** Script resource type extensions (.js) */
        script: string[];
        /** Style resource type extensions (.css) */
        style: string[];
        /** Text resource type extensions (.txt, .htm, .html, .xml and so on) */
        text: string[];
        /** Script resource type extensions (.png, .jpg. .jpeg and so on) */
        binary: string[];
    }
}
declare namespace ajs.resources {
    /** this should be Storage interface from the lib.d.ts but not possible to implement with ES5 */
    interface IStorageProvider {
        readonly length: number;
        clear(): void;
        getItem(key: string): string | null;
        key(index: number): string | null;
        removeItem(key: string): void;
        setItem(key: string, data: string): void;
    }
}
declare namespace ajs.resources {
    /**
     * In-memory implementation of the Key/Value storage for the resource manager support
     * <p>
     * Unfortunately it is not possible to be implemented full as the Storage interface
     * as target is ES5 and its not possible to capture writes/read to indexed variables (arrays)
     * </p>
     */
    class MemoryStorageProvider implements IStorageProvider {
        /** Stores numer of items in the storage */
        protected _length: number;
        /** Returns numer of items in the storage */
        readonly length: number;
        /** Key/value storage */
        protected _store: Object;
        /** Constructs the memory implementation of the key/value storage */
        constructor();
        /** Clears the storage */
        clear(): void;
        /**
         * Sets the specified string data under specified key
         * @param key Key to be used to store the data
         * @param data Data to be stored
         */
        setItem(key: string, data: string): void;
        /**
         * Returns the string data for specified key or null if the key does not exist
         * @param key The key which data should be returned
         */
        getItem(key: string): string;
        /**
         * Returns key of the specified index or null if the key does not exist
         * @param index Index of the key to be returned
         */
        key(index: number): string;
        /**
         * Removes the item from the key/value store
         * @param key Key of the item to be removed
         */
        removeItem(key: string): void;
    }
}
declare namespace ajs.resources {
    /**
     * ResourceLoader is used internally by the #see (ajs.resources.ResourceManager} to load a resource
     * <p>
     * It performs standard HTTP request to the server and obtains the resource from it. It
     * is using the standard XMLHttpRequest feature of the browser and resources are loaded isng the GET
     * method. It is supposed to be used for static resources only.
     * </p>
     */
    class ResourceLoader {
        constructor();
        /**
         * Initiates loading of the resource
         * @param loadEndHandler Handler to be called when the resource loading finishes
         * @param url Resource locator
         * @param isBinary Identifies if binary data should be loaded
         * @param userData User data object to be passed to the handler
         * @param lastModified Information about resource last modification date/time
         */
        loadResource(url: string, isBinary: boolean, lastModified?: Date): Promise<IResourceResponseData>;
        /**
         * Contructs the XHR, registers readystatechange listener and sends GET request it to the server
         * @param requestData Request data
         */
        protected _loadResource(requestData: IResourceRequestData): void;
        /**
         * Called when XHR changes the loading status
         * @param e XHR State change event data
         */
        protected _xhrStatusChanged(e: Event): void;
    }
}
declare namespace ajs.resources {
    /**
     * Represents the browser local storage (persistent until explicitly cleared)
     */
    class StorageLocal extends AjsStorage {
        /** Returns type of the storage */
        readonly type: STORAGE_TYPE;
        /** Constructs the StorageLocal object */
        protected _initialize(): void;
    }
}
declare namespace ajs.resources {
    /**
     * Represents the memory storage (persistent until reload / close)
     */
    class StorageMemory extends AjsStorage {
        /** Returns type of the storage */
        readonly type: STORAGE_TYPE;
        /** Constructs the StorageLocal object */
        protected _initialize(): void;
    }
}
declare namespace ajs.resources {
    /**
     * Represents the browser session storage (persistent until window is closed)
     */
    class StorageSession extends AjsStorage {
        /** Returns type of the storage */
        readonly type: STORAGE_TYPE;
        /** Constructs the StorageSession object */
        protected _initialize(): void;
    }
}
declare namespace ajs.navigation {
    /** Template for the redirection record */
    interface IRedirection {
        /** Source path (not full url) to be redirected */
        path: string;
        /** Target path */
        target: string;
    }
}
/**
 * Navigation namespace hold the Navigator object and IRedirection interface
 * <p>
 * Navigator takes care of capturing the browser navigation events when
 * Forward / Back buttons are pressed.
 * </p>
 * <p>
 * Navigator should be also used by the application to navigate over the page
 * so all a hrefs should be modified to
 * &lt;a href="link" onclick="return ajs.Framework.navigator.linkClicked(event);"&gt;...
 * Button presses or another dynamic events leading to the navigaton
 * should use the #see {ajs.navigation.navigator.Navigate} Navigator method in
 * order to keep the framework state consistent with the browser.
 * <p>
 * Navigator also takes care of redirections so if the path of the url being
 * navigated is found in registered redirectons table the redirection to the
 * target will occur.
 * <p>
 * <p>
 * Navigator passes the actual path to the #see {Router}
 * which will take care about instancing the correct view model. During the boot,
 * prior the application is started the Navigator is disabled to prevent any
 * problems with navigating to uninitialized application.
 * </p>
 * <p>
 * Navigator redirections can be configured in the #see {IAjsConfig AJS Framework
 * configuration}. Redirections could be also registered using the #see {
 * Navigator.registerRedirection } method.
 * </p>
 */
declare namespace ajs.navigation {
    import Router = ajs.routing.Router;
    /**
     * Navigator is used for navigation throughout the Ajs Application
     * <p>
     * Navigator takes care of capturing the browser navigation events when
     * Forward / Back buttons are pressed.
     * </p>
     * <p>
     * Navigator should be also used by the application to navigate over it. All a
     * href links should be changed to
     * &lt;<a href="link" onclick="return ajs.Framework.navigator.linkClicked(event);&gt;
     * Also, all button presses or another dynamic events leading to the navigaton
     * should use the same method in order to keep the browser state consistent
     * with the framework. Links in templates are replaced automatically to correct value
     * so it is not necessary to follow this rule there.
     * <p>
     * Navigator also takes care of redirections so if the path of the url being
     * navigated is found in registered redirectons table the redirection to the
     * target will occur.
     * <p>
     * <p>
     * Navigator passes the actual path to the #see {ajs.routing.Router}
     * which will take care about instancing the correct view model. During the boot,
     * prior the application is started the Navigator is disabled to prevent any
     * problems with navigating to uninitialized application.
     * </p>
     * <p>
     * Navigator redirections can be configured in the #see {IAjsConfig Ajs Framework
     * configuration}. Redirections could be also registered using the #see {
     * Navigator.registerRedirection } method.
     * </p>
     */
    class Navigator {
        /** Last url the navigator captured during various events */
        protected _lastUrl: string;
        /** Returns last url the navigator captured during various events */
        readonly lastUrl: string;
        /** List of registered #see {IRedirection redirections#} */
        protected _redirections: IRedirection[];
        /** List of registered #see {IRedirection redirections#} */
        readonly redirections: IRedirection[];
        /** Reference to the router */
        protected _router: Router;
        readonly router: Router;
        /** Holds information if the navigator should process navigation events */
        protected _canNavigate: boolean;
        /** Returns information if the navigator should process navigation events */
        /** Sets information if the navigator should process navigation events */
        canNavigate: boolean;
        /**
         * Constructs the object of the Navigator class
         * @param router Router to be used to forward navigation events
         * @param redirections List of redirections to be registered (taken from #see {IAjsConfig ajs config});
         */
        constructor(router: Router, redirections?: IRedirection[]);
        /**
         * Registers path for redirection
         * @param path Path to be redirected to a different path
         * @param target Target path
         */
        registerRedirection(path: string, target: string): void;
        /**
         * Called when any navigation event occurs to redirect a request or to forward the navigation information to the router
         */
        navigated(): void;
        /**
         * Navigates to specified url
         * @param url Target URL
         */
        navigate(url: string): void;
        /**
         * Should be called every time the user click the link to navigate
         * to appropriate location or open new tab / window
         * @param event The click MouseEvent event
         */
        linkClicked(event: MouseEvent): boolean;
        /**
         * Window.onpopstate event listener
         * @param event Event data passed from the browser
         */
        protected _onPopState(event: PopStateEvent): void;
        /**
         * Window.onhashchange event listener
         * @param event Event data passed from the browser
         */
        protected _onHashChange(event: HashChangeEvent): void;
        /**
         * Called internally to check if the url is registered for redirection and redirect to correct target it if so
         * @param url Current url to be checked
         * @returns true if redirection was performed or false if the ure was not found in registered paths for redirection
         */
        protected _redirect(url: string): boolean;
    }
}
/**
 * Model View View Component Model namespace
 * asd
 */
declare namespace ajs.mvvm.model {
}
declare namespace ajs.mvvm.viewmodel {
    class VisualComponentNotRegisteredException extends ajs.Exception {
    }
    class InvalidAttributeIfValueException extends ajs.Exception {
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IAttributeProcessor {
        (toRemove: string[], attr: Attr): boolean;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IAttributeProcessorsCollection {
        [key: string]: IAttributeProcessor;
        __default: IAttributeProcessor;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IFilteredState {
        filterApplied: boolean;
        state: IViewStateSet;
        key?: string;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IInstancedViewComponentsCollection {
        [index: number]: ViewComponent;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IRegisteredViewComponentsDict {
        [name: string]: typeof ViewComponent;
    }
}
declare namespace ajs.mvvm.viewmodel {
    /**
     * Contain "statetransitiontype/old/new" attribute values to be set to the old state element and new state element
     */
    interface ITransitionBeginHandler {
        (): ITransitionType;
    }
}
declare namespace ajs.mvvm.viewmodel {
    /**
     * Contain "statetransitiontype/old/new" attribute values to be set to the old state element and new state element
     */
    interface ITransitionType {
        /** statetransitiontypeold attribute value */
        oldComponent: string;
        /** statetransitiontypenew attribute value */
        newComponent: string;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IViewStateGet {
        [key: string]: any;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IViewStateSet {
        [key: string]: any;
    }
}
declare namespace ajs.mvvm.viewmodel {
    interface IViewComponentProperties {
        view: mvvm.view.View;
        viewComponentManager: ViewComponentManager;
        /** Stores the id of the component defined in the template */
        id: string;
        stylesheetsApplied: boolean;
        initialized: boolean;
        parentComponent: ViewComponent;
        visualComponent: ajs.templating.IVisualComponent;
        templateElement: HTMLElement;
        stateChangePrevented: boolean;
        stateKeys: string[];
        stateQueue: IViewStateSet[];
        processingStateQueue: boolean;
        stateChanged: boolean;
        hasVisualStateTransition: boolean;
        visualStateTransitionRunning: boolean;
        transitionOldElement: Element;
        transitionNewElement: Element;
        visualStateTransitionBeginHandler: ITransitionBeginHandler;
        attributeProcessors: IAttributeProcessorsCollection;
        /** Prepared for arrayed components but never initialized so hasOwnProperty must be used to check */
        key: string;
    }
    class ViewComponent implements ajs.doc.IComponent {
        /** Stores the unique instance ID of the component assigned by the view when the component is instantiated */
        componentViewId: number;
        ajs: IViewComponentProperties;
        constructor(view: view.View, viewComponentManager: ViewComponentManager, id: string, componentViewId: number, parentComponent: ViewComponent, visualComponent: ajs.templating.IVisualComponent, state?: IViewStateSet);
        protected _applyTemplateStylesheets(): void;
        protected _initialize(): void;
        destroy(): void;
        protected _finalize(): void;
        protected _defaultState(): IViewStateSet;
        setState(state: IViewStateSet): void;
        protected _setPreventStateChange(value: boolean): void;
        protected _processStateQueue(): void;
        /**
         * Removes all state properties and destroys children component tree
         * @param render
         */
        clearState(render: boolean): void;
        /**
         * This method can be overriden to filter the full state before it is applied
         * @param state
         */
        protected _filterState(state: IViewStateSet): IViewStateGet;
        /**
         * This method can be overriden to remap the state key or modify the state value
         * @param key name of the key
         * @param state state
         */
        protected _filterStateKey(key: string, state: IViewStateSet): IFilteredState;
        /**
         * This method can be overriden to remap the array state key or modify the state value
         * @param state
         */
        protected _filterStateArrayItem(key: string, index: number, length: number, state: IViewStateSet): IFilteredState;
        protected _applyState(state: IViewStateSet): void;
        protected _createViewComponent(id: string, viewComponentInfo: ajs.templating.IVisualComponentChildInfo, state: IViewStateSet): ViewComponent;
        /**
         * render the ViewComponent to the target element (appenChild is used to add the element)
         * @param parentElement element to be used as a parent for the component
         * @param usingShadowDom information if the render is performed to the main DOM or shadow DOM
         * @param clearStateChangeOnly informs renderer that rendering should not be done, just state changed flag should be cleared
         */
        render(parentElement: HTMLElement, clearStateChangeOnly: boolean, attributes?: NamedNodeMap): HTMLElement;
        protected _renderTree(sourceNode: Node, targetNode: Node, clearStateChangeOnly: boolean, attributes?: NamedNodeMap): Node;
        /**
         * clone/adopt/process the node from the template and add it to the document
         * @param sourceNode node in the VisualComponent template
         * @param targetNode node in the targer document
         */
        protected _renderNode(sourceNode: Node, targetNode: Node, attributes?: NamedNodeMap): Node;
        /**
         * Merges attributes from source to adopted node
         * @param targetNode Adopted node to be populated with attributes collected from the component implementation node
         * @param attributes Attributes collected from the component implementation node
         */
        protected _mergeAttributes(targetNode: Node, attributes?: NamedNodeMap): void;
        /**
         * process the node - see _processText and _processElement methods bellow for detail
         * @param node The node in the template to be processed
         */
        protected _processNode(node: Node): Node;
        /**
         * replace all template {} tags with the state value from the ViewComponent appropriate property
         * @param node
         */
        protected _processText(node: Node): Node;
        protected _linkMouseDown(e: MouseEvent): void;
        /**
         * process the template tag
         * @param element Template element to be processed
         */
        protected _processElement(element: HTMLElement): HTMLElement;
        /**
         * process the template tag attributes
         * if the attribute processor returns false the element will be removed from further rendering
         * @param element
         */
        protected _processAttributes(element: HTMLElement): HTMLElement;
        protected _attrComponent(toRemove: string[], attr: Attr): boolean;
        protected _attrIf(toRemove: string[], attr: Attr): boolean;
        protected _attrDefault(toRemove: string[], attr: Attr): boolean;
        protected _attrEventHandler(toRemove: string[], attr: Attr): boolean;
        protected _attrTransitionBeginHanler(toRemove: string[], attr: Attr): boolean;
        insertChildComponent(viewComponentName: string, id: string, state: IViewStateSet, placeholder: string, index?: number): void;
        removeChildComponent(placeholder: string, id: string): void;
        protected _visualComponentInsertChild(placeholder: string, componentName: string, id: string, index?: number): void;
        protected _visualComponentRemoveChild(placeholder: string, id: string): void;
        ajsVisualStateTransitionBegin(newElement: Element): void;
        protected _ajsVisualStateTransitionStart(transitionType: ITransitionType): void;
        protected _ajsVisualStateTransitionCancel(): void;
        protected _ajsVisualStateTransitionEnd(): void;
        protected _childElementExists(parent: HTMLElement, child: HTMLElement): boolean;
    }
}
declare namespace ajs.mvvm.viewmodel {
    /**
     * Default time to wait for initialization of newly created view component
     * <p>
     * Once the view component is created it needs to be initialized (ie. by data provided by some Model). It is asynchronous operation
     * as it may be necessary to download some data from the server. The createViewComponent method is checking in
     * @see {ajs.mvvm.view.COMPONENT_INITIALIZATION_CHECK_INTERVAL} intervals if the component is initialized and if so it continues with
     * the standard component processing (like rendering). This constant is used to determine if initialization of the component does not
     * take too long and interrupts waiting after defined amount of time in specified in miliseconds.
     * </p>
     */
    class ViewComponentManager {
        /** Reference to the template manager */
        protected _templateManager: templating.TemplateManager;
        /** Returns reference to the template manager used during the view construction */
        readonly templateManager: templating.TemplateManager;
        protected _components: IRegisteredViewComponentsDict;
        readonly components: IRegisteredViewComponentsDict;
        protected _componentInstances: IInstancedViewComponentsCollection;
        constructor(templateManager: templating.TemplateManager);
        registerComponents(...componentConstructor: typeof ViewComponent[]): void;
        /**
         * @param name Name of registered view component to be created
         * @param id Id of the component (usually the id from the template)
         * @param view View to which the view component relates
         * @param parentComponent Parent view component
         * @param state Initial state to be set
         */
        createViewComponent(name: string, id: string, view: view.View, parentComponent: ViewComponent, state?: IViewStateSet): ViewComponent;
        removeComponentInstance(component: ViewComponent): void;
        getComponentConstructorByName(name: string): typeof ViewComponent;
        getComponentInstanceByComponentId(componentId: number): ViewComponent;
        protected _registerComponent(componentConstructor: typeof ViewComponent): void;
        protected isComponentConstructorRegistered(componentConstructor: typeof ViewComponent): boolean;
        getChildrenComponentInstances(component: ViewComponent): ViewComponent[];
        getComponentInstance(component: typeof ViewComponent, id?: string, userKey?: string): ViewComponent[];
        getFirstComponentInstance<T extends ViewComponent>(component: typeof ViewComponent, id?: string, userKey?: string): T;
    }
}
declare namespace ajs.mvvm.viewmodel {
    class ViewComponentRender {
    }
}
declare namespace ajs.mvvm.viewmodel {
    class ViewComponentStateManager {
    }
}
declare namespace ajs.mvvm.view {
    class UpdateRootViewComponentFailedException extends ajs.Exception {
    }
    class VisualComponentNotRegisteredException extends ajs.Exception {
    }
    class ViewComponentInitializationTimeoutException extends ajs.Exception {
    }
}
declare namespace ajs.mvvm.view {
    interface IViewConfig {
        /**
         * Render target for the view. Can be any element, it is usually the window.document.body
         */
        renderTarget: Element;
    }
}
/**
 * Document namespace contains the document manager and related interfaces
 * It is used internally by the view to manage document stylesheets and update
 * the DOM node tree if it is changed.
 */
declare namespace ajs.doc {
    /**
     * Document manager is wrapper around the DOM Document with support of additional features
     * <p>
     * Document manager currently supports IComponents to be used as document HTML components. Internally, by Ajs,
     * the IComponent represents ViewComponent instances assignet to root nodes of each view component.
     * </p>
     * <p>
     * Document manager also performs the DOM structure update. It is based on the React idea so it updates
     * only changed nodes and attributes in order to be as fastest as possible.
     * </p>
     * <p>
     * It also supports loading of style sheets from templates and updating them with the managed resource
     * values so basically, offline resources can be used in stylesheets without explicit need of storing them
     * in the application cache.
     * </p>
     */
    class DocumentManager {
        /** Stores target documnent - the managed document */
        protected _targetDocument: Document;
        /** Stores the render target */
        protected _renderTarget: Element;
        readonly renderTarget: Element;
        /** Stores list of stylesheets applied from templates */
        protected _styleSheets: string[];
        /** Unique ID generator */
        protected _uniqueId: number;
        readonly uniqeId: number;
        /** Workaround for Safari Mobile - don't remove anything before touch end! */
        protected _touchEventsCount: number;
        /**
         * Constructs the document manager
         * @param targetDocument The document to be managed
         */
        constructor(renderTarget: Element);
        /**
         * Cleans up the managed document
         */
        clean(renderTarget: Element): void;
        /**
         * Walks the target DOM and applies changes from source (usually shadow) DOM
         * @param source DOM node (usually from shadow DOM) structure to be set to target
         * @param target Target to be updated
         */
        updateDom(source: Node, target: Node): void;
        /**
         * Finds a target node which has assigned the source node in the metadata
         * @param src Source node (usually from the template) to be searched for
         */
        getTargetNodeByUniqueId(id: number): INode;
        /**
         * Removes target node which has assigned the source node
         * @param src Source node (usually the node in the template) to be searched for
         */
        removeNodeByUniqueId(id: number): void;
        /**
         * Searches the target parent for the same component (just the same level, not children)
         * @param src Source node (usually from the template) assigned to the target to be searched
         * @param tgt Target which parent will be searched for the component
         */
        protected _findSameComponent(src: INode, tgt: INode): INode;
        /**
         * Update or add children nodes
         * @param src Source node (from shadow DOM) its children are about to be added or which data to be set to target children nodes
         * @param tgt Target node which children are about to be updated or added from source children nodes
         */
        protected _updateChildren(src: INode, tgt: INode): void;
        /**
         * Append new node to the target node
         * @param src Appends the source node (from shadow DOM) to the target
         * @param tgt Target for the source node
         */
        protected _appendNode(src: INode, tgt: INode): INode;
        /**
         * Insert new node before target node
         * @param src Inserts the source node (from shadow DOM) before the target node
         * @param tgt Target node before which the source will be inserted
         */
        protected _insertBefore(src: INode, tgt: INode): INode;
        /**
         * Remove target element and replace it by a new tree
         * @param src Source node (from shadow DOM) used to replace existing target
         * @param tgt Target node to be replaced
         */
        protected _replaceNode(src: INode, tgt: INode): INode;
        /**
         * Removes the node including all children with necessary cleanup
         * @param tgt Target node to be removed
         */
        removeNode(target: Node): void;
        /**
         * Updates node attributes (removes non-existing, adds new and updates existing values)
         * @param source Source node (from shadow DOM) which attributes should be set to target node
         * @param target Target node which attributes will be updated
         */
        protected _updateNodeAttributes(source: Node, target: Node): void;
        /**
         * Processes attributes within the adopted node and sets properties of the node which are not updated by setting the attribute
         * @param adoptedNode Adopted node whose attributes will get processed
         */
        protected _adoptStrangeAttributes(adoptedNode: Node): void;
        /**
         * Sets element properties which are not updated by updating the attribute value
         * @param element Element owning the attribute to be processed
         * @param attribute Attribute to be processed
         */
        protected _processStrangeAttributes(element: HTMLElement, attribute: Attr): void;
        /**
         * Copies metadata from source to the target element
         * @param src Source node (from shadow DOM) containing the metadata to be set to target node
         * @param tgt Target node of which metadata will be set
         */
        protected _setNodeMetadata(src: INode, tgt: INode): void;
        /**
         * Registers defined event listeners (from source node metadata) to the target node if there are any
         * @param src Source node (from shadow DOM) containing event listeners to be registered with the target node
         * @param tgt Target node to which event listeners will be added
         */
        protected _registerEventListeners(src: INode, tgt: INode): void;
        /**
         * Applies stylesheets from the template to the target document
         * Asynchronously loads necessary resources (i.e. images) and replaces appropriate URLs with the resource Base64 representation
         * @param template Template which stylesheets have to be applied
         */
        applyStyleSheetsFromTemplate(template: ajs.templating.Template): Promise<void>;
        /**
         * Processes the stylesheet, replaces URLs with Base64 data if url is managed resource in the same storage as the template
         * @param template
         * @param index
         */
        protected _processStyleSheet(template: ajs.templating.Template, index: number): Promise<string>;
    }
}
/**
 * View namespace is dedicated to view and its exceptions only
 */
declare namespace ajs.mvvm.view {
    import ViewComponentManager = ajs.mvvm.viewmodel.ViewComponentManager;
    import DocumentManager = ajs.doc.DocumentManager;
    /**
     * View class represents a view composed from the view components. It manages the tree of instanced view components to be displayed.
     * <p>
     * It is recommended to keep just one view for one render target (and basically, only one view for the whole HTML document) as
     * it the code is not designed to exchange the data between multiple views and also interferrences can occur during the style sheet
     * management if multiple views are trying to add / remove style sheets.
     * </p>
     * <p>
     * Automatically builds the view component tree based on the passed rootViewComponentName. It automatically instantiates the root
     * component which takes care of instantiating children view components. The initial state of the root component must be set in this
     * component as it is not possible to pass the default state from the View.
     * </p>
     * <p>
     * View also catches state changes occured in the children view components and initiates the ViewComponent tree rendering
     * to the shadow DOM it manages and performs the final DOM update (using the DocumentManager) at the end of the state change.
     * Rendering and the DOM update occurs only if the state of the "state change" root component or its children was really changed.
     * This is evaluated in the particular view component. If only one of children view components of the root state change components
     * was changed the whole state chane root view component will get rendered to the shadow DOM but only changed nodes are transferred
     * to the render target so the target DOM manipulation is minimized as much as possible.
     * </p>
     */
    class View {
        protected _config: IViewConfig;
        readonly config: IViewConfig;
        /** Reference to the view component manager */
        protected _viewComponentManager: ViewComponentManager;
        /** Returns reference to the view manager used during the view construction */
        readonly viewComponentManager: ViewComponentManager;
        /** Reference to the document manager */
        protected _documentManager: DocumentManager;
        /** Returns reference to the document manager */
        readonly documentManager: DocumentManager;
        /** Reference to the element serving as a render target for the root view component */
        protected _renderTarget: Element;
        /** Returns reference to the element serving as a render target for the root view component */
        readonly renderTarget: Element;
        /** Stores name of the view component used as the root for the view */
        protected _rootViewComponentName: string;
        /** Returns currently set name of the root view component */
        /**
         * Sets the name of the root view component and internally instantiates it and its tree.
         * Additionally, it destroys the previously assigned root component and its tree and performs necessary cleanup
         */
        rootViewComponentName: string;
        /** Root view component currently in use */
        protected _rootViewComponent: ajs.mvvm.viewmodel.ViewComponent;
        /** Returns root view component currently in use */
        readonly rootViewComponent: ajs.mvvm.viewmodel.ViewComponent;
        /** Specifies the root component for the current state change. Component is then rendered (including its children) if neccessary. */
        protected _stateChangeRootComponent: ajs.mvvm.viewmodel.ViewComponent;
        /** Returns the current change root component. Valid when the stage change is in progress only */
        readonly stateChangeRootComponent: ajs.mvvm.viewmodel.ViewComponent;
        /** Used for rendering of view components after the state change and applying the changes to the render target */
        protected _shadowDom: Document;
        /** Notifies subscribers (usually view components) the Navigation event occured */
        protected _navigationNotifier: ajs.events.Notifier<void>;
        readonly navigationNotifier: ajs.events.Notifier<void>;
        /** Notifies subcribers (usually view components) the rendering of the component is finished */
        protected _renderDoneNotifier: ajs.events.Notifier<void>;
        readonly renderDoneNotifier: ajs.events.Notifier<void>;
        /** Unique component ID generator -> increments by 1 every time it is asked for the new value */
        protected _lastComponentId: number;
        /** Returns unique ID number each time it is asked for it. Currently, the view component
         *  is using this generator to assign view component unique identification, but this identification is not in use now
         */
        getNewComponentId(): number;
        /**
         * Constructs a view. This constructor is called from the ajs.Framework during initialization
         * <p>
         * View is supposed to be just one in the application. All the "view" functionality should be
         * in view components itself.
         * </p>
         * @param templateManager template manager must be instantiated before the view
         * @param viewComponentManager view component manager must be instantiated before the view
         */
        constructor(viewComponentManager: ViewComponentManager, config?: IViewConfig);
        /**
         * Default view configuration
         */
        protected _defaultConfig(): IViewConfig;
        /**
         * Called from router when navigation occurs but root component remains the same
         */
        onNavigate(): void;
        /**
         * Called from the view component when it is requested to set the new state
         * <p>
         * This information must be passed in order to be possible to recognize the
         * state change root in order to be possible to update just the correct DOM
         * tree.
         * </p>
         * @param viewComponent
         */
        stateChangeBegin(viewComponent: ajs.mvvm.viewmodel.ViewComponent): void;
        /**
         * Called from the view component when it finishes the state change
         * @param viewComponent
         */
        stateChangeEnd(viewComponent: ajs.mvvm.viewmodel.ViewComponent): void;
        /**
         * Called from the view component to inform all parents in the tree (up to state change root) the state of it has changed
         * <p>
         * This is necessary to inform the state change root component it has to render the tree of components the changed component
         * relates to. Basically, it will render all children but those trees roots which state was not changed will be marked with the
         * skip flag (and children not rendered at all) to inform DOM updater is is not necessary to update these nodes
         * </p>
         * @param viewComponent
         */
        notifyParentsChildrenStateChange(viewComponent: ajs.mvvm.viewmodel.ViewComponent): void;
        /**
         * Renders a viewComponent to the view
         * @param viewComponent
         */
        render(viewComponent: ajs.mvvm.viewmodel.ViewComponent): Element;
        /**
         * Called internally when the view root component is updated (usually initiated by the router)
         * <p>
         * Performs the target document clean up and initiates a state change and initial rendering of the rootview component
         * including its children
         * </p>
         * @param rootComponentName
         */
        protected _rootUpdated(rootComponentName: string): void;
    }
}
declare namespace ajs.mvvm.model {
    class NotImplementedException extends ajs.Exception {
    }
    class ModelConstructorIsNotFunctionException extends ajs.Exception {
    }
}
declare namespace ajs.mvvm.model {
    interface IInstancedModelsCollection<T> {
        [index: string]: {
            referenceCount: number;
            model: Model<T>;
        };
    }
}
declare namespace ajs.mvvm.model {
    class Model<T> {
        /** Hold reference to the model manager */
        protected _modelManager: ModelManager;
        /** Holds information if all initial async operations, such as data loading are done */
        protected _initialized: boolean;
        /** Returm information if all initial async operations, such as data loading are done */
        readonly initialized: boolean;
        /** Holds the data ready notifier which notifies ViewModels the requested data is ready */
        protected _dataReadyNotifier: ajs.events.Notifier<T>;
        /** Returns the data ready notifier which notifies ViewModels the requested data is ready */
        readonly dataReadyNotifier: ajs.events.Notifier<T>;
        /** Constructs the model */
        constructor(modelManager: ModelManager);
        /** Must be overriden in the inherited class */
        protected _initialize(): void;
        /**
         * This helper can be used to call specific method once the component is initialized
         * @param exception Exception to be thrown when timeout occurs
         * @param callForward Method to be called when initialization is done
         * @param param Parameter to be passed to the method
         */
        protected _checkInitialized(exception: Exception, callForward: Function): void;
    }
}
declare namespace ajs.mvvm.model {
    class ModelManager {
        protected _modelInstances: IInstancedModelsCollection<any>;
        constructor();
        protected _getModelName(modelConstructor: typeof Model): string;
        getModelInstance<T>(modelConstructor: typeof Model): Model<T>;
        freeModelInstance(modelConstructor: typeof Model): void;
    }
}
declare namespace ajs.events {
    /**
     * Template for the listener function
     * @param sender Sender identification
     * @param data Data passed from sender
     * @returns true if other subscribers should be notified or false to cancel notification propagation
     */
    interface IListener<T> {
        (sender: any, data?: T): boolean;
    }
}
/**
 * Events namespace contains Notifier class
 * Notifier clas can be instanced and used as the event notificator similiar to
 * #C delegates or addEventListener in the DOM. Listener should be a lambda function
 * to follow the TypeScript requirements regarding using of the this instance
 * identifier. The function must be defined according to the IListener interface.
 */
declare namespace ajs.events {
    /** Notifier can be instanced to let subscribers register within it and notify them about particular events */
    class Notifier<T> {
        /** List of subscribers */
        protected _listeners: IListener<T>[];
        /**
         * Instantiates the Notifier and subscribes listeners passed as parameter
         * @param listeners
         */
        constructor(...listeners: IListener<T>[]);
        /**
         * Subscribes listener to obtain notifications passed through the current instance of Notifier
         * @param listener Listener to be subscribed
         */
        subscribe(listener: IListener<T>): void;
        /**
         * Unsubscribes the listener from the current instance of the notifier
         * @param listener Listener to be subscribed
         */
        unsubscribe(listener: IListener<T>): void;
        /**
         * Notifies registered subscribers the event occured
         * Subscribers can cancel propagation to other subscribers by returning false from listener function
         * @param sender Sender object identifier
         * @param data Data to be passed to subscribers
         */
        notify(sender: any, data?: T): void;
    }
}
/**
 * dom namespace contains the DOM updater and related interfaces
 */
declare namespace ajs.doc {
    class RenderTargetNotInManagedDocumentException extends ajs.Exception {
    }
    class TargetOrParentIsUnknownException extends ajs.Exception {
    }
    class SourceNodeHasNoComponentAssignedException extends ajs.Exception {
    }
    class CSSRequiredResourceNotLoadedException extends ajs.Exception {
    }
    class CSSInvalidResourceSpecificationException extends ajs.Exception {
    }
}
declare namespace ajs.doc {
    /**
     * Represents the DOM component object (in case of Ajs it is a ViewComponent object) the DOM node belongs to
     */
    interface IComponent {
        /**
         * Uniquely identifies the component
         * In Ajs MVVM, the view has a unique component ID generator which ViewComponent is using when it is
         * created to assign unique value for each view component instance created
         */
        componentViewId: number;
    }
}
declare namespace ajs.doc {
    /** The DOM node extended with the Ajs metadata data */
    interface INode extends Node {
        ajsData: INodeData;
    }
}
declare namespace ajs.doc {
    /**
     * Node metadata generated by the renderer and stored within the node in the Shadow DOM
     * <p>
     * These metadata are copied to the target nodes in the target document and are used to identify
     * the DOM component or DOM Node component owner, inform dom updater the Node can be skupped from
     * the DOM update process or inform the DOM updater it has to register event listeners for given
     * events to the target DOM node
     * </p>
     */
    interface INodeData {
        /** Uniqe object to be assigned to the node (usually ViewComponent) - used to uniquely identify a dom component */
        component: IComponent;
        /**
         * Owner component of the node to which the metadata is added
         * can be used to identify the component when event is fired from the node
         */
        ownerComponent: IComponent;
        /** Indicates the node should be skipped from the update process */
        skipUpdate: boolean;
        /** Indicates the tag has event listeners to be registered or registered already */
        eventListeners?: INodeEventListenerInfo[];
    }
}
declare namespace ajs.doc {
    /**
     * Holds information about event listeners to be registered to the target Node by the DOM updater
     */
    interface INodeEventListenerInfo {
        /** source node (usually from the template - used to identify the same nodes on both sides) */
        source: INode;
        /** event type, such as click */
        eventType: string;
        /** event listener (usually ViewComponent method) */
        eventListener: EventListener;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
/**
 * ajs.tsx "replaces" the React.js
 * <p>
 * TSX is very very very limited reactive renderer without updating support (so elements must be
 * removed and re-rendered completely. It does not support custom components as it is not neccessary
 * for debugging interface. Its purpose is just to make development of the debug module views easier
 * and better maintanable.
 * </p>
 * <p>
 * <strong>
 * The tsx is not supposed to be used in Applications. It is for internal puproses of the ajs.debug
 * namespace only!
 * </strong>
 * </p>
 * <p>
 * It makes possible usingof the TSX compiler within the Ajs. tsx is needed just for the debug namespace
 * to render components and because storing of the HTML in string is not nice and not well mainanable the
 * decision to use the TSX was made. It is not possible to use the Ajs internally as it would interferre
 * together.
 * </p>
 * <p>
 * If the build solution configuration is "Release" the tsx as well as all debugging functions will be
 * removed from the resulting Ajs and Application JavaScript code using the post-processor.
 * </p>
 */
declare namespace ajs.dbg.tsx {
    /**
     * Creates an HTML element from the TSX template including all its children and properties defined in TSX.
     * <p>The owner document of the #see {ajs.debug.console.config.styleRenderTarget} is used to create the element</p>
     * @param tag Tag the element will be created from
     * @param props Element attributes, event listeners and data properties
     * @param children Children elements and text nodes
     */
    function createElement(tag: string, props?: any, ...children: any[]): HTMLElement;
}
/**
 * Replaces the React.js by ajs.dbg.tsx to process tsx files
 * <p>
 * ajs.dbg.tsx is simplified Reactive library without update functionality used for debug console modules rendering only.
 * </p>
 * <p>
 * <strong>It is not supposed to be used in the productional environments!</strong>
 * <p>
 * This global variable makes tsx processor available in the same way as in case the React.js is loaded by require.js.
 * </p>
 * <p>
 * Ajs framework library must be compiled with --jsx react and --reactNamespace AjsDebugTsxFactory parameters in order to
 * work correctly. For productional environments the AjsDebugTsxFactory variable and ajs.dbg* namespace/s should be
 * removed from the library
 * </p>
 */
declare let AjsDebugTsxFactory: typeof ajs.dbg.tsx;
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
/**
 * Contains the debug view components
 */
declare namespace ajs.dbg.view {
    class Body implements tsx.IViewComponent {
        protected _console: any;
        protected _currentModule: IConsoleModule;
        readonly currentModule: IConsoleModule;
        constructor(console: Console, currentModule: IConsoleModule);
        onButtonClick(e: Event): void;
        render(): HTMLElement;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.view {
    class StyleSheet implements tsx.IViewComponent {
        render(): HTMLElement;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
/**
 * The debugging namespace contain the debugging console and debugging tools for Ajs and Application developers
 */
declare namespace ajs.dbg {
    class Console {
        protected _config: IConsoleConfig;
        readonly config: IConsoleConfig;
        protected _modules: IConsoleModuleCollection;
        readonly modules: IConsoleModuleCollection;
        protected _styleElements: HTMLElement[];
        protected _bodyElement: HTMLElement;
        protected _body: view.Body;
        protected _styleSheet: view.StyleSheet;
        protected _infoElement: HTMLDivElement;
        constructor(config: IConsoleConfig);
        setInfo(info: string): void;
        refresh(): void;
        show(): void;
        hide(): void;
        getModule(name: string): IConsoleModule;
        protected _registerModule(name: string, module: IConsoleModule): void;
        protected _registerModules(): void;
    }
    let console: Console;
    function init(config: IConsoleConfig): void;
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg {
    interface IConsoleConfig {
        styleRenderTarget: HTMLElement;
        bodyRenderTarget: HTMLElement;
        showOnBootDelay: number;
        loggerConfig: ajs.dbg.modules.logger.ILoggerConfig;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg {
    interface IConsoleModule {
        getButtonLabel(): string;
        renderStyleSheet(): any;
        renderToolbar(): any;
        renderBody(): any;
        bodyRendered(): void;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg {
    interface IConsoleModuleCollection {
        [key: string]: IConsoleModule;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    class LogBody implements tsx.IViewComponent {
        protected _logElement: HTMLDivElement;
        protected _lastSelected: HTMLTableRowElement;
        protected _lastMarked: HTMLTableRowElement;
        protected _logger: Logger;
        protected _log: ILogRecord[];
        constructor(logger: Logger);
        protected _selectRow(e: MouseEvent): void;
        protected _scroll(e: Event): void;
        setBreakpoint(): void;
        unsetBreakpoint(): void;
        clearBreakpoints(): void;
        render(): HTMLElement;
        protected _getType(object: any): string;
        rendered(doc: Document): void;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    class LoggerStyleSheet implements tsx.IViewComponent {
        protected _log: Logger;
        constructor(log: Logger);
        render(): HTMLElement;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    class LoggerToolbar implements tsx.IViewComponent {
        protected _log: Logger;
        protected _element: HTMLElement;
        constructor(log: Logger);
        protected _refreshClick(e: MouseEvent): void;
        protected _setBreakpointClick(e: MouseEvent): void;
        protected _resetBreakpointClick(e: MouseEvent): void;
        protected _clearBreakpointsClick(e: MouseEvent): void;
        enableBreakpoints(): void;
        render(): HTMLElement;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
/**
 * Contains view components of the log debug module
 */
declare namespace ajs.dbg.modules.logger {
    interface ISameTypeCounterCollection {
        [key: string]: number;
    }
    interface IBreakPoint {
        recordTypeId: string;
        occurence: number;
    }
    class Logger implements dbg.IConsoleModule {
        protected _console: ajs.dbg.Console;
        protected _config: ILoggerConfig;
        protected _initTime: number;
        readonly initTime: number;
        protected _records: ILogRecord[];
        readonly records: ILogRecord[];
        protected _sameTypeCounter: ISameTypeCounterCollection;
        protected _breakpoints: IBreakPoint[];
        protected _styleSheet: LoggerStyleSheet;
        protected _toolBar: LoggerToolbar;
        protected _body: LogBody;
        protected _bodyElement: HTMLElement;
        protected _selectedItem: ILogRecord;
        constructor(console: ajs.dbg.Console, config: ILoggerConfig);
        setInfo(info: string): void;
        refresh(): void;
        setBreakpoint(): void;
        resetBreakpoint(): void;
        clearBreakpoints(): void;
        itemSelected(item: ILogRecord): void;
        protected _getFunctionInfo(): IFunctionInfo;
        log(type: LogType, level: number, sourceModule: string, object: any, message?: string, ...data: any[]): void;
        protected _checkBreakPoint(typeId: string, occurence: number): boolean;
        getButtonLabel(): string;
        renderStyleSheet(): any;
        renderToolbar(): any;
        renderBody(): any;
        bodyRendered(): void;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg {
    enum LogType {
        Enter = 0,
        Exit = 1,
        Constructor = 2,
        Info = 3,
        Warning = 4,
        Error = 5,
        DomAddListener = 6,
        DomRemoveListener = 7,
        DomAppendChild = 8,
        DomRemoveChild = 9,
        DomReplaceChild = 10,
    }
    function log(type: LogType, level: number, module: string, object: any, message?: string, ...data: any[]): void;
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.tsx {
    /** Interface for the TSX View Component */
    interface IViewComponent {
        render(): void;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    /** Function information stored with the log record */
    interface IFunctionInfo {
        /** Name of the function */
        name: string;
        /** Function caller */
        caller: string;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    /** Logger configuration */
    interface ILoggerConfig {
        /** Enable or disable logging */
        enabled: boolean;
        /** Log only types of records mentioned in this array */
        logTypes: LogType[];
        /** Modules from which the log records are accepted by the logger */
        sourceModules: string[];
        /** Maximum level of log records to be included in the log */
        maxLevel: number;
        /** Enable or disable logging of data passed to log function to the console */
        logDataToConsole: boolean;
    }
}
/*! ************************************************************************
The MIT License (MIT)
Copyright (c)2016-2017 Atom Software Studios. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
**************************************************************************** */
declare namespace ajs.dbg.modules.logger {
    /** Single log record data */
    interface ILogRecord {
        /** Identifier of the same type log records computed as type + level + module + object + function */
        sameTypeId: string;
        /** Time/date of the log record creation */
        time: Date;
        /** Number of occurence of the same type of the log records from the log beginning */
        occurence: number;
        /** Type of the log record #see {ajs.debug.LogType} */
        type: dbg.LogType;
        /** Level (importance) of the log record */
        level: number;
        /** Module creating the log record */
        module: string;
        /** Object (class) creating the log record */
        object: any;
        /** Function creating the log record */
        function: string;
        /** Caller of the function creating the log lecord */
        caller: string;
        /** Message to be displayed */
        message: string;
        /** Number of the data passed to logger function and eventually logged to the console */
        data: number;
        /** Internally indicates if the log record is marked as breakpoint */
        breakpoint: boolean;
    }
}
/**
 * Boot namespace contains the boot loader and associated interfaces
 * <p>
 * _boot function is called automatically when window.onload event occur. It
 * loads resources configured in the ajs.boot.config and intializes and
 * starts the framework.
 * </p>
 * Boot expect the ajs.boot namespace contain following functions implementation:
 * <ul>
 *    <li>getResourceLists = function(): IResourceLists {
 *        let resourceLists: IResourceLists = { ... }; return resourceLists; }</li>
 *    <li>getAjsConfig(): IAajsConfig {
 *        let ajsConfig: IAjsConfig = { ... }; return ajsConfig; }</li>
 *    <li>getApplicationConfig = function(): ajs.app.IApplicationConfig {
 *        let applicationConfig = { ... }; return applicationConfig }</li>
 * </ul>
 */
declare namespace ajs.boot {
    /**
     * Function returning the Ajs Framework configuration.
     * This function must be declared in the ajs.boot.config file (usually separate
     * VS project) and loaded during the index.html loading
     */
    let getAjsConfig: IGetAjsConfig;
    /**
     * Function returning the list of application resources to be loaded
     * This function must be declared in the ajs.boot.config file (usually separate
     * VS project) and loaded during the index.html loading
     */
    let getResourceLists: IGetResourceLists;
    /**
     * Function returning the application configuratopn
     * This function must be declared in the ajs.boot.config file (usually separate
     * VS project) and loaded during the index.html loading
     */
    let getApplicationInfo: IGetApplicationInfo;
}
declare namespace ajs.boot {
    /** Fired if the ajs.boot.getAjsConfig function is not defined */
    class GetAjsConfigFunctionNotDefinedException extends ajs.Exception {
    }
    /** Fired if the ajs.boot.getAjsConfig function is not defined */
    class GetApplicationConfigFunctionNotDefinedException extends ajs.Exception {
    }
    /** Fired if the ajs.boot.getResourceList function is not defined */
    class GetResourceListFunctionNotDefinedException extends ajs.Exception {
    }
    /** Fired when loading resources specified in the configuration file fails */
    class ResourcesLoadingFailedException extends ajs.Exception {
    }
}
declare namespace ajs.boot {
    /**
     * Boot module configuration
     */
    interface IBootConfig {
        /**
         * Specifies if the cahcable cached resources returned by the @see ajs.boot.getResourceLists
         * are preferably loaded from server or the cache
         */
        bootResourcesLoadingPreference: resources.LOADING_PREFERENCE;
        /**
         * Specifies if the offline support is required during the ajs boot
         * If so it can take 500ms the ajs will get started as there is a fallback to make sure the
         * application will get started even if Application Cache events will not be fired
         */
        offlineSupport: boolean;
    }
}
declare namespace ajs.boot {
    /**
     * Defines the function returning the ajs application configuration
     * This function must be implemented in the cofiguration file (namepace ajs.boot)
     * and loaded by html page. It is expcected to be defined in the ajs.boot namespace.
     */
    interface IGetApplicationInfo {
        (): ajs.app.IApplicationInfo;
    }
}
declare namespace ajs.boot {
    /**
     * Defines the function returning the ajs framework configuration
     * This function must be implemented in the cofiguration file (namepace ajs.boot)
     * and loaded by html page. It is expcected to be defined in the ajs.boot namespace.
     */
    interface IGetAjsConfig {
        (): IAjsConfig;
    }
}
declare namespace ajs.boot {
    /**
     * Defines the function returning the resources required to be loaded during the boot time
     * This function must be implemented in the cofiguration file (namepace ajs.boot) and loaded
     * by html page. It is expcected the function will be declred in the ajs.boot namespace.
     */
    interface IGetResourceLists {
        (): IResourceLists;
    }
}
declare namespace ajs.boot {
    /** Output of the ajs.boot.getResourceLists function contains all resources to be loaded */
    interface IResourceLists {
        /** loads resources to the local store with the permanent caching policy */
        localPermanent?: string[];
        /** loads resources to the local store with the last recently used caching policy */
        localLastRecentlyUsed?: string[];
        /** loads resources to the session store with the permanent caching policy */
        sessionPermanent?: string[];
        /** loads resources to the session store with the last recently used caching policy */
        sessionLastRecentlyUsed?: string[];
        /** loads resources to the memory store with the permanent caching policy */
        memoryPermanent?: string[];
        /** loads resources to the memory store with the last recently used caching policy */
        memoryLastRecentlyUsed?: string[];
        /** loads resources directly from the server without using of the store */
        direct?: string[];
    }
}
/**
 * Contains base classes for the Ajs Application, application configuration and exceptions.
 * <p>The Application class has to be derived by the user code to initialize the
 * application, load necessary resources and setup routes.</p>
 * <p>The derived application class is construced and initialized during the
 * framework boot process. The boot manager calls the framework to instantiate,
 * configure and initialize the application.</p>
 * <p>As the application initialization can be an asynchronous process (resources
 * could be loading and additional user tasks can be done during the initialization)
 * so it is necessary to call the _initDone method once the initialization is completed.</p>
 * <h5>Application Initialization Example</h5>
 * #example app_init
 *
 */
declare namespace ajs.app {
    /**
     * The application class should be derived by the user application class in order
     * to perform basic application tasks such as application initialization, application
     * resource loading, routes setup, application state loading and so on
     */
    abstract class Application {
        /** Stores the configuration passed to the application from the boot config */
        protected _config: IApplicationConfig;
        /** Returns the application configuration */
        readonly config: IApplicationConfig;
        /** Indicates if the application was succesfully initialized.
         *  _initDone should be called when the user application initialization routines finishes
         */
        protected _initialized: boolean;
        /** Returns the application initialization status */
        readonly initialized: boolean;
        /**
         * Constructs the application object, stores the configuration to it and add event listener
         * for beforeunload window event. The _finalize method is called when the navigation is
         * going out of the page
         * @param config Application configuration. TODO: Not in use now. It can be used by the user application
         */
        constructor(config: IApplicationConfig);
        /**
         * MUST BE OVERRIDEN IN THE INHERITED APPLICATION CLASS
         * Called from the framework during as a last step of the initialization procedure
         * Must be overriden by the children class to initialize the user application. The
         * overriden method (or async methods called in the chain) must make sure the
         * this._initDone() method is called in order to run the application
         */
        abstract initialize(): void;
        /**
         * Must be called by inherited class super.initDone(); at the end of initialization
         * of the user application in order the application will get started
         */
        protected _initDone(): void;
        /**
         * Starts the application by navigating to the page specified in the url adress bar of the browser
         * @throws NotInitializedException Thrown when _run is called but the application was not
         *                                 initialized by calling the _initDone method
         */
        protected _run(): void;
        /**
         * MUST BE OVERRIDEN IN THE INHERITED APPLICATION CLASS
         * Called on window.beforeunload event in order to store the application state before
         * user leaves the page or to cleanup procedures (such as clearing timers and so on). This
         * method should not be used for displaying the dialog and asking user if he is sure to leave
         * the page. This should be done directly in the user application by adding additional
         * beforeunload event handler (will be usualy done in some root ViewComponent)
         */
        protected abstract _finalize(): void;
    }
}
declare namespace ajs.app {
    /**
     * Thrown when the application recognizes it was not initialized before calling the _run method
     */
    class NotInitializedException extends ajs.Exception {
    }
    /**
     * Thrown when the inherited application does not implement required functionality
     */
    class NotImplementedException extends ajs.Exception {
    }
}
declare namespace ajs.app {
    /**
     * User configuration of the application
     */
    interface IApplicationConfig {
    }
}
declare namespace ajs.app {
    /**
     * TODO: This is not defined yet. At least name of the error
     * view component should be defined here
     */
    interface IApplicationInfo {
        /** Constructor of the user application class derived from the ajs.app.Application class */
        appConstructor: typeof ajs.app.Application;
        /** User configuration of the application */
        config?: IApplicationConfig;
    }
}
