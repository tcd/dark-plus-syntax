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
export class {
    @CreatedAt
    @Column
    createdAt() {
        return null
    }
}
