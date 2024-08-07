const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        We’re thrilled to be sharing the warmth and joy that is The Comfy by
        supporting causes we’re passionate about. As founders, it’s beyond
        gratifying to see our products donated and smiles put on the faces of
        those in need.
      </p>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        When you purchase products from The Comfy, you are joining us on our
        mission to embrace the world in a giant hug. Our company started with a
        dream, and now we are grateful to be giving back, and even helping
        others fulfill their own dreams. We donate to causes including those in
        need, frontline workers, and the homeless. We are always interested in
        hearing about causes near and dear to your heart, so please let us know
        who you’d like to see us help. Rest assured, a portion of the proceeds
        of every Comfy product sold is set aside to help more people Feel The
        Happy!®
      </p>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        The Comfy Bros & family. Without the support of each of these people,
        this journey would not have been possible.
      </p>
    </>
  );
};
export default About;
