import type { Metadata, ResolvingMetadata } from 'next'
import getProject from '@/assets/utils/helpers'
import Link from 'next/link'

type ProjectPageProps = {
  params: {projectPathName:string}
};

export async function generateMetadata(
    { params }: ProjectPageProps,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params

    // fetch data
    const initiative = getProject(params.projectPathName)
   
    return {
      title: `${initiative?.name} | Omelora`,
    }
  }

export default function ProjectPage({params}:ProjectPageProps) {

    const project = getProject(params.projectPathName)

    return (
        <section className="flex flex-col gap-10">
            <header className='flex flex-col gap-5'>
                <h1 className='ft-cooper text-center'>{project?.name}</h1>
            </header>
        </section>
    )
}