import { BaseService } from "./BaseService";
import { Character } from "@/models";

export class CharacterService extends BaseService {
  static get entity() {
    return "characters";
  }

  static async getList(
    parameters: object
  ): Promise<Character[] | Error> {
    const params = { ...parameters };

    try {
      const response = await super
        .request({ auth: true })
        .get<Character[]>(`${this.entity}`, {
          params
        });
      return response.data
    } catch (error) {
      throw new Error(error);
    }
  }
}
