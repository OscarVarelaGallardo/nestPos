import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Price must be a number' })
    @IsNotEmpty({ message: 'Price is required' })
    price: number;

    @IsString({ message: 'Img must be a string' })
    @IsNotEmpty({ message: 'Img is required' })
    img: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Inventory must be a number' })
    @IsNotEmpty({ message: 'Inventory is required' })
    inventory: number;

    @IsNumber({}, { message: 'Category ID must be a number' })
    @IsNotEmpty({ message: 'Category ID is required' })
    categoryId: number;
}