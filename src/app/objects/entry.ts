import {User} from './user';

export interface Entry {
  title: string;
  content: string;
  tags: string;
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  private: Boolean;
}
