export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8'>
      <div className='bg-white shadow-md rounded-lg p-6 max-w-sm w-full'>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 mb-4 rounded-full bg-gray-300 flex items-center justify-center'>
            <span className='text-2xl font-bold text-gray-600'>JD</span>
          </div>
          <h1 className='text-2xl font-bold mb-2 text-black'>山田太郎</h1>
          <p className='text-gray-600 mb-4'>ウェブ開発者</p>
        </div>
        <div className='text-left'>
          <h2 className='text-xl font-semibold mb-2'>自己紹介</h2>
          <p className='text-gray-700 mb-4'>
            私は、React、Next.js、Tailwind
            CSSを使用してモダンなウェブアプリケーションを構築する経験がある、情熱的なウェブ開発者です。
          </p>
          <h2 className='text-xl font-semibold mb-2'>スキル</h2>
          <ul className='list-disc list-inside text-gray-700'>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
