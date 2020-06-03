import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Item from '../entities/Item';

class CreateItem implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Item)
      .values([
        { image: 'lampadas.svg', title: 'Lâmpadas' },
        { image: 'baterias.svg', title: 'Pilhas e Baterias' },
        { image: 'papeis-papelao.svg', title: 'Papéis e Papelão' },
        { image: 'eletronicos.svg', title: 'Resíduos Eletrônicos' },
        { image: 'organicos.svg', title: 'Resíduos Orgânicos' },
        { image: 'oleo.svg', title: 'Óleo de Cozinha' },
      ])
      .execute();
  }
}

export default CreateItem;
