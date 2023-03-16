export interface ISkillFromApi {
  id: number;
  name: string;
}

export interface IGradeFromApi {
  id: number;
  grade: number;
  skill: ISkillFromApi;
}

export interface IWilderFromApi {
  id: number;
  name: string;
  city: string;
  skill: IGradeFromApi[];
  grade: any;
}
