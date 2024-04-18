import Hero from "../components/Hero"
import Title from "../components/Title"

const About = () => {
  return (
    <>
      <Hero 
        bannerImage='https://static.wixstatic.com/media/cfda65_b5177bd271454af09b59ad42c820eed1~mv2_d_2048_1367_s_2.jpeg/v1/fill/w_1789,h_460,fp_0.37_0.43,q_85,usm_0.66_1.00_0.01,enc_auto/cfda65_b5177bd271454af09b59ad42c820eed1~mv2_d_2048_1367_s_2.jpeg'
        text='About' 
      />
      <div className="flex flex-col w-full px-32 sm:px-16  max-w-[800px] justify-center items-center m-auto mt-64">
        <Title 
          title="ABOUT THE PRACTITIONER"
        />


        <p className="mt-16 text-center">
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        </p>

        <p className="mt-16 text-center">
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        </p>

        <p className="mt-16 text-center">
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        </p>

        <p className="mt-16 text-center">
         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        </p>

        <p className="mt-16 text-center font-bold">
         -Asher
        </p>
      </div>
    </>
    
  )
}

export default About