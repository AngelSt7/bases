export interface Character extends CreateCharacter {
  id: number
}

export interface CreateCharacter {
  name: string
  power: number
}