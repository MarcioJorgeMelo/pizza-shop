import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";

export function Header() {
    return (
        <div className="border-b flex h-16 items-center">
            <div className="flex items-center h-fit gap-6 px-6">
                <Pizza className="h-6 w-6" />

                <Separator orientation="vertical" />

                <nav className="flex items-center space-x-4 lg:space-x-6">
                    <NavLink to="/">
                        <Home className="h-4 w-4" />
                        Início
                    </NavLink>

                    <NavLink to="/orders">
                        <UtensilsCrossed className="h-4 w-4" />
                        Pedidos
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}