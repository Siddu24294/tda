import {Button, Card, CardFooter, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import HomeNavBar from "@/components/HomeNavBar";
import HomeMainCard from "@/components/HomeMainCard";


export default function Home() {
    return (
       <>
            <HomeNavBar/>
           <HomeMainCard/>
           <>this is a pagge</>
       </>
    );
}
