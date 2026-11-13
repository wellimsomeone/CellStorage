/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[A-Z]{3}[0-9]{4}",
        "help": "Example: LAM0001",
        "hidden": false,
        "id": "text3208210256",
        "max": 7,
        "min": 7,
        "name": "id",
        "pattern": "[a-z0-9]",
        "presentable": true,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "help": "",
        "hidden": false,
        "id": "select1274211008",
        "maxSelect": 0,
        "name": "select",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Cs",
          "Vac"
        ]
      },
      {
        "help": "",
        "hidden": false,
        "id": "date2902651480",
        "max": "",
        "min": "",
        "name": "manufacturingDate",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text2092856725",
        "max": 0,
        "min": 0,
        "name": "material",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "in mm",
        "hidden": false,
        "id": "number1723270484",
        "max": null,
        "min": null,
        "name": "optLength",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3399205276",
        "max": 0,
        "min": 0,
        "name": "dimension",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "",
        "hidden": false,
        "id": "select3710975960",
        "maxSelect": 1,
        "name": "shape",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "cyl"
        ]
      },
      {
        "help": "",
        "hidden": false,
        "id": "select4046528450",
        "maxSelect": 0,
        "name": "coating",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "none"
        ]
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3379424803",
        "max": 0,
        "min": 0,
        "name": "fillingType",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text1587448267",
        "max": 0,
        "min": 0,
        "name": "location",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "help": "",
        "hidden": false,
        "id": "relation2639207039",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "inUseBy",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1598446135",
    "indexes": [],
    "listRule": null,
    "name": "Cells",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1598446135");

  return app.delete(collection);
})
