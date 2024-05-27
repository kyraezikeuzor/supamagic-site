import Image from "next/image";
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Toolbar from '@/components/Toolbar'
import AnimationMorphGradient from '@/components/AnimationMorphGradient'
import NavigateButton from '@/components/NavigateButton'
import Graphic from '@/components/Graphic'
import {cal30MinLink} from '@/assets/content/links'

export default function Home() {
  return (
    <main className="flex flex-col gap-10">

        <header id='hero h-screen'>
          <AnimationMorphGradient>
            <section className='z-50 w-full flex flex-col gap-5 m-5 p-8 md:mx-[15vw] lg:p-12 lg:mx-[30vw] lg:my-[20vh] 
            bg-[--clr-base] rounded-3xl border border-[--clr-base-accent] drop-shadow-sm'>
              <h1 className='leading-[1.2] lg:leading-[1.1]'>Sprica Labs is a UI/UX design studio making imaginative interfaces.</h1>
              <p className='leading-[1.4] text-lg md:text-xl text-[--clr-grey-base] font-medium'>
                Sprica turns ideas into websites, apps, and digital products for businesses, personal brands, and you.
              </p>
              <div className='flex flex-row gap-3 mt-5'>
                <Button path={cal30MinLink}>Book a call <Icon inline fillColor='inherit' size='sm' icon='Calendar'/></Button>
                <NavigateButton targetElementId='work' navigateButtonId='seeWorkButton'>
                  <Button outline>See work <Icon inline fillColor='inherit' size='sm' icon='ArrowDown'/></Button>
                </NavigateButton>
              </div>
            </section>
          </AnimationMorphGradient>
        </header>

        <Toolbar/>

        <section id='work' className='flex flex-col gap-20 items-center m-5 lg:mx-[30vw] lg:my-[20vh]'>
          <h2>Explore past projects</h2>
          <div className='font-medium'>
            <p>Uploading content...</p>
          </div>
        </section>

    </main>
  );
}
