import {Button, Card, CardFooter, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import HomeNavBar from "@/components/HomeNavBar";
import HomeMainCard from "@/components/HomeMainCard";


export default function Home() {
    return (
       <>
            <HomeNavBar/>
           <HomeMainCard/>
           <>this is a pagge</>
            <Link href={"/csrf"}>csrf</Link>
       </>
    );
}
