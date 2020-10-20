export interface CreateUserInput {
  _id?: string
  email: string
  familyName: string
  givenName: string
  googleId: string
  imageUrl: string
  name: string
};

export interface UpdateUserInput {
  _id: string
  name?: string
  email?: string
  imageUrl?: string
  bio?: string
  status?: string
};

export interface MutationCreateUser {
  userDetails: CreateUserInput
}

export interface MutationDeleteUser {
  _id: string
}

export interface MutationUpdateUser {
  userDetails: UpdateUserInput
}

export interface QueryGetUserById {
  _id: string
}
