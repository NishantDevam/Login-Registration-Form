import { Schema, SchemaDefinitionProperty } from "mongoose";

// terrible 
type BaseSchemaParam = { [key: string]: SchemaDefinitionProperty };

export class BaseSchema extends Schema {
    constructor(schema: BaseSchemaParam) {
        super({
            ...schema,
            isDeleted: {
                type: Boolean,
                default: false
            }
        }, {
            timestamps: true
        });
    }
}