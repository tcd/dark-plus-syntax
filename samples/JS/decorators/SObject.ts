import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
} from "sequelize-typescript"

const some = null;
@Table({
    tableName: "SObjects",
    any: some,
})
export class SObject extends Model<SObject> {

    @Column
    name!: string;

    @Column
    custom: boolean;

    @Column
    queryable: boolean;

    @Column
    alias?: string;

    @Column
    description: string;

    @Column
    salesforce_count: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
