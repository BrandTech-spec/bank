import { StatCard } from "./StatCard";
import { Link } from "react-router-dom";
import { DataTable } from "./DataTable";
import { columnsB } from "./Column";
import { useGetAllUsers } from "@/actions/tanstack/query";
import { Loader2, LogOut } from "lucide-react";

const AdminPage = () => {
  const { data, isPending } = useGetAllUsers();
  console.log(data);
  const oldUser = data?.filter((u) => u?.status === "ancien")
  const newUser = data?.filter((u) => u?.status === "nouveau")

  return (
    <div className="mx-auto flex min-h-screen w-full text-white bg-dark-100 flex-col space-y-14">
      <header className="admin-header">
        <Link to="/" className="cursor-pointer">
          <img
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <div className="flex items-center justify-center gap-4">
         
          <p className="text-16-semibold">Tableau de bord administrateur</p>
          <Link to="/">
          <LogOut/>
          </Link>
        </div>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Bienvenue👋</h1>
          <p className="text-dark-700">
            Commencez la journée en gérant de nouveaux rendez-vous
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointment"
            count={data?.length!}
            label="Nombre total d'utilisateurs"
            icon={"./assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={newUser?.length!}
            label="Nouveaux utilisateurs"
            icon={"./assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={oldUser?.length!}
            label="Anciens utilisateurs"
            icon={"./assets/icons/cancelled.svg"}
          />
        </section>

        {isPending ? (
          <Loader2 className=" text-bankGradient animate-spin" />
        ) : (
          <DataTable columns={columnsB} data={data!} />
        )}
      </main>
    </div>
  );
};

export default AdminPage;
