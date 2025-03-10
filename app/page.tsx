import Image from "next/image";
import Button from "@/components/ui/button";
import Toolbar from "@/components/ui/toolbar";
import AnimationMorphGradient from "@/components/ui/animation";
import { Navigate } from "@/components/ui/navigate";
import Logo from "@/components/ui/logo";
import { cal30MinLink } from "@/assets/content/links";
import { ArrowDown, Calendar, Plane, Star } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import ProjectCard from '@/components/ui/project-card';
import { projects } from '@/lib/projects';
import {ProjectScroll} from '@/components/ui/project-scroll';

export default function Home() {
  return (
    <main className="flex flex-col">
      
      <header className="min-h-screen flex items-center justify-center">
        <AnimationMorphGradient>
          <section className="z-50 w-full flex flex-col gap-5 m-5 p-8 md:p-12 md:mx-[15vw] lg:p-12 lg:mx-[25vw] 2xl:mx-[30vw] bg-[--clr-base-accent] rounded-3xl border border-[--clr-base-accent] drop-shadow-sm">
            <div className="flex flex-row items-center justify-start gap-2 rounded-full pl-1 pr-4 py-1 w-full">
              <div className="flex -space-x-3">
                <Avatar className="border-2 border-[--clr-base-accent] w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-[--clr-base-accent] w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-[--clr-base-accent] w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-[--clr-base-accent] w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-500" />
                  ))}
                </div>
                <span className="text-md font-medium text-[--clr-grey-base]">Loved by 300+ users</span>
              </div>
            </div>
            <h1 className="leading-[1.1]">
              We build fast, high performing sites at{" "}<br className="hidden md:block"/> 
              <span className="inline-flex align-middle flex flex-row gap-2">
                <Logo variant="minimal" asLink={false} />Supamagic.
              </span>
            </h1>
            <p className="leading-[1.4] text-lg md:text-xl text-[--clr-grey-base] font-">
              We craft sleek, results-driven sites that turn clicks into customers and help your business grow.
            </p>
            <div className="flex flex-row gap-3 mt-5">
              <Button path={cal30MinLink}>
                Book a call{" "}
                <Calendar className='text-inherit'/>
              </Button>
              <Navigate
                targetId="work"
                navigateId="seeWorkButton"
                parentPage="/"
              >
                <Button outline>
                  See work{" "}
                  <ArrowDown className='text-inherit'/>
                </Button>
              </Navigate>
            </div>
          </section>
        </AnimationMorphGradient>
      </header>

      <section id="work" className="min-h-screen  flex flex-col gap-5 py-20 px-5 md:px-20 lg:px-32">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h2>Explore our recent work</h2>
          <p className="text-xl text-[--clr-grey-base]">Check out our latest projects</p>
        </div>
        <ProjectScroll projects={projects} />
      </section>

      <section className="min-h-screen flex flex-col gap-20 py-20 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-3 text-center">
          <h2>Your website should do the most marketing for you. But it&apos;s not.</h2>
          <p className="text-xl">You need to turn website views into customers.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-5 p-8 bg-[--clr-base-accent] rounded-xl">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-xl font-semibold">Identify the Problem Areas</h4>
                <p className="text-base text-[--clr-grey-base]">
                  We analyze your current site or app to find issues in design, user experience, and functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-5 p-8 bg-[--clr-base-accent] rounded-xl">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-xl font-semibold">Design & Development</h4>
                <p className="text-base text-[--clr-grey-base]">
                  Our team creates a custom solution that addresses your specific needs and goals.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-5 p-8 bg-[--clr-base-accent] rounded-xl">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="text-xl font-semibold">Launch & Optimize</h4>
                <p className="text-base text-[--clr-grey-base]">
                  We deploy your solution and continuously optimize for peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="min-h-screen flex flex-col gap-10 py-20 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-5 text-center">
          <h2>Clear pricing, clear results.</h2>
          <p className="text-xl">Simple pricing with Stripe.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Basic Website</CardTitle>
              <CardDescription className="text-3xl md:text-4xl font-bold mt-2 text-[--clr-grey-base]">$250</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg text-[--clr-grey-base]">
                <li>✓ Custom Design</li>
                <li>✓ Mobile Responsive</li>
                <li>✓ SEO Optimization</li>
                <li>✓ Contact Form</li>
                <li>✓ 2 Revisions</li>
                <li>✓ 5 Pages</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button path={cal30MinLink}>Get Started</Button>
            </CardFooter>
          </Card>

          <Card className="relative p-6 bg-[--clr-base-accent] before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-[rgba(var(--color1),0.8)] before:via-[rgba(var(--color3),0.8)] before:to-[rgba(var(--color5),0.8)] before:rounded-xl before:-z-10">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Custom Web App</CardTitle>
              <CardDescription className="text-3xl md:text-4xl font-bold mt-2 text-[--clr-grey-base]">Custom Quote</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg text-[--clr-grey-base]">
                <li>✓ Everything in Basic</li>
                <li>✓ Custom Functionality</li>
                <li>✓ Database Integration</li>
                <li>✓ User Authentication</li>
                <li>✓ API Integration</li>
                <li>✓ Unlimited Revisions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button path={cal30MinLink}>Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="faq" className="min-h-screen flex flex-col gap-12 py-32 px-5 md:px-20 lg:px-32 bg-[--clr-base]">
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          <h2>Frequently Asked Questions</h2>
          <p className="text-xl md:text-2xl text-[--clr-grey-base]">Everything you need to know about our services</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">How long does it take to build a website?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              Our basic websites typically take 1-2 weeks to complete. Custom web applications may take 4-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">What's included in the $250 package?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              The $250 package includes a custom-designed, mobile-responsive website with up to 5 pages, SEO optimization, a contact form, and 2 rounds of revisions. This is perfect for small businesses and personal websites.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Do you offer hosting and maintenance?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              Yes! We can help you set up hosting and provide ongoing maintenance services. We'll discuss these options during our consultation to find the best solution for your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">What if I need changes after the website is live?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              We offer flexible maintenance packages for post-launch updates and changes. The basic package includes 2 rounds of revisions, and we can discuss additional changes as needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">What technologies do you use?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              We use modern, industry-standard technologies including React, Next.js, and Tailwind CSS for frontend development. For backend needs, we work with Node.js, Python, and various databases depending on your requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="min-h-[70vh] flex flex-col gap-10 items-center justify-center py-32 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Ready to transform your online presence?</h2>
          <p className="text-xl md:text-2xl text-[--clr-grey-base]">Book a free consultation today and let's discuss your project.</p>
        </div>
        <Button path={cal30MinLink} className="text-lg">
          Schedule Your Call
          <Calendar className="ml-2"/>
        </Button>
      </section>
    </main>
  );
}
