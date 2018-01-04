import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        {id: 11, name: 'Metal Man'},
        {id: 12, name: 'Liquid Man'},
        {id: 13, name: 'Gas Man'},
        {id: 14, name: 'Metal Woman'},
        {id: 15, name: 'Liquid Woman'},
        {id: 16, name: 'Gas Woman'},
        {id: 17, name: 'Fire Man'},
        {id: 18, name: 'Ice Woman'},
        {id: 19, name: 'Lightning Person'},
        {id: 20, name: 'Wind Guy'},
    ];
    return {heroes};
  }
}