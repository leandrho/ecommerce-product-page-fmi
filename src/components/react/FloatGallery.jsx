import { useState } from "react";

const images = ['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg'];

export const FloatGallery = ({isOpen, setOpen}) => {
    const [curImg, setCurImg] = useState(0);
    const nextImage = ()=>{
        if(curImg < images.length -1)
            setCurImg(curImg+1);
    }
    const prevImage = ()=>{
        if(curImg > 0)
            setCurImg(curImg-1);
    }
    const setCurrentImage = (e, idx)=>{
        // const ul = document.querySelector('#gallery-list').querySelectorAll('li');
        // ul.forEach(l => l.firstElementChild.firstElementChild.classList.remove('active'));
        // e.target.classList.add("active");
        setCurImg(idx);
    }
  return (
    <>
    <div className={ isOpen ? 
                     "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-screen" + 
                     " after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:bg-black after:opacity-60 after:z-[-10] "
                     :" hidden "
    }>
        
        <div className="flex flex-col gap-4  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[450px]  w-full">
            <button className="text-white flex self-end hover:text-orangeCustom"
                    onClick={()=>setOpen(false)}
            >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
            </button>
            <div className="h-[300px] relative md:rounded-xl lg:h-auto ">
                <img src={images[curImg]} alt="" className="w-full h-full object-cover md:rounded-xl"/>
                <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center
                            absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%]  hover:text-orangeCustom
                            "
                        onClick={()=>{prevImage()}}
                        >
                    <svg className="scale-75" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center
                            absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] hover:text-orangeCustom
                            "
                        onClick={()=>{nextImage()}}
                        >
                        <svg className="scale-75" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="4" fill="none" fillRule="evenodd"/></svg>
                </button>
            </div>
            <div className="flex px-6 mt-3">
                <ul className="flex justify-between gap-6" id='gallery-list'>
                    {
                        images.map((img, index)=>{
                            return <li key={index} className="gallery-item rounded-xl">
                                <button className={curImg === index? "rounded-xl active":"hover:bg-white rounded-xl cursor-pointer  "}
                                        onClick={(e)=>{setCurrentImage(e, index)}}
                                > 
                                    <img src={img} alt="" className="rounded-xl w-full object-cover hover:opacity-60"/>
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
</>
  )
}
