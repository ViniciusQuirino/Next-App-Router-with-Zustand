import CardClientes from "@/components/CardClientes";
import { api } from "@/services/api";
import { IClient } from "@/stores/useClientStore";

const ClientesZustand = async () => {
  // SERVIDOR
  const { data } = await api.get<IClient[]>("/posts");

  return (
    <div>
      <CardClientes data={data} />
    </div>
  );
};

export default ClientesZustand;
