import Link from 'next/link';
export default function Home() {
  return (
      <main>
          <h1 className="text-3xl font-blod underline">메인 페이지</h1>
          <Link href="/admin" className="text-3xl font-blod underline hover:text-yellow-50">
              {/*<a>어드민 페이지로 이동</a>*/}
              어드민 페이지로 이동
          </Link>
          <Link href="/busket" legacyBehavior>
              <a className="text-3xl font-bold underline">장바구니 페이지로 이동</a>
          </Link>
          <div
              className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
              <img className="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo"/>
              <div>
                  <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
                  <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
              </div>
          </div>

          <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
              <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt=""/>
              <div className="space-y-2 text-center sm:text-left">
                  <div className="space-y-0.5">
                      <p className="text-lg font-semibold text-black">Erin Lindford</p>
                      <p className="font-medium text-gray-500">Product Engineer</p>
                  </div>
                  <button
                      className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                      Message
                  </button>
              </div>
          </div>

          <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
          <button className="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>

          <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
              <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
              >
              </svg>
            </span>
              </div>
              <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes
                  upside-down</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                  The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in
                  outer space.
              </p>
          </div>

          <div>
              <div className="flex items-center space-x-2 text-base">
                  <h4 className="font-semibold text-slate-900">Contributors</h4>
                  <span className="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
              </div>
              <div className="mt-3 flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                       src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                       src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                       src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                       alt=""/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""/>
                  <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                       src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt=""/>
              </div>
              <div className="mt-3 text-sm font-medium">
                  <a href="#" className="text-blue-500">+ 198 others</a>
              </div>
          </div>
      </main>
  );
}
