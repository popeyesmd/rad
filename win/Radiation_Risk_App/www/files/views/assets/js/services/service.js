/*
 * Service settings
 */
var CarePass_ServicesSettings = {
    "CarepassSync": "xz8626kv66eagwxby2ex6f5c",
    "ClientSecret": "qExXSCuPgn22DjVeXyjp6S6s",
    "ProjectURI": "http://appery.io/app/view/76c1243c-7c9f-4fcc-bd10-0ef35c0a1435/CarePass_Login.html",
    "Scope": "IDENTITY,FITNESS,BODYMEASUREMENT",
    "Host": "https://www.carepass.com/carepass/oauth",
    "database_url": "https://api.tiggzi.com/rest/1/db",
    "database_id": "51387133e4b0fa3619e9d5ec"
}
var procedureDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "51cf0a2ce4b0bd4362ba7376"
}

/*
 * Services
 */

var procedureDB_procedure_query_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var CarePass_GetAccessToken = new Appery.RestService({
    'url': '{Host}/token',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CarePass_ServicesSettings
});

var procedureDB_procedure_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': procedureDB_settings
});

var RESTService = new Appery.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var procedureDB_procedure_list_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link_query_service = new Appery.RestService({
    'url': '{database_url}/collections/link',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link_list_service = new Appery.RestService({
    'url': '{database_url}/collections/link',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureservice = new Appery.RestService({
    'url': '',
    'dataType': 'json',
    'type': 'get',
});

var procedureDB_link_read_service = new Appery.RestService({
    'url': '{database_url}/collections/link/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedure_read_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link_create_service = new Appery.RestService({
    'url': '{database_url}/collections/link',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedure_update_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/link/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link_update_service = new Appery.RestService({
    'url': '{database_url}/collections/link/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedure_create_service = new Appery.RestService({
    'url': '{database_url}/collections/procedure',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var CarePass_BodyMeasurements_POST = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

var CarePass_BodyMeasurements_Filter_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var CarePass_Fitness_Activity_Id_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var CarePass_Measurement_query_service = new Appery.RestService({
    'url': '{database_url}/collections/Measurement',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CarePass_ServicesSettings
});

var CarePass_Fitness_Activity_DELETE = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'delete',
});

var CarePass_BodyMeasurements_Id_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var procedureDB_procedureCPT_update_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var CarePass_CurrentUser_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var procedureDB_procedureCPT_read_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedureCPT_create_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var CarePass_Fitness_AllActivities_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var CarePass_Fitness_Activity_POST = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',
});

var CarePass_Fitness_ActivitiesFilter_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var CarePass_BodyMeasurements_Latest_GET = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',
});

var procedureDB_procedureCPT_query_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_create_service = new Appery.RestService({
    'url': '{database_url}/collections/link2',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedureCPT_list_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_read_service = new Appery.RestService({
    'url': '{database_url}/collections/link2/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_procedureCPT_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/procedureCPT/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_update_service = new Appery.RestService({
    'url': '{database_url}/collections/link2/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_list_service = new Appery.RestService({
    'url': '{database_url}/collections/link2',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/link2/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': procedureDB_settings
});

var procedureDB_link2_query_service = new Appery.RestService({
    'url': '{database_url}/collections/link2',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': procedureDB_settings
});
var GeolocationService = new Appery.GeolocationService({});