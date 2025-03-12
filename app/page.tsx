import Image from "next/image";
import Button from "@/components/ui/button";
import Toolbar from "@/components/ui/toolbar";
import AnimationMorphGradient from "@/components/ui/animation";
import { Navigate } from "@/components/ui/navigate";
import Logo from "@/components/ui/logo";
import { cal30MinLink } from "@/assets/content/links";
import { ArrowDown, Calendar, Plane, Star, Check, Rocket } from 'lucide-react'
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
import { Separator } from "@/components/ui/separator";
import { pricingTiers } from "@/lib/pricing";
import { processSteps } from "@/lib/process";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <header className="max-h-screen flex items-center justify-center">
        <AnimationMorphGradient>
          <section className="z-50 w-fit max-w-[750px] flex flex-col gap-5 m-5 p-8 md:p-12 md:mx-[15vw] lg:p-12 lg:mx-[25vw] 2xl:mx-[30vw] bg-[--clr-base-accent] rounded-3xl border border-[--clr-base-accent] drop-shadow-sm">
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
              We build fast, high performing sites at{" "}<br className="hidden"/> 
              <span className="inline-flex align-middle flex flex-row gap-2">
                <Logo variant="minimal" asLink={false} />Supamagic.
              </span>
            </h1>
            <p className="leading-[1.4] text-lg md:text-xl">
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

      <section id="work" className="flex flex-col gap-5 py-12 px-5 md:px-20 lg:px-32">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h2>Explore our recent work</h2>
          <p className="text-xl text-[--clr-grey-base]">Check out our latest projects</p>
        </div>
        <ProjectScroll projects={projects} />
      </section>

      <section id="process" className="flex flex-col gap-20 py-12 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-3 text-center">
          <h2>Your website should do the most marketing for you. But it&apos;s not.</h2>
          <p className="text-xl">You need to turn website views into customers.</p>
        </div>

        <div className="flex flex-col gap-10 max-w-7xl mx-auto w-full">
          {/* First row */}
          <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-6 gap-10">
            {processSteps.slice(0, 3).map((step) => (
              <div 
                key={step.number} 
                className="lg:col-span-2 flex flex-col items-center justify-center text-center gap-5 p-8 bg-[--clr-base-accent] rounded-xl"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h4 className="text-xl md:text-2xl font-medium">{step.title}</h4>
                    <p className="text-base text-[--clr-grey-base]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className='grid lg:grid-rows-subgrid grid-cols-1 lg:row-start-2 lg:col-start-2 lg:col-span-4 gap-10'>
            {processSteps.slice(3).map((step) => (
              <div 
                key={step.number} 
                className="lg:col-span-2 lg:row-start-1 flex-1 w-full lg:min-w-[280px] lg:max-w-[350px] flex flex-col items-center justify-center text-center gap-5 p-8 bg-[--clr-base-accent] rounded-xl"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h4 className="text-xl md:text-2xl font-medium">{step.title}</h4>
                    <p className="text-base text-[--clr-grey-base]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>
      </section>

      <section id="pricing" className="flex flex-col gap-10 py-12 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-5 text-center">
          <h2>Clear pricing, clear results.</h2>
          <p className="text-xl">Simple pricing with Stripe.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {pricingTiers.map((tier, index) => (
            <Card key={tier.name} className="p-2 rounded-xl h-fit relative">
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </div>
              )}
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-medium">{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-semibold">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                </div>
              </CardHeader>
              <Separator className="h-[2px] px-4"/>
              <CardContent className='pt-6'>
                <p className="text-lg mb-4 font-medium">{tier.description}</p>
                <ul className="space-y-2 text-[--clr-grey-base]">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <span className="bg-gray-100 rounded-full p-1 text-[--clr-grey-dark]">
                        <Check className="w-3 h-3"/>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button 
                  path={cal30MinLink} 
                  className={`w-full ${tier.isPopular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="w-full flex flex-col gap-12 py-12 px-5 md:px-20 lg:px-32 bg-[--clr-base]">
        <div className="flex flex-col gap-6 text-center mx-auto">
          <h2>Frequently Asked Questions</h2>
          <p className="text-xl">Everything you need to know about our services</p>
        </div>

        <Accordion type="single" collapsible className="mx-auto w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">How long does it take to build a website?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              Our basic websites typically take 1-2 weeks to complete. Custom web applications may take 4-8 weeks depending on complexity. We&apos;ll provide a detailed timeline during our initial consultation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">What&apos;s included in the $250 package?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              The $250 package includes a custom-designed, mobile-responsive website with up to 5 pages, SEO optimization, a contact form, and 2 rounds of revisions. This is perfect for small businesses and personal websites.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">Do you offer hosting and maintenance?</AccordionTrigger>
            <AccordionContent className="text-[--clr-grey-base] text-lg">
              Yes! We can help you set up hosting and provide ongoing maintenance services. We&apos;ll discuss these options during our consultation to find the best solution for your needs.
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

      <section className="z-[999] flex flex-col gap-10 items-center justify-center py-12 px-5 md:px-20 lg:px-32">
        <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Ready to transform your online presence? <Rocket className="inline-block align-middle w-8 h-8"/></h2>
          <p className="text-xl md:text-2xl">Book a free consultation today and let&apos;s discuss your project.</p>
        </div>
        <Button path={cal30MinLink} className="text-lg">
          Schedule Your Call
          <Calendar className="ml-2"/>
        </Button>
      </section>

    </main>
  );
}
