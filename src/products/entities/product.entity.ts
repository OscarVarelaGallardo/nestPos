import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'varchar', length: 100 })
    name: string;
    @Column({ type: 'text', nullable: true })
    description: string;
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
    @Column({ type: 'varchar', length: 100, nullable: true, default: 'default.jpg' })
    img: string;
    @Column({ type: 'int', default: 0 }) 
    inventory: number;
    
    @ManyToOne(() => Category, (category) => category.products, { nullable: false })
    @JoinColumn({ name: 'categoryId' })
    category: Category;

    @Column()
    categoryId: number;

}
