"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-foreground/10 bg-primary/95 backdrop-blur-md supports-[backdrop-filter]:bg-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image src="/nc-logo.png" alt="Cade Legal Symbol" width={80} height={80} className="h-16 w-auto object-contain" priority />
          <Image src="/nc-text.png" alt="Cade Legal Text" width={240} height={80} className="h-14 w-auto object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:text-primary data-[state=open]:text-primary focus:text-primary")}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:text-primary data-[state=open]:text-primary focus:text-primary">Immigration</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {siteConfig.immigrationServices.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/about" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:text-primary data-[state=open]:text-primary focus:text-primary")}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/resources" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:text-primary data-[state=open]:text-primary focus:text-primary")}>
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary text-primary-foreground border-l-primary-foreground/10 p-6">
              <div className="flex flex-col space-y-8 mt-4">
                <SheetClose nativeButton={false} render={<Link href="/" className="flex items-center space-x-3" />}>
                  <Image src="/nc-logo.png" alt="Cade Legal Symbol" width={60} height={60} className="h-12 w-auto object-contain" />
                  <Image src="/nc-text.png" alt="Cade Legal Text" width={180} height={60} className="h-12 w-auto object-contain" />
                </SheetClose>
                
                <nav className="flex flex-col space-y-6">
                  <SheetClose nativeButton={false} render={<Link href="/" className="text-lg md:text-xl font-heading font-medium text-primary-foreground/90 transition-colors hover:text-white" />}>
                    Home
                  </SheetClose>
                  
                  <div className="flex flex-col space-y-3">
                    <span className="text-lg md:text-xl font-heading font-medium text-primary-foreground/90">Immigration</span>
                    <div className="pl-4 flex flex-col space-y-3 border-l border-primary-foreground/20">
                      {siteConfig.immigrationServices.map((service) => (
                        <SheetClose
                          key={service.href}
                          nativeButton={false}
                          render={<Link href={service.href} className="text-primary-foreground/70 hover:text-gold transition-colors" />}
                        >
                          {service.title}
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                  
                  <SheetClose nativeButton={false} render={<Link href="/about" className="text-lg md:text-xl font-heading font-medium text-primary-foreground/90 transition-colors hover:text-white" />}>
                    About
                  </SheetClose>
                  
                  <SheetClose nativeButton={false} render={<Link href="/resources" className="text-lg md:text-xl font-heading font-medium text-primary-foreground/90 transition-colors hover:text-white" />}>
                    Resources
                  </SheetClose>
                </nav>
                
                <div className="pt-8 border-t border-primary-foreground/20">
                  <SheetClose nativeButton={false} render={<Button asChild variant="secondary" className="w-full rounded-full text-foreground hover:bg-white" />}>
                    <Link href="/contact">Schedule Consultation</Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink render={
        <Link
          href={href || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      } />
    </li>
  );
});
ListItem.displayName = "ListItem";
