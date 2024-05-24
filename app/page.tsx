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
            <div className='z-50 w-full flex flex-col gap-3 m-5 p-5 md:mx-[20vw] lg:p-12 lg:mx-[30vw] lg:my-[20vh] 
            bg-[--clr-base] rounded-3xl border-2 border-[--clr-base-accent] shadow-sm'>
              <h1 className=''>Sprica Labs is a UI/UX design firm crafting great user experiences.</h1>
              <p className='text-base md:text-xl'>
                Sprica Labs creates websites, apps, and digital products for businesses, personal brands, and you.
              </p>
              <div className='flex flex-row gap-3 sm:gap-5 mt-5'>
                <Button path={cal30MinLink}>Book a call <Icon inline fillColor='inherit' size='sm' icon='Calendar'/></Button>
                <NavigateButton targetElementId='work' navigateButtonId='seeWorkButton'>
                  <Button outline>See work <Icon inline fillColor='inherit' size='sm' icon='ArrowDown'/></Button>
                </NavigateButton>
              </div>
            </div>
          </AnimationMorphGradient>
        </header>

        <Toolbar/>

        <section id='work' className='flex flex-col gap-20 items-center m-5 lg:mx-[30vw] lg:my-[20vh]'>
          <h2>Explore past projects</h2>
          <div className=''>
            <p>Currently uploading content.</p>
          </div>
        </section>

    </main>
  );
}
