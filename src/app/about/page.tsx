import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-4 p-24'>
      <h1 className='font-bold mb-12 text-5xl'>Hello this is about me</h1>
      <div className='flex flex-col items-center gap-24 '>
        <Image src='/images/myInfo.jpeg' alt='pic' width={360} height={96} priority />
        <div className='flex flex-col justify-center gap-4 '>
          <p>I am Frontend Web Developer</p>
          <p>I was IOS Developer</p>
          <p>I want to be a good developer</p>
        </div>
      </div>
    </main>
  );
}
