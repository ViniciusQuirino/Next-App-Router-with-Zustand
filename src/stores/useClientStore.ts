import { api } from "@/services/api";
import { create } from "zustand";

export interface IClient {
  id: number;
  codigo: string;
  nome: string;
}

export interface IClientStore {
  error: string;
  clientData: IClient[];
  loadClientData: () => Promise<void>;
}

export const useClientStore = create<IClientStore>((set) => ({
  error: "",
  clientData: [],
  loadClientData: async () => {
    try {
      set({ error: "" });
      const { data } = await api.get<IClient[]>("/posts");

      set({ clientData: data });
    } catch (error) {
      console.log(error);
      //  throw new Error("Failed");
    }
  },
}));
