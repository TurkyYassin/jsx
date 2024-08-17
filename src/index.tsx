import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';


const app = new Hono();

function Page({child}: any){
  return(
    <div className="flex justify-between items-center">
      {child}
    </div>
  )
}

function Navbar({ child }){
  return(
      
  <div>
    <div className="flex justify-between items-center m-20 ">
      <img src="05. Frames.png" alt="Bequran.net Logo"/>
      <h1 className={`text-2xl text-blue-700`}>BeQuran</h1>
      <ul className="flex gap-8 pr-5 pl-5 ">
        <li className="list-none rounded-md md:transition-all hover:bg-blue-400 hover:text-white hover:p-3 " data-value="Home"><a className="text-none sm:border-solid text-lg" href='#'>Home</a></li>
        <li className="list-none rounded-md md:transition-all hover:bg-blue-400 hover:text-white hover:p-3" data-value="About"><a className="text-none sm:border-solid text-lg" href='#'>About</a></li>
        <li className="list-none rounded-md md:transition-all hover:bg-blue-400 hover:text-white hover:p-3 " data-value="Courses"><a className="text-none sm:border-solid text-lg" href='#'>Courses</a></li>
        <li className="list-none rounded-md md:transition-all hover:bg-blue-400 hover:text-white hover:p-3" data-value="Blog"><a className="text-none sm:border-solid text-lg" href='#'>Blog</a></li>
        <li className="list-none rounded-md md:transition-all hover:bg-blue-400 hover:text-white hover:p-3" data-value="Contact"><a className="text-none sm:border-solid text-lg" href='#'>Contact</a></li>
      </ul>
      <a className="text-none sm:border-solid bg-blue-500 text-white text-lg pr-7 pl-7 pt-3 pb-3 mr-3 ml-3 rounded-md md:transition-all hover:bg-yellow-400" href='#'>login</a>
    </div>
    <div>

    </div>
    {child}
  </div>
  )
}
app.get('/images/*', serveStatic({ path: './public/images' }))
// app.get('/images', (serveStatic) => { })

app.get('/start', c => {
  return c.text('Hello turky from Hono!')
})

app.get("/",(c)=> {
  const isStarted = false;

  if(isStarted){
    c.redirect('/app');
  }

  return c.html(
    <page>
      <Navbar className="bg-amber-200"/>
        <script src="https://cdn.tailwindcss.com"></script>
        {!isStarted ? <a className="text-none sm:border-solid bg-blue-500 text-white text-lg pr-7 pl-7 pt-3 pb-3 mr-3 ml-3 rounded-md md:transition-all hover:bg-yellow-400" href='/start'>Start Now</a> : null}
        {isStarted ? <h1> hay you there </h1> : null}
    </page>
  );
});

export default app



function Mybutton(){
  return<button onclick
}