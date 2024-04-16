import {Navbar, NavbarBrand} from "@nextui-org/react";
import {} from "@nextui-org/react";
export default function AuthLayout({children}) {
    return (
        <section>
            <Navbar className={"bg-gradient-to-r from-orange-500 to-orange-300 flex flex-row justify-between *:max-w-[100vw]"}>
                <NavbarBrand className={"flex justify-center"}>
                    <p className={"font-bold text-inherit text-amber-100"}>TDA</p>
                </NavbarBrand>
            </Navbar>
            {children}
        </section>
    )
}