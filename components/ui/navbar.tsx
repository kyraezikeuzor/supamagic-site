import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
import Modal from "./modal";
import { Menu, Heart } from 'lucide-react'
import { navbar } from "@/assets/content/site";
import { Navigate } from './navigate'

const navList = navbar.map((item, index) => (
  <Link
    key={index}
    href={`${item.page}`}
    className="hover:underline underline-offset-4 decoration-2 decoration-[--clr-green-base]"
  >
    <li>{item.title}</li>
  </Link>
));

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col items-end justify-center py-4 px-[12vw] fixed top-0 z-[9999]">

    <div className="flex flex-row gap-2 h-5 font-medium items-center px-3">
        <Navigate targetId="work" navigateId="navigateWork" parentPage="/">
            How it Works
        </Navigate>
        <Navigate targetId="projects" navigateId="navigateProjects" parentPage="/">
            Client Work
        </Navigate>
        <Navigate targetId="writing" navigateId="navigateWriting" parentPage="/">
            Pricing
        </Navigate>
        <Navigate targetId="press" navigateId="navigatePress" parentPage="/">
            FAQs
        </Navigate>
    </div>

      <div className="w-full flex flex-row lg:hidden px-5 py-[1vh] justify-end items-center">
        <Modal
          modalClassName="absolute top-8 right-4"
          toggleElement={<Menu/>}
        >
          <div className="flex flex-col items-start gap-5 text-lg font-medium">
            <ul className="flex flex-col items-start gap-3">{navList}</ul>
            <Button path="https://hcb.hackclub.com/donations/start/omelora">
              Support{" "}
              <Heart className='fill-white'/>
            </Button>
          </div>
        </Modal>
      </div>
    </nav>
  );
}
