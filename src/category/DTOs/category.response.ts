import { CategoryEntity } from "../category.entity";

export class CategoryDTO {
    description:string;
    createDate:Date;

    fromCategory(category:CategoryEntity){
        this.description = category.decription;
        this.createDate = category.createDate;
    }
}