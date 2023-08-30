import { create } from "zustand";
import { users } from "../constants/users";
import { user } from "../types";

type StoreUser = {
    state: {
        repo: user[]
    },
}

const useUsers = create<StoreUser>(() => ({
    state: {
        repo: users
    }
}))

export default useUsers
