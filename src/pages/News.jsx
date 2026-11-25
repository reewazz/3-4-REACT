import { Loader } from "@mantine/core"
import { useEffect, useState } from "react"

const News = () => {

    const [news,setNews] = useState([])
    const [query,setQuery] = useState("nepal")
    const [loading,setLoading] = useState(false)


    const getNews = async()=> {
    try{
        setLoading(true)
        const myNews = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2026-10-25&sortBy=publishedAt&apiKey=8f5d8b4d47cc42c897361fe532cd7c0f`)
     
        const finalResponse = await myNews.json()
      
        setNews(finalResponse.articles)
    }
    catch(err) {
      console.log(err)
    }
    finally{
        setLoading(false)
    }
    
     }

     useEffect(()=>{
getNews()
fn()
     },[])


     const fn = ()=> {
   try {
       let a = 5
       let b = 6
      let c = a+b
      console.log(c,"output of c")
      return c
   }
   catch (error) {
alert(error)
   }
   finally {
    console.log("final statement")
   }

     }


  return (
<>
{loading ? <div className="flex justify-center"><Loader/></div> : 
  <div>

        <input type="text" className="border border-gray-400" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button onClick={getNews} className="bg-blue-400">Search News</button>
 <section className="bg-[#f8f7f4] min-h-screen py-14 px-5 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="border-b-2 border-black pb-6 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
            The latest stories
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-950">
            Latest News<span className="text-red-700">.</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            Stories, perspectives and updates from around the world.
          </p>
        </div>

        {/* Featured Article */}
        {news?.slice(0, 1).map((item, index) => (
          <article
            key={item.url || index}
            className="grid md:grid-cols-2 gap-8 mb-14 group"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-[300px] md:h-[420px] object-cover
                transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-red-700 text-xs font-bold uppercase tracking-widest mb-4">
                Featured Story
              </span>

              <h2 className="font-serif text-3xl md:text-4xl
                font-bold leading-tight text-gray-950
                group-hover:text-red-800 transition-colors">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-7 mt-5 line-clamp-4">
                {item.description}
              </p>

              <div className="mt-7 flex items-center justify-between
                border-t border-gray-300 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {item.author || item.source?.name}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2
                text-sm font-semibold text-red-700 hover:gap-4
                transition-all"
              >
                Read Full Story <span>→</span>
              </a>
            </div>
          </article>
        ))}

        {/* News Grid */}
        <div className="flex items-center justify-between border-b
          border-gray-300 pb-4 mb-7">
          <h2 className="font-serif text-2xl font-bold">
            More Headlines
          </h2>
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Latest updates
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10">

          {news?.slice(1).map((item, index) => (
            <article
              key={item.url || index}
              className="group cursor-pointer"
            >
              <a href={item.url}
                target="_blank"
                rel="noopener noreferrer">

                <div className="overflow-hidden rounded-lg
                  bg-gray-200 aspect-[16/10]">
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110"
                  />
                </div>

                <div className="pt-4">
                  <span className="text-[10px] font-bold
                    uppercase tracking-[0.2em] text-red-700">
                    {item.source?.name || "Latest News"}
                  </span>

                  <h3 className="font-serif text-xl font-bold
                    leading-snug text-gray-900 mt-2
                    group-hover:text-red-800 transition-colors
                    line-clamp-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3
                    leading-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-200
                    text-xs text-gray-400">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
    </div>
    
}

   </> 
  )
}

export default News