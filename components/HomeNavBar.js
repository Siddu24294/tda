import {Button,Link , Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

export default function HomeNavBar() {
    return (
        <Navbar className={"bg-gradient-to-r from-orange-500 to-orange-300 flex flex-row justify-between *:max-w-[100vw]"}>
            <NavbarBrand>
                <p className="font-bold text-amber-100 text-inherit">TDA</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/signup" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}