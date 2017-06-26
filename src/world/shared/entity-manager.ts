import { Injectable } from '@angular/core';

// Entities
export const WORLD: string = 'world';
export const ENTITIES: string[] = [WORLD];


@Injectable()
export class EntityManagerService {
  static getEntityRoute(method: string, entity: string) {
    method = method.toUpperCase();
    entity = entity.toLowerCase();
    switch (entity) {
      case WORLD:
        if (method === 'POST') {
          return '/api/v1/worlds/';
        } else if (method === 'PUT') {
          return '/api/v1/worlds/';
        }
        break;
    }
  }
}
